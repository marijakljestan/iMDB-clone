package com.example.backend.service;

import com.example.backend.repository.MovieRepository;
import com.example.backend.service.interfaces.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MovieServiceImpl implements MovieService {

    private final MovieRepository movieRepository;
}
