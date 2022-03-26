package com.example.backend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @NoArgsConstructor
public class Actor {

   private int id;
   private String firstName;
   private String lastName;
   private String image;
}