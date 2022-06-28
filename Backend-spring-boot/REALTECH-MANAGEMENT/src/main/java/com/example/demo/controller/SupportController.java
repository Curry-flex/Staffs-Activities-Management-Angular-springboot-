package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Support;
import com.example.demo.entity.SupportCountByBank;
import com.example.demo.entity.TodaySupport;
import com.example.demo.service.SupportService;
import com.example.demo.utility.Helper;

@RestController
@RequestMapping("api/realbus/")
@CrossOrigin(origins = "http://localhost:4200")
public class SupportController {
    @Autowired
    private SupportService supportService;
    
    @Autowired
    private Helper helper;
    
   @PostMapping
   public Support addSupport(@RequestBody Support support)
   {
	   support.setCreated_at(helper.getGepgDate());
	   support.setReport_date(helper.getReportDate());
	   return supportService.addSupport(support);
	   
   }
   
   @GetMapping
   public List<Support> getAllSupport()
   {
	   return supportService.getAllSupport();
   }
   
   @DeleteMapping("{id}")
   public void deleteSupport(@PathVariable int id)
   {
	   supportService.deleteSupport(id);
   }
   
   @GetMapping("{id}")
   public Support getSupportByID(@PathVariable int id)
   {
	   return supportService.findSupportByID(id);
   }
   
   @PutMapping("{id}")
   public Support updateSupport(@PathVariable int id ,@RequestBody Support support)
   {
	   return supportService.supportUpdate(id, support);
   }
   
   @PostMapping("supportCount")
   public int getSupportByBank(@RequestBody SupportCountByBank countByBank)
   {
	   return supportService.getSupportCountByBank(countByBank.getBank());
   }
   
   @PostMapping("todaySupports")
   public int getTodaySupports(@RequestBody TodaySupport support)
   {
	   support.setDate(helper.getReportDate());
	   System.out.println(support);
	   return supportService.getTodaySupport(support);
   }
    
}
