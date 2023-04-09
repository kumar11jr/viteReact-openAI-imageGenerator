package com.javaProject.Login_Register.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.javaProject.Login_Register.Entity.Employee;

@EnableJpaRepositories
@Repository
public interface EmployeeRepo extends JpaRepository<Employee,Integer>{
    Optional<Employee> findOneByUsernameAndPassword(String username, String password);
    Employee findByUsername(String username);
}
