package com.example.backend.controller;

import com.example.backend.dto.RegisteredUserDTO;
import com.example.backend.service.interfaces.RegisteredUserService;
import com.example.backend.util.TokenUtils;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;


@RestController
@RequestMapping(value = "/user", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class RegisteredUserController {

    private final RegisteredUserService userService;
    private final TokenUtils tokenUtils;

    @PostMapping("/")
    public RegisteredUserDTO registerUser(@RequestBody RegisteredUserDTO userDTO){
        return userService.registerUser(userDTO);
    }

    @GetMapping("/whoami")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<RegisteredUserDTO> user(Principal principal) {
        RegisteredUserDTO user = userService.findLoggedUserByUsername(principal.getName());
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}