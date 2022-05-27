package com.example.backend.service;

import com.example.backend.model.MovieRole;
import com.example.backend.repository.MovieRoleRepository;
import com.example.backend.service.interfaces.MovieRoleService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MovieRoleServiceImpl implements MovieRoleService {

    private final MovieRoleRepository movieRoleRepository;

    @Override
    public MovieRole saveRole(MovieRole role) {
        return this.movieRoleRepository.save(role);
    }
}
