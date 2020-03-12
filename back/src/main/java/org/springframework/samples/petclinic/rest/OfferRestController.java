package org.springframework.samples.petclinic.rest;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.model.Offer;
import org.springframework.samples.petclinic.service.OfferService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/api/offers")
public class OfferRestController {

	@Autowired
	private OfferService offerServ;
	
	
	@PreAuthorize( "hasRole(@roles.OWNER_ADMIN)" )
	@RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<List<Offer>> getOffersList() {
		
		List<Offer> offers = this.offerServ.findAll();
		if (offers.isEmpty()) {
			return new ResponseEntity<List<Offer>>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Offer>>(offers, HttpStatus.OK);
	}


    @PreAuthorize( "hasRole(@roles.OWNER_ADMIN)" )
	@RequestMapping(value = "/{offerId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Offer> getOffer(@PathVariable("offerId") int offerId) {
		Offer offer = null;
		offer = this.offerServ.findOfferById(offerId);
		if (offer == null) {
			return new ResponseEntity<Offer>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Offer>(offer, HttpStatus.OK);
	}

    @PreAuthorize( "hasRole(@roles.OWNER_ADMIN)" )
	@RequestMapping(value = "/addOffer", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Offer> addOffer(@RequestBody  Offer offer, BindingResult bindingResult,
			UriComponentsBuilder ucBuilder) {
		BindingErrorsResponse errors = new BindingErrorsResponse();
		HttpHeaders headers = new HttpHeaders();
		if (bindingResult.hasErrors() || (offer == null)) {
			errors.addAllErrors(bindingResult);
			headers.add("errors", errors.toJSON());
			return new ResponseEntity<Offer>(headers, HttpStatus.BAD_REQUEST);
		}
		this.offerServ.saveOffer(offer);
		headers.setLocation(ucBuilder.path("/api/offers/{id}").buildAndExpand(offer.getId()).toUri());
		return new ResponseEntity<Offer>(offer, headers, HttpStatus.CREATED);
	}

    @PreAuthorize( "hasRole(@roles.OWNER_ADMIN)" )
	@RequestMapping(value = "/{offerId}", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Offer> updateOffer(@PathVariable("offerId") int offerId, @RequestBody @Valid Offer offer,
			BindingResult bindingResult, UriComponentsBuilder ucBuilder) {
		BindingErrorsResponse errors = new BindingErrorsResponse();
		HttpHeaders headers = new HttpHeaders();
		if (bindingResult.hasErrors() || (offer == null)) {
			errors.addAllErrors(bindingResult);
			headers.add("errors", errors.toJSON());
			return new ResponseEntity<Offer>(headers, HttpStatus.BAD_REQUEST);
		}
		Offer currentOffer = this.offerServ.findOfferById(offerId);
		if (currentOffer == null) {
			return new ResponseEntity<Offer>(HttpStatus.NOT_FOUND);
		}
		currentOffer.setTitle(offer.getTitle());
		currentOffer.setDescription(offer.getDescription());
		currentOffer.setDiscount(offer.getDiscount());
		currentOffer.setExpiration_date(offer.getExpiration_date());
		this.offerServ.saveOffer(currentOffer);
		return new ResponseEntity<Offer>(currentOffer, HttpStatus.NO_CONTENT);
	}

    @PreAuthorize( "hasRole(@roles.OWNER_ADMIN)" )
	@RequestMapping(value = "/{offerId}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	@Transactional
	public ResponseEntity<Void> deleteOffer(@PathVariable("offerId") int offerId) {
		Offer offer = this.offerServ.findOfferById(offerId);
		if (offer == null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		this.offerServ.deleteOffer(offer);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
    
    @PreAuthorize( "hasRole(@roles.OWNER_ADMIN)" )
	@RequestMapping(value = "/offersValid", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	@Transactional
	public ResponseEntity<List<Offer>> getOffersValid() {
		List<Offer> offers = this.offerServ.findByExpirationDateAfter(new Date());
		if (offers.isEmpty()) {
			return new ResponseEntity<List<Offer>>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Offer>>(offers, HttpStatus.OK);
	}
	
}
