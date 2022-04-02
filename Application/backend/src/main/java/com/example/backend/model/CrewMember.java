package com.example.backend.model;

import lombok.*;
import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "crew_member")
@Getter @NoArgsConstructor @AllArgsConstructor @Builder
public class CrewMember {
   @Id
   @SequenceGenerator(name = "crewMemberSeqGen", sequenceName = "crewMemberSeqGen", initialValue = 1, allocationSize = 1)
   @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "crewMemberSeqGen")
   @Column(name = "crew_member_id", unique = true, nullable = false)
   private int id;
   @Column(name = "first_name", nullable = false)
   private String firstName;
   @Column(name = "last_name", nullable = false)
   private String lastName;
   @ManyToMany
   @JoinTable(name="movie_crew", joinColumns = @JoinColumn(name="crew_member_id", referencedColumnName = "crew_member_id"),
   inverseJoinColumns = @JoinColumn(name = "movie_id", referencedColumnName = "movie_id"))
   private Set<Movie> movies;
}