package com.example.backend.controller;

import com.example.backend.dto.RegisteredUserDTO;
import com.example.backend.service.interfaces.RegisteredUserService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/user", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class RegisteredUserController {

    private final RegisteredUserService userService;

    @PostMapping("/")
    public RegisteredUserDTO registerUser(@RequestBody RegisteredUserDTO userDTO){
        return userService.registerUser(userDTO);
    }
}
