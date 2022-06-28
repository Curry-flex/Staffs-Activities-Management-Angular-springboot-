package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Schedule;
import com.example.demo.entity.ScheduleResponse;
import com.example.demo.repositrory.ScheduleRepository;

@Service
public class ScheduleService {

	 @Autowired
	 private ScheduleRepository  scheduleRepository;
	 
	 public Schedule addSchedule(Schedule schedule)
	 {
		 return scheduleRepository.save(schedule);
	 }
	 
	 public List<Schedule> getSpecificSchedules(int id)
	 {
		 return scheduleRepository.getSpecificSchedule(id);
	 }
	 
	 public Schedule getScheduleByID(int id)
	 {
		 return  scheduleRepository.findById(id).orElseThrow();
	 }
	 
	 public Schedule updateSchedule(int id,Schedule schedule)
	 {
		 Schedule scheduleToUpdate = scheduleRepository.findById(id).orElseThrow();
	     scheduleToUpdate.setStatus(schedule.getStatus());
	     
	     Schedule updatedSchedule = scheduleRepository.save(scheduleToUpdate);
	     
	     return updatedSchedule;
		 
		 
	 }
	 
	 public List<Schedule> getAllSchedule()
	 {
		 return scheduleRepository.findAll();
	 }
}
