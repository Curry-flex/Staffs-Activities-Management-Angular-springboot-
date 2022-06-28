package com.example.demo.repositrory;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.User;

@Repository
public interface UserDao extends CrudRepository<User, Integer> {
	User findByUserName(String userName);
}
