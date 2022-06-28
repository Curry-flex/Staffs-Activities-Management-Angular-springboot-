package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.StatsService;

@RestController
@RequestMapping("api/realbus/stats/")
public class StatsController {
  @Autowired
  private StatsService statsService;
  
  @GetMapping("userCount")
  public Long userCount()
  {
	  return statsService.userCount();
			  
  }
  @GetMapping("projects")
  public Long projectCount()
  {
	  return statsService.projectCount();
  }
  
  @GetMapping("completed-projects")
  public Long completedProjects()
  {
	  return statsService.completedProjects();
  }
  @GetMapping("supports")
  public Long totalSupport()
  {
	  return statsService.totalSupport();
  }
}
