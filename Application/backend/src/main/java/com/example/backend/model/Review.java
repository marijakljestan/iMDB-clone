package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Review {
   @Id
   @SequenceGenerator(name = "reviewSeqGen", sequenceName = "reviewSeqGen")
   @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reviewSeqGen")
   @Column(name = "review_id", unique = true, nullable = false)
   private int id;
   @Column(nullable = false)
   private int mark;
   @Column(nullable = false)
   private String content;
   @Column
   private Boolean isReviewed;
   @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
   @JoinColumn(name = "movie_id")
   @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
   private Movie movie;
   @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
   @JoinColumn(name = "user_id")
   @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
   private RegisteredUser registeredUser;
}