package com.example.backend.model;

import lombok.*;
import javax.persistence.*;
import java.util.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegisteredUser {
   @Id
   @SequenceGenerator(name = "userSeqGen", sequenceName = "userSeqGen")
   @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userSeqGen")
   @Column(name = "user_id", unique = true, nullable = false)
   private Integer id;
   @Column(nullable = false)
   private String firstName;
   @Column(nullable = false)
   private String lastName;
   @Column(unique = true, nullable = false)
   private String email;
   @Column(nullable = false)
   private String password;
   @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
   @JoinTable(name = "watchlist", joinColumns = @JoinColumn(name = "user_id",  referencedColumnName = "user_id"),
                           inverseJoinColumns = @JoinColumn(name = "movie_id", referencedColumnName = "movie_id"))
   private Set<Movie> watchlist;
   @Column(nullable = false)
   private Boolean blocked = false;
   @Column(nullable = false)
   private Boolean deleted = false;
}