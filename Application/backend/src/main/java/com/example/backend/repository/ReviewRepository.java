package com.example.backend.repository;

import com.example.backend.dto.ReviewDTO;
import com.example.backend.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.*;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

    @Query(value = "select new com.example.backend.dto.ReviewDTO(r.id, r.content, r.mark, r.movie.id, r.registeredUser.id) " +
                   "from Review r where r.movie.id=?1")
    List<ReviewDTO> getReviewsByMovieId(Integer movieId);
}
