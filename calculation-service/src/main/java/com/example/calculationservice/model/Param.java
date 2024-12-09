package com.example.calculationservice.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Param {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    UUID id;

    Date createTime;

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
