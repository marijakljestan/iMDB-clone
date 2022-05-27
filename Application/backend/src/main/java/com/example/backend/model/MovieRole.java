package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MovieRole {
   @Id
   @SequenceGenerator(name = "movieRoleSeqGen", sequenceName = "movieRoleSeqGen", initialValue = 1, allocationSize = 1)
   @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "movieRoleSeqGen")
   @Column(name = "role_id", unique = true, nullable = false)
   private int id;
   @Column(nullable = false)
   private String roleName;
   @OneToOne(fetch = FetchType.EAGER)
   @JoinColumn(name = "actor_id")
   public Actor actor;
   @ManyToOne(fetch = FetchType.LAZY, optional = false)
   @JoinColumn(name = "movie_id")
   @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
   public Movie movie;
}