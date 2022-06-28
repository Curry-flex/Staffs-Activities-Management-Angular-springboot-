package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.repositrory.ProjectRepository;
import com.example.demo.repositrory.SupportRepository;
import com.example.demo.repositrory.UserDao;



@Service
public class StatsService {
  @Autowired
  private  UserDao userDao;
  @Autowired
  private ProjectRepository projectRepository;
  @Autowired
  private SupportRepository supportRepository;
  
  public Long userCount()
  {
	  return userDao.count();
			  
  }
  public Long projectCount()
  {
	  return projectRepository.count();
  }
  
  public Long completedProjects()
  {
	  return projectRepository.completedProjects();
  }
  
  public Long totalSupport()
  {
	  return supportRepository.count();
  }
}
