package com.example.backend.model;

import lombok.*;
import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "crew_member")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CrewMember {
   @Id
   @SequenceGenerator(name = "crewMemberSeqGen", sequenceName = "crewMemberSeqGen", initialValue = 1, allocationSize = 1)
   @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "crewMemberSeqGen")
   @Column(name = "crew_member_id", unique = true, nullable = false)
   private int id;
   @Column(name = "name", nullable = false)
   private String name;
}