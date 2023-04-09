package com.javaProject.Login_Register.Service;
import com.javaProject.Login_Register.Dto.EmployeeDTO;
import com.javaProject.Login_Register.Dto.LoginDTO;

import com.javaProject.Login_Register.response.LoginResponse;

public interface EmployeeService {

    String addEmployee(EmployeeDTO employeeDTO);

    LoginResponse loginEmployee(LoginDTO loginDTO);
    
}
