package com.example.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "You already added this movie in watchlist!")
public class MovieIsAlreadyInWatchlistException extends RuntimeException{
}
