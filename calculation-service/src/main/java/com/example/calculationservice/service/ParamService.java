package com.example.calculationservice.service;

import com.example.calculationservice.model.Param;

import java.util.List;
import java.util.UUID;

public interface ParamService {
    Param createParam(Param param);
    Param getParam(UUID id);
    void deleteParam(UUID id);
    List<Param> allParams();
}
