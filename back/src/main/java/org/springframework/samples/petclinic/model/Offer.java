package org.springframework.samples.petclinic.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotEmpty;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "offers")
public class Offer extends BaseEntity {

	/**
     * Holds value of property title.
     */
    @NotEmpty
    @Column(name = "title")
    private String title;
    
    /**
     * Holds value of property description.
     */
    @NotEmpty
    @Column(name = "description")
    private String description;
    
    /**
     * Holds value of property discount.
     */
    @NotEmpty
    @Column(name = "discount")
    private double discount;
    
    /**
     * Holds value of property date.
     */
    @Column(name = "expiration_date")
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "yyyy/MM/dd")
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy/MM/dd")
    private Date expirationDate;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getDiscount() {
		return discount;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	public Date getExpiration_date() {
		return expirationDate;
	}

	public void setExpiration_date(Date expiration_date) {
		this.expirationDate = expiration_date;
	}
}
