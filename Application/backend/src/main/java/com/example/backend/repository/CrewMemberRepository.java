package com.example.backend.repository;

import com.example.backend.model.CrewMember;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CrewMemberRepository extends JpaRepository<CrewMember, Integer> {
}
