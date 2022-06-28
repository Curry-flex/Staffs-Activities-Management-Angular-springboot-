package com.example.demo.repositrory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.Schedule;
import com.example.demo.entity.ScheduleResponse;

public interface ScheduleRepository extends JpaRepository<Schedule, Integer> {
     @Query(value="select * from schedule where user_id_fk=?1" ,nativeQuery = true)
     List<Schedule> getSpecificSchedule(int id);
}
