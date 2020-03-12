package org.springframework.samples.petclinic.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.samples.petclinic.model.Offer;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferRepository extends JpaRepository<Offer, Integer>{
	
	Offer findById(int id);
	
	Offer findByExpirationDateBefore(Date fechaExpiracion);

}
