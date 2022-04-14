package com.example.backend.service;

import com.example.backend.dto.RegisteredUserDTO;
import com.example.backend.model.RegisteredUser;
import com.example.backend.repository.RegisteredUserRepository;
import com.example.backend.service.interfaces.RegisteredUserService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegisteredUserServiceImpl implements RegisteredUserService {

    private final RegisteredUserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    public RegisteredUserDTO registerUser(RegisteredUserDTO userDTO) {
        RegisteredUser newUser = modelMapper.map(userDTO, RegisteredUser.class);
        userRepository.save(newUser);
        return userDTO;
    }
}
