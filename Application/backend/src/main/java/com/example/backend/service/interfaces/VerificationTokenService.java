package com.example.backend.service.interfaces;

import com.example.backend.model.VerificationToken;

public interface VerificationTokenService {

    void createVerificationToken(String token);
    VerificationToken findByToken(String name);
    void save(VerificationToken verificationToken);
}
