package org.springframework.samples.petclinic.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.model.Offer;
import org.springframework.samples.petclinic.repository.OfferRepository;
import org.springframework.stereotype.Service;

@Service
public class OfferServiceImpl implements OfferService{
	
	private OfferRepository offerRepository;
	
	@Autowired
	public OfferServiceImpl(OfferRepository offerRepository) {
		this.offerRepository=offerRepository;
	}
	
	public void saveOffer(Offer offer) throws DataAccessException {
		offerRepository.save(offer);
	}
	
	@Override
	public void deleteOffer(Offer offer) throws DataAccessException {
		offerRepository.delete(offer);
	}
	
	@Override
	public boolean updateOffer(Offer offer) {
//		Offer = Offer1;
		if(offerRepository.findById(offer.getId())!=null) {
			offerRepository.save(offer);
			return true;
		}else
			return false;
	}

	@Override
	public List<Offer> findAll() throws DataAccessException {
		return offerRepository.findAll();
	}
	
	@Override
	public List<Offer> findByExpirationDateAfter(Date fecha) throws DataAccessException {
		List<Offer> offers=offerRepository.findByExpirationDateAfter(fecha);
		return offers;
	}

	@Override
	public Offer findOfferById(int id) throws DataAccessException {
		return offerRepository.findById(id);
	}

}
