package com.example.backend.repository;

import com.example.backend.model.RegisteredUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<RegisteredUser, Integer> {
}
