package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.AppUser;
import com.example.demo.entity.User;
import com.example.demo.repositrory.AppUserRepository;
import com.example.demo.repositrory.UserDao;

@Service
public class AppUserService {

	 @Autowired
	 private UserDao userDao;
	 
	 public List<User> getAllAppUser()
	 {
		 return (List<User>) userDao.findAll();
	 }
}
