package com.example.calculationservice.controller;

import com.example.calculationservice.model.Param;
import com.example.calculationservice.service.ParamService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/params")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000/")
public class ParamsController {

    private final ParamService paramService;

    @PostMapping
    Param createParam(@RequestBody Param param) {
        return paramService.createParam(param);
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
