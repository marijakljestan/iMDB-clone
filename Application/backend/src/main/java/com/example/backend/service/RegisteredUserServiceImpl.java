package com.example.backend.service;

import com.example.backend.dto.RegisteredUserDTO;
import com.example.backend.model.RegisteredUser;
import com.example.backend.model.Role;
import com.example.backend.repository.RegisteredUserRepository;
import com.example.backend.service.interfaces.RegisteredUserService;
import com.example.backend.service.interfaces.RoleService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegisteredUserServiceImpl implements RegisteredUserService {

    private final RegisteredUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final ModelMapper modelMapper;
    private final RoleService roleService;

    @Override
    public RegisteredUserDTO registerUser(RegisteredUserDTO userDTO) {
        RegisteredUser newUser = modelMapper.map(userDTO, RegisteredUser.class);
        Role role = roleService.findOneByName("ROLE_USER");
        newUser.setRole(role);
        newUser.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        newUser.setEnabled(true);
        userRepository.save(newUser);
        return userDTO;
    }

    @Override
    public RegisteredUserDTO findLoggedUserByUsername(String username) {
        RegisteredUser user = this.userRepository.fetchUserWithWatchlist(username);
        RegisteredUserDTO userDTO = modelMapper.map(user, RegisteredUserDTO.class);
        return userDTO;
    }
}
