package com.example.backend.service;

import com.example.backend.dto.CrewMemberDTO;
import com.example.backend.mapper.CollectionMapper;
import com.example.backend.model.CrewMember;
import com.example.backend.repository.CrewMemberRepository;
import com.example.backend.service.interfaces.CrewMemberService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CrewMemberServiceImpl implements CrewMemberService {

    private final CrewMemberRepository movieCrewRepository;
    private final ModelMapper modelMapper;

    @Override
    public List<CrewMemberDTO> getMovieDirectors(Integer movieId) {
        List<CrewMember> crew = movieCrewRepository.getMovieDirectors(movieId);
        return CollectionMapper.mapList(crew, CrewMemberDTO.class);
    }

    @Override
    public List<CrewMemberDTO> getMovieWritters(Integer movieId) {
        List<CrewMember> crew = movieCrewRepository.getMovieWritters(movieId);
        return CollectionMapper.mapList(crew, CrewMemberDTO.class);
    }

    @Override
    public List<CrewMemberDTO> getAllDirectors() {
        List<CrewMember> crew = movieCrewRepository.getAllDirectors();
        return CollectionMapper.mapList(crew, CrewMemberDTO.class);
    }

    @Override
    public List<CrewMemberDTO> getAllWritters() {
        List<CrewMember> crew = movieCrewRepository.getAllWritters();
        return CollectionMapper.mapList(crew, CrewMemberDTO.class);
    }

    @Override
    public CrewMember saveCrewMember(CrewMemberDTO crewDTO) {
        CrewMember newCrewMember = modelMapper.map(crewDTO, CrewMember.class);
        for(CrewMember member: this.movieCrewRepository.findAll())
            if(member.getName().equals(crewDTO.getName()))
                return member;

        return this.movieCrewRepository.save(newCrewMember);
    }
}
