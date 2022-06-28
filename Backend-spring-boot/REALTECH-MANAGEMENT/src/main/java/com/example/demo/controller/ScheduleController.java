package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Schedule;
import com.example.demo.entity.ScheduleResponse;
import com.example.demo.service.ScheduleService;

@RestController
@RequestMapping("api/realbus/schedule")
@CrossOrigin(origins = "http://localhost:4200")
public class ScheduleController {
  
	@Autowired
	private ScheduleService scheduleService;
	
	@PostMapping
	@PreAuthorize("hasRole('Admin')")
	public Schedule addSchedule(@RequestBody Schedule schedule)
	{
		 
		return scheduleService.addSchedule(schedule);
	}
	@GetMapping("/{id}")
	public List<Schedule> getScheduleOfAuthenticatedUser(@PathVariable int id)
	{
		return scheduleService.getSpecificSchedules(id);
	}
	
	@GetMapping("/update/{scheduleID}")
	public Schedule getScheduleByID(@PathVariable int scheduleID)
	{
		return scheduleService.getScheduleByID(scheduleID);
	}
	
	@PutMapping("/update/{id}")
	
	public Schedule updateSchedule(@PathVariable int id ,@RequestBody Schedule schedule)
	{
		return scheduleService.updateSchedule(id, schedule);
	}
	
	@GetMapping
	public List<Schedule> scheduleList()
	{
		return scheduleService.getAllSchedule();
	}
}
