package com.example.backend.service;

import com.example.backend.dto.ReviewDTO;
import com.example.backend.model.Movie;
import com.example.backend.model.RegisteredUser;
import com.example.backend.model.Review;
import com.example.backend.repository.ReviewRepository;
import com.example.backend.service.interfaces.MovieService;
import com.example.backend.service.interfaces.RegisteredUserService;
import com.example.backend.service.interfaces.ReviewService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final RegisteredUserService userService;
    private final MovieService movieService;
    private final ModelMapper modelMapper;

    @Override
    public List<ReviewDTO> getMoviesReview(Integer movieId) {
        return reviewRepository.getReviewsByMovieId(movieId);
    }

    @Override
    public List<ReviewDTO> addReview(ReviewDTO reviewDTO) {
        Review review = modelMapper.map(reviewDTO, Review.class);
        Movie movie = modelMapper.map(movieService.getMovieById(reviewDTO.getMovieId()), Movie.class);
        RegisteredUser user = modelMapper.map(userService.fetchUserWithWatchlist(reviewDTO.getUsername()), RegisteredUser.class);
        review.setRegisteredUser(user);
        review.setMovie(movie);
        reviewRepository.save(review);
        return getMoviesReview(reviewDTO.getMovieId());
    }
}
