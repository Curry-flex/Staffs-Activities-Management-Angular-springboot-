package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Project;
import com.example.demo.entity.Schedule;
import com.example.demo.repositrory.ProjectRepository;

@Service
public class ProjectService {
 @Autowired
 private  ProjectRepository projectRepository;
 
 public Project addProject(Project project)
 {
	 return projectRepository.save(project);
 }
 
 public List<Project> getAllProjects()
 {
	 return projectRepository.getProjectList();
 }
 
 public void deleteProject(int id)
 {
	 projectRepository.deleteById(id);
 }
 
 public Project getProjectByID(int id)
 {
	 return projectRepository.findById(id).orElseThrow();
 }
 
 public Project updateProject(int id ,Project project)
 {
	 Project projectToUpdate =projectRepository.findById(id).orElseThrow();
	 projectToUpdate.setProject_title(project.getProject_title());
	 projectToUpdate.setAssigned_to(project.getAssigned_to());
	 projectToUpdate.setStart_date(project.getStart_date());
	 projectToUpdate.setEnd_date(project.getEnd_date());
	 projectToUpdate.setDescription(project.getDescription());
	 projectToUpdate.setStatus(project.getStatus());
	 
	 Project updatedProject= projectRepository.save(projectToUpdate);
	 return updatedProject;
}
 
 public List<Project> getSpecificUsersProject(int id)
 {
	 return projectRepository.getSpecificUsersProject(id);
 }
 
}
