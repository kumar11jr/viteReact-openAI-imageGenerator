package com.javaProject.Login_Register.Service.impl;


import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javaProject.Login_Register.Dto.EmployeeDTO;
import com.javaProject.Login_Register.Dto.LoginDTO;
import com.javaProject.Login_Register.Entity.Employee;
import com.javaProject.Login_Register.Repo.EmployeeRepo;
import com.javaProject.Login_Register.Service.EmployeeService;

import com.javaProject.Login_Register.response.LoginResponse;


@Service
public class EmployeeIMPL implements EmployeeService {


    @Autowired
    private EmployeeRepo employeeRepo;
    // private PasswordEncoder passwordEncoder;

    @Override
    public String addEmployee(EmployeeDTO employeeDTO) {
        Employee employee = new Employee();
        employee.setId(employeeDTO.getId());
        employee.setUsername(employeeDTO.getUsername());
        employee.setPassword(employeeDTO.getPassword());
        // this.passwordEncoder.encode()
        employeeRepo.save(employee);
        return employee.getUsername();
    }

    EmployeeDTO employeeDTO;
    @Override
    public LoginResponse loginEmployee(LoginDTO loginDTO) {
        String msg = "";
        Employee employee1 = employeeRepo.findByUsername(loginDTO.getUsername());
        if (employee1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = employee1.getPassword();
            // Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (password.equals(encodedPassword)) {
                Optional<Employee> employee = employeeRepo.findOneByUsernameAndPassword(loginDTO.getUsername(),loginDTO.getPassword());
                if (employee.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
 
                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("Email not exits", false);
        }
 
 
    }
    

}
