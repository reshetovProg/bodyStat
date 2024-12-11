package com.example.authservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/pages")
public class DemoController {

    @GetMapping("/public")
    public String publicPage(){
        return "public page";
    }

    @GetMapping("/user")
    public String privateUser(){
        return "privateUser";
    }

    @GetMapping("/admin")
    public String privateAdmin(){
        return "privateAdmin";
    }
}
