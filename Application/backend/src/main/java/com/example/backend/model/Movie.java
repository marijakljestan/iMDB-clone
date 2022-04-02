package com.example.backend.model;

import lombok.*;
import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "movie")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class Movie {
   @Id
   @SequenceGenerator(name = "movieSeqGen", sequenceName = "movieSeqGen")
   @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "movieSeqGen")
   @Column(name = "movie_id", unique = true, nullable = false)
   private int id;
   @Column(nullable = false)
   private String name;
   @Column(nullable = false)
   private int year;
   @Column(nullable = false)
   private String countryOfOrigin;
   @Column(nullable = false)
   private int durationInMinutes;
   @ElementCollection(fetch = FetchType.EAGER)
   @CollectionTable(name = "movie_genres", joinColumns = @JoinColumn(name = "movie_id"))
   @Column(name = "genre", nullable = false)
   private Set<Genre> genres;
   @Column(nullable = false)
   private String description;
   @Column(nullable = false)
   private String storyline;
   @Column(nullable = false)
   private String coverImage;
   @ElementCollection(fetch = FetchType.LAZY)
   @CollectionTable(name = "movie_images", joinColumns = @JoinColumn(name = "movie_id"))
   @Column(name = "image", nullable = false)
   private Set<String> images;
   @Column
   private double averageGrade = 10.0;
   @ManyToMany(mappedBy = "movies")
   private Set<CrewMember> crew;
}