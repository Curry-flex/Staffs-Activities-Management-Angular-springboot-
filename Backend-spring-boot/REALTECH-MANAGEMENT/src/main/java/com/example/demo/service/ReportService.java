package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Report;
import com.example.demo.entity.Support;
import com.example.demo.repositrory.SupportRepository;

@Service
public class ReportService {
   @Autowired
   private SupportRepository repository;
   
   public List<Support> getSupportReport(Report report)
   {
	 
	 return repository.getSupportByDate(report.getStart_date(), report.getEnd_date());  
	  
   }
}
