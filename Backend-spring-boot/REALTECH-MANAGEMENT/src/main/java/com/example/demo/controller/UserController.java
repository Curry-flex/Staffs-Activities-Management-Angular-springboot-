package com.example.demo.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.GetAssaignedUser;
import com.example.demo.entity.User;
import com.example.demo.service.AppUserService;
import com.example.demo.service.UserService;

@RestController
@Service
public class UserController {
	
    @Autowired
    private UserService userService;
    @Autowired
    private AppUserService appUserService;
//    @PostConstruct
//    public void initRoleAndUser() {
//        userService.initRoleAndUser();
//    }

    @PostMapping({"api/realbus/registerNewUser"})
    public User registerNewUser(@RequestBody User user) {
        return userService.registerNewUser(user);
    }
    
    @GetMapping("api/realbus/users")
    
    public List<User> getAllUsers()
    {
    	return appUserService.getAllAppUser();
    }
    
    @GetMapping("api/realbus/user/{id}")
    public User getUserByID(@PathVariable int id)
    {
    	return userService.getUser(id);
    }
    
    @PostMapping("api/realbus/user/")
    public User getAssignedUsername(@RequestBody GetAssaignedUser assaignedUser)
    {
    	return userService.getAssignedUserName(assaignedUser);
    }

}
