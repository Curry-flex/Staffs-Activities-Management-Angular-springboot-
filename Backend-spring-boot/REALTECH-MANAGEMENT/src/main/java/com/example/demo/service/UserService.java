package com.example.demo.service;


import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.entity.GetAssaignedUser;
import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repositrory.RoleDao;
import com.example.demo.repositrory.UserDao;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private RoleDao roleDao;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void initRoleAndUser() {

//        Role adminRole = new Role();
//        adminRole.setId(1);
//        adminRole.setRoleName("Admin");
//        adminRole.setRoleDescription("Admin role");
//        roleDao.save(adminRole);
//
//        Role userRole = new Role();
//        userRole.setId(2);
//        userRole.setRoleName("User");
//        userRole.setRoleDescription("Default role for newly created record");
//        roleDao.save(userRole);
//
//        User adminUser = new User();
//        adminUser.setId(1);
//        adminUser.setUserName("admin");
//        adminUser.setUserPassword(getEncodedPassword("password"));
//        adminUser.setUserFirstName("admin");
//        adminUser.setUserLastName("admin");
//        Set<Role> adminRoles = new HashSet<>();
//        adminRoles.add(adminRole);
//        adminUser.setRole(adminRoles);
//        userDao.save(adminUser);

//        User user = new User();
//        user.setId(2);
//        user.setUserName("user");
//        user.setUserPassword(getEncodedPassword("123"));
//        user.setUserFirstName("Real");
//        user.setUserLastName("Tech");
//        Set<Role> userRoles = new HashSet<>();
//        userRoles.add(userRole);
//        user.setRole(userRoles);
//        userDao.save(user);
//        
//        User user2 = new User();
//        user.setId(3);
//        user.setUserName("curry");
//        user.setUserPassword(getEncodedPassword("123"));
//        user.setUserFirstName("Real");
//        user.setUserLastName("Tech");
//        Set<Role> userRoles1 = new HashSet<>();
//        userRoles1.add(userRole);
//        user2.setRole(userRoles);
    //    userDao.save(user);
    	
//        Role adminRole = new Role();
//        adminRole.setRoleName("Admin");
//        adminRole.setRoleDescription("Admin role");
//        roleDao.save(adminRole);
//
//        Role userRole = new Role();
//        userRole.setRoleName("User");
//        userRole.setRoleDescription("Default role for newly created record");
//        roleDao.save(userRole);
//
//        User adminUser = new User();
//        adminUser.setUserName("admin");
//        adminUser.setUserPassword(getEncodedPassword("123"));
//        adminUser.setUserFirstName("admin-realtech");
//        adminUser.setUserLastName("admin");
//        Set<Role> adminRoles = new HashSet<>();
//        adminRoles.add(adminRole);
//        adminUser.setRole(adminRoles);
//        userDao.save(adminUser);
//
//        User user = new User();
//        user.setUserName("user");
//        user.setUserPassword(getEncodedPassword("123"));
//        user.setUserFirstName("user-realtech");
//        user.setUserLastName("realtech");
//        Set<Role> userRoles = new HashSet<>();
//        userRoles.add(userRole);
//        user.setRole(userRoles);
//        userDao.save(user);
        
        
     
    }

    public User registerNewUser(User user) {
        Role role = roleDao.findById(user.getRole_id()).get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setRole(userRoles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));

        return userDao.save(user);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
    
    public User getUser(int id)
    {
    	return  userDao.findById(id).orElseThrow();
    }
    
    public User getAssignedUserName(GetAssaignedUser assaignedUser)
    {
    	return userDao.findById(assaignedUser.getId()).orElseThrow(() -> new ResourceNotFoundException("No User Found","ID",assaignedUser.getId()));
    }
}
