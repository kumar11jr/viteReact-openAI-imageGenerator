package com.javaProject.Login_Register.Dto;

public class EmployeeDTO {
    
    
    private int id;
   
    private String username;
    
    private String password;

    public EmployeeDTO(int id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    public EmployeeDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "EmployeeDTO [id=" + id + ", username=" + username + ", password=" + password + "]";
    }

    
}
