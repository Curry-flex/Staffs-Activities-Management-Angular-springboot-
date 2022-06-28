package com.example.demo.repositrory;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Role;

@Repository
public interface RoleDao extends CrudRepository<Role,Integer> {

}
