package com.example.backend.controller;

import com.example.backend.dto.ChangePasswordDTO;
import com.example.backend.dto.JwtAuthenticationRequestDTO;
import com.example.backend.dto.UserTokenState;
import com.example.backend.exception.UsernameNotFoundException;
import com.example.backend.model.RegisteredUser;
import com.example.backend.service.interfaces.RegisteredUserService;
import com.example.backend.util.TokenUtils;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class AuthenticationController {

    private final TokenUtils tokenUtils;
    private final AuthenticationManager authenticationManager;
    private final RegisteredUserService registeredUserService;

    @PostMapping("/login")
    public ResponseEntity<UserTokenState> createAuthenticationToken(@RequestBody JwtAuthenticationRequestDTO authenticationRequest)  {

        Authentication authentication = null;
        try {
            authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getEmail(), authenticationRequest.getPassword()));
        }
        catch (Exception ex){
            throw new UsernameNotFoundException();
        }

        SecurityContextHolder.getContext().setAuthentication(authentication);

        RegisteredUser user = (RegisteredUser) authentication.getPrincipal();
        String jwt = tokenUtils.generateToken(user.getUsername());
        int expiresIn = tokenUtils.getExpiredIn();

        return ResponseEntity.ok(new UserTokenState(jwt, expiresIn, user.getRole().getName()));
    }

    @PutMapping("/change-password")
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    public ResponseEntity<UserTokenState> changePassword(@RequestBody ChangePasswordDTO changePasswordDTO) throws InterruptedException {
        registeredUserService.changePassword(changePasswordDTO);
        SecurityContextHolder.clearContext();
        Thread.sleep(1000);
        Authentication authentication = null;
        try {
            authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    changePasswordDTO.getEmail(), changePasswordDTO.getNewPassword()));
        }
        catch (Exception ex){
            throw new UsernameNotFoundException();
        }

        SecurityContextHolder.getContext().setAuthentication(authentication);
        RegisteredUser user = (RegisteredUser) authentication.getPrincipal();
        String jwt = tokenUtils.generateToken(user.getUsername());
        int expiresIn = tokenUtils.getExpiredIn();
        return ResponseEntity.ok(new UserTokenState(jwt, expiresIn, user.getRole().getName()));
    }

    private UserTokenState createJwtToken(JwtAuthenticationRequestDTO authenticationRequest){
        Authentication authentication = null;
        try {
            authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getEmail(), authenticationRequest.getPassword()));
        }
        catch (Exception ex){
            throw new UsernameNotFoundException();
        }

        SecurityContextHolder.getContext().setAuthentication(authentication);

        RegisteredUser user = (RegisteredUser) authentication.getPrincipal();
        String jwt = tokenUtils.generateToken(user.getUsername());
        int expiresIn = tokenUtils.getExpiredIn();

        return new UserTokenState(jwt, expiresIn, user.getRole().getName());
    }
}
