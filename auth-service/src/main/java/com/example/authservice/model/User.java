package com.example.authservice.model;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.Collection;

//@Entity
//@Getter
//public class User {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String firstName;
//    private String lastName;
//    private String email;
//    private String password;
//    private boolean enable;
//    private boolean tokenExpired;
//
//    public void setRoles(Collection<Role> roles) {
//        this.roles = roles;
//    }
//
//    @ManyToMany
//    @JoinTable(name = "users_roles",
//            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
//            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
//    private Collection<Role> roles;
//}
