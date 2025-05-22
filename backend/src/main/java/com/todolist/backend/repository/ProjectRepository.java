package com.todolist.backend.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todolist.backend.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findByUserId(Long userId);
}
