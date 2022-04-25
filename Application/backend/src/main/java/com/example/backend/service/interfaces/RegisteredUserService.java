package com.example.backend.service.interfaces;

import com.example.backend.dto.EditUserDTO;
import com.example.backend.dto.RegisteredUserDTO;

public interface RegisteredUserService {

    RegisteredUserDTO registerUser(RegisteredUserDTO userDTO);

    RegisteredUserDTO fetchUserWithWatchlist(String username);

    RegisteredUserDTO saveUser(RegisteredUserDTO userDTO);

    RegisteredUserDTO editUser(EditUserDTO userDTO);
}
