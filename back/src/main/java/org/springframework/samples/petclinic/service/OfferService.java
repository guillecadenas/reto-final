package org.springframework.samples.petclinic.service;

import java.util.Collection;
import java.util.Date;

import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.model.Offer;

public interface OfferService {
	
	public void saveOffer(Offer offer) throws DataAccessException;
	
	public void deleteOffer(Offer offer) throws DataAccessException;
	
	public boolean updateOffer(Offer offer);

	public Collection<Offer> findAll() throws DataAccessException;
	
	public Collection<Offer> findByExpirationDateBefore(Date fechaExpiracion) throws DataAccessException;

}
