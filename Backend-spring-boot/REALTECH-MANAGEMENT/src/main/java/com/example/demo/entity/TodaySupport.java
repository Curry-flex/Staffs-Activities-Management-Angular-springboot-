package com.example.demo.entity;

public class TodaySupport {
    private String bank;
    private String date;
    
    
	public String getBank() {
		return bank;
	}
	public void setBank(String bank) {
		this.bank = bank;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	@Override
	public String toString() {
		return "TodaySupport [bank=" + bank + ", date=" + date + "]";
	}
	
	
    
    
}
