package com.example.backend.service;

import com.example.backend.dto.ReviewDTO;
import com.example.backend.repository.ReviewRepository;
import com.example.backend.service.interfaces.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;

    @Override
    public List<ReviewDTO> getMoviesReview(Integer movieId) {
        return reviewRepository.getReviewsByMovieId(movieId);
    }
}
