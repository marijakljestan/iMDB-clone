package com.example.backend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.*;

@Getter
@NoArgsConstructor
public class RegisteredUser {
   private Integer id;
   private String firstName;
   private String lastName;
   private String email;
   private String password;
   private UserStatus status;
   private List<Movie> watchlist;
   private Boolean deleted;

}