package org.springframework.samples.petclinic.service;

import java.util.Date;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.model.Offer;

public interface OfferService {
	
	public void saveOffer(Offer offer) throws DataAccessException;
	
	public void deleteOffer(Offer offer) throws DataAccessException;
	
	public boolean updateOffer(Offer offer);

	public List<Offer> findAll() throws DataAccessException;
	
	public List<Offer> findByExpirationDateAfter(Date fecha) throws DataAccessException;
	
	public Offer findOfferById(int id) throws DataAccessException;

}
