package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Report;
import com.example.demo.entity.Support;
import com.example.demo.service.ReportService;

@RestController
@RequestMapping("api/realbus/report/")
public class ReportController {
	@Autowired
	private ReportService reportService;
	
	@PostMapping
	public List<Support> getSupportByDate(@RequestBody Report report)
	{
	  return reportService.getSupportReport(report);
	}

}
