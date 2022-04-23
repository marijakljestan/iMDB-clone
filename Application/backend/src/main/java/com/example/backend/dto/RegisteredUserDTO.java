package com.example.backend.dto;

import com.example.backend.model.Movie;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegisteredUserDTO {

    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private List<Movie> watchlist;
}
