package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Support;
import com.example.demo.entity.TodaySupport;
import com.example.demo.repositrory.SupportRepository;
import com.example.demo.utility.Helper;

@Service
public class SupportService {

	@Autowired
	private SupportRepository supportRepository;
	
	@Autowired
	private Helper helper;
	
	public Support addSupport(Support support)
	{
		return supportRepository.save(support);
	}
	
	public Support findSupportByID(int id)
	{
		return supportRepository.findById(id).orElse(null);
	}
	
	public void deleteSupport(int id)
	{
		supportRepository.deleteById(id);
	}
	
	public List<Support> getAllSupport()
	{
		return supportRepository.getSupportList();
	}
	
	public Support supportUpdate(int id,Support support)
	{
	   Support support_to_update = supportRepository.findById(id).orElseThrow();
	    support_to_update.setSupport_title(support.getSupport_title());
	    support_to_update.setSupport_from(support.getSupport_from());
	    support_to_update.setDescription(support.getDescription());
	    support_to_update.setStatus(support.getStatus());
	    
	    Support updatedSupport= supportRepository.save(support_to_update);
	    
	    return updatedSupport;
	}
	
	public int getSupportCountByBank(String bank)
	{
	   return supportRepository.supportCountByBank(bank);
	}
	
	public int getTodaySupport(TodaySupport todaySupport)
	{
		  
		return supportRepository.todaySupportCount(todaySupport.getBank(), todaySupport.getDate());
	}
	
}
