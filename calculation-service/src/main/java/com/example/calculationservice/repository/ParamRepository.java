package com.example.calculationservice.repository;

import com.example.calculationservice.model.Param;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ParamRepository extends JpaRepository<Param, UUID> {
}
