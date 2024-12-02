package com.example.calculationservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
public class Param {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    UUID id;

    @CreatedDate
    LocalDateTime createTime;

    private String neck;
    private String wrist;
    private String forearm;
    private String biceps;
    private String belly;
    private String hip;
    private String ankle;
    private String shin;
    private String shoulder;
    private String breast;
    private String pelvis;
}
