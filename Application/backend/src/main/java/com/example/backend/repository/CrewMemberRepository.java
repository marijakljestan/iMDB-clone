package com.example.backend.repository;

import com.example.backend.model.CrewMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CrewMemberRepository extends JpaRepository<CrewMember, Integer> {

    @Query(value = "select c from CrewMember c where c.id in" +
                   "(select m.crewMember.id from MovieCrew  m where m.movie.id = ?1 and m.crewMemberRole = 1)")
    List<CrewMember> getMovieDirectors(Integer movieId);

    @Query(value = "select c from CrewMember c where c.id in" +
                   "(select m.crewMember.id from MovieCrew  m where m.movie.id = ?1 and m.crewMemberRole = 0)")
    List<CrewMember> getMovieWritters(Integer movieId);

    @Query(value = "select c from CrewMember c where c.id in" +
            "(select m.crewMember.id from MovieCrew  m where m.crewMemberRole = 1)")
    List<CrewMember> getAllDirectors();

    @Query(value = "select c from CrewMember c where c.id in" +
            "(select m.crewMember.id from MovieCrew  m where m.crewMemberRole = 0)")
    List<CrewMember> getAllWritters();
}
