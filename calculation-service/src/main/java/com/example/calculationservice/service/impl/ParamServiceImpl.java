package com.example.calculationservice.service.impl;

import com.example.calculationservice.model.Param;
import com.example.calculationservice.repository.ParamRepository;
import com.example.calculationservice.service.ParamService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ParamServiceImpl implements ParamService {

    private final ParamRepository paramRepository;
    @Override
    public Param createParam(Param param) {
        return paramRepository.save(param);
    }

    @Override
    public Param getParam(UUID id) {
        return paramRepository.findById(id)
                .orElseThrow(()->new RuntimeException("params not found"));
    }

    @Override
    public void deleteParam(UUID id) {
        paramRepository.deleteById(id);
    }

    @Override
    public List<Param> allParams() {
        return paramRepository.findAll();
    }
}
