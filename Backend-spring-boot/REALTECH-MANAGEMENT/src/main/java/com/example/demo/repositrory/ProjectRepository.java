package com.example.demo.repositrory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.Project;
import com.example.demo.entity.Schedule;

public interface ProjectRepository extends JpaRepository<Project, Integer> {
    
	@Query(value="select * from project p order by created_at desc",nativeQuery = true)
	List<Project> getProjectList();
	
	 @Query(value="select * from project where user_id_fk=?1" ,nativeQuery = true)
	     List<Project> getSpecificUsersProject(int id);
	 
	 @Query(value="select count(*) from project where status=1", nativeQuery = true)
	 Long completedProjects();
}
