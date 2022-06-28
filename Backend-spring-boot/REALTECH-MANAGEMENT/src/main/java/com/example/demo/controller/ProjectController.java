package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Project;
import com.example.demo.repositrory.ProjectRepository;
import com.example.demo.service.ProjectService;
import com.example.demo.utility.Helper;

@RestController
@RequestMapping("api/realbus/projects/")
@CrossOrigin(origins = "http://localhost:4200")
public class ProjectController {

	 @Autowired
	 private ProjectService projectService;
	 
	 @Autowired
	 private Helper helper;
	 
	 @PostMapping
	 @PreAuthorize("hasRole('Admin')")
	 public Project addNewProject(@RequestBody Project project)
	 {
	
		 project.setCreated_at(helper.getGepgDate());
		 return projectService.addProject(project);
	 }
	 
	 @GetMapping
	 @PreAuthorize("hasRole('Admin')")
	 public List<Project> getProjects()
	 {
		 return projectService.getAllProjects();
	 }
	 
	 @DeleteMapping("{id}")
	 @PreAuthorize("hasRole('Admin')")
	 public void deleteProject(@PathVariable int id)
	 {
		 projectService.deleteProject(id);
	 }
	 
	 @GetMapping("{id}")
	// @PreAuthorize("hasRole('Admin')")
	 public Project getProjectByID(@PathVariable int id)
	 {
		 return projectService.getProjectByID(id);
	 }
	 
	 @PutMapping("{id}")
	 //@PreAuthorize("hasRole('Admin')")
	 public Project updateProject(@PathVariable int id , @RequestBody Project project)
	 {
		 return projectService.updateProject(id, project);
	 }
	 
	 @GetMapping("specific/{id}")
	 public List<Project> getSpecificUsersProject(@PathVariable int id)
	 {
		 return projectService.getSpecificUsersProject(id);
	 }
}
