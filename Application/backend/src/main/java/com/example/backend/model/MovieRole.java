package com.example.backend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MovieRole {

   private int id;
   private String roleName;
   public Actor actor;
   public Movie movie;

}