package com.example.backend.service.interfaces;

import com.example.backend.dto.CrewMemberDTO;
import com.example.backend.model.CrewMember;

import java.util.List;

public interface CrewMemberService {

    List<CrewMemberDTO> getMovieDirectors(Integer movieId);

    List<CrewMemberDTO> getMovieWritters(Integer movieId);

    List<CrewMemberDTO> getAllDirectors();

    List<CrewMemberDTO> getAllWritters();

    CrewMember saveCrewMember(CrewMemberDTO crewDTO);
}
