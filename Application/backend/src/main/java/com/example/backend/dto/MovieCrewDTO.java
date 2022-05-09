package com.example.backend.dto;

import com.example.backend.model.CrewRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MovieCrewDTO {
    private int id;
    private String name;
    private CrewRole role;
}
