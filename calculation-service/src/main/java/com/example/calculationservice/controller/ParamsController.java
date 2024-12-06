package com.example.calculationservice.controller;

import com.example.calculationservice.dto.ParamDto;
import com.example.calculationservice.model.Param;
import com.example.calculationservice.service.ParamService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/params")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000/")
public class ParamsController {

    private final ObjectMapper objectMapper;

    private final ParamService paramService;

    @PostMapping
    Param createParam(@RequestBody ParamDto paramDto) {
        Param param = Param.builder()
                .hip(paramDto.getHip())
                .ankle(paramDto.getAnkle())
                .belly(paramDto.getBelly())
                .biceps(paramDto.getBiceps())
                .breast(paramDto.getBreast())
                .shin(paramDto.getShin())
                .neck(paramDto.getNeck())
                .wrist(paramDto.getWrist())
                .pelvis(paramDto.getPelvis())
                .forearm(paramDto.getForearm())
                .shoulder(paramDto.getShoulder())
                .createTime(new Date())
                .build();
        Param response = paramService.createParam(param);
        return response;
    }

    @GetMapping("{id}")
    Param getParam(@PathVariable UUID id) {
        return paramService.getParam(id);
    }

    @DeleteMapping("{id}")
    void deleteParam(@PathVariable UUID id) {
        paramService.deleteParam(id);
    }

    @GetMapping
    List<Param> allParams() {
        return paramService.allParams();
    }
}
