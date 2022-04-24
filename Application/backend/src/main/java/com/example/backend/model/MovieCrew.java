package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "movie_crew")
@IdClass(MoviewCrewId.class)
public class MovieCrew {

    @Id
    @ManyToOne
    @JoinColumn(name = "crew_member_id", referencedColumnName = "crew_member_id")
    private CrewMember crewMember;

    @Id
    @ManyToOne
    @JoinColumn(name = "movie_id", referencedColumnName = "movie_id")
    private Movie movie;

    @Column(name = "member_role")
    private CrewRole crewMemberRole;
}

