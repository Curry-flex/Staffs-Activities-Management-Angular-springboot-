package com.example.demo.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Schedule {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String task;
	private String assigned_to;
	private String Start_date;
	private String end_date;
	private String description;
	private int status;
	
	@ManyToOne(
			cascade = CascadeType.ALL
			)
	@JoinColumn(
			name="user_id_fk",
			insertable = false,
			updatable = false
			)
	
    private User user;
	private int user_id_fk;
	
	
	
	public Schedule() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Schedule(int id, String task, String assigned_to, String start_date, String end_date, String description,
			int status, User user, int user_id_fk) {
		super();
		this.id = id;
		this.task = task;
		this.assigned_to = assigned_to;
		Start_date = start_date;
		this.end_date = end_date;
		this.description = description;
		this.status = status;
		this.user = user;
		this.user_id_fk = user_id_fk;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTask() {
		return task;
	}
	public void setTask(String task) {
		this.task = task;
	}
	public String getAssigned_to() {
		return assigned_to;
	}
	public void setAssigned_to(String assigned_to) {
		this.assigned_to = assigned_to;
	}
	public String getStart_date() {
		return Start_date;
	}
	public void setStart_date(String start_date) {
		Start_date = start_date;
	}
	public String getEnd_date() {
		return end_date;
	}
	public void setEnd_date(String end_date) {
		this.end_date = end_date;
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
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public int getUser_id_fk() {
		return user_id_fk;
	}
	public void setUser_id_fk(int user_id_fk) {
		this.user_id_fk = user_id_fk;
	}
	
    
	
	
	
}
