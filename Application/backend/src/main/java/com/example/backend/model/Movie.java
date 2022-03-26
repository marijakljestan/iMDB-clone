package com.example.backend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.*;

@Getter
@NoArgsConstructor
public class Movie {

   private int id;
   private String name;
   private int year;
   private String countryOfOrigin;
   private int durationInMinutes;
   private List<Genre> genres;
   private String description;
   private int stroryline;
   private String coverImage;
   private List<String> images;
   private double averageGrade;

}