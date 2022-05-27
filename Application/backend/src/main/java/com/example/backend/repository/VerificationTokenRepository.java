package com.example.backend.repository;

import com.example.backend.model.VerificationToken;
import org.springframework.data.repository.CrudRepository;

public interface VerificationTokenRepository extends CrudRepository<VerificationToken, String> {

    VerificationToken findByToken(String token);
}
