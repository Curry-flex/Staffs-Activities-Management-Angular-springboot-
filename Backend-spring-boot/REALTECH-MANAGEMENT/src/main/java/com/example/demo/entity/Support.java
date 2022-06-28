package com.example.demo.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Support {

	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private int id;
	 private String support_title;
	 private String support_from;
	 private String description;
	 @Column(columnDefinition = "int default 0")
	 private int status;
	 private String report_date;
	 private String created_at;
	 
	public Support() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Support(int id, String support_title, String support_from, String description, int status,
			String report_date, String created_at) {
		super();
		this.id = id;
		this.support_title = support_title;
		this.support_from = support_from;
		this.description = description;
		this.status = status;
		this.report_date = report_date;
		this.created_at = created_at;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSupport_title() {
		return support_title;
	}

	public void setSupport_title(String support_title) {
		this.support_title = support_title;
	}

	public String getSupport_from() {
		return support_from;
	}

	public void setSupport_from(String support_from) {
		this.support_from = support_from;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getReport_date() {
		return report_date;
	}

	public void setReport_date(String report_date) {
		this.report_date = report_date;
	}

	public String getCreated_at() {
		return created_at;
	}

	public void setCreated_at(String created_at) {
		this.created_at = created_at;
	}

	
      
	

	
	 
}
