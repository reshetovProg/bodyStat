package com.example.authservice.service;

//import com.example.authservice.exception.EmailExistsException;
//import com.example.authservice.model.User;
//import com.example.authservice.repository.RoleRepository;
//import com.example.authservice.repository.UserRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.util.Arrays;
//
//@Service
//@RequiredArgsConstructor
//public class UserService {
//
//    private final UserRepository userRepository;
//    private final RoleRepository roleRepository;
//
//    public User userRegistration(User user){
//        if (userRepository.findUserByEmail(user.getEmail())== null){
//            throw new EmailExistsException("Пользователь с данным email уже зарегестрирован");
//        }
//
//        user.setRoles(Arrays.asList(roleRepository.findRoleByName("ROLE_USER")));
//        return userRepository.save(user);
//    }
//
//}
