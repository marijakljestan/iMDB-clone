package com.example.backend.model;

import lombok.*;
import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Actor {
   @Id
   @SequenceGenerator(name = "actorSeqGen", sequenceName = "actorSeqGen", initialValue = 1, allocationSize = 1)
   @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "actorSeqGen")
   @Column(name="actor_id", unique=true, nullable=false)
   private int id;
   @Column(name = "name", nullable = false)
   private String name;
   @Column(name = "image")
   private String image;
}