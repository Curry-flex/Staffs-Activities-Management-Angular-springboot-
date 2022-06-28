package com.example.demo.repositrory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.AppUser;

public interface AppUserRepository extends JpaRepository<AppUser, Integer> {

}
