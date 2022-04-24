package com.example.backend.service.interfaces;

import com.example.backend.dto.ReviewDTO;

import java.util.*;

public interface ReviewService {

    List<ReviewDTO> getMoviesReview(Integer movieId);

    List<ReviewDTO> addReview(ReviewDTO reviewDTO);
}
