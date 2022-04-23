package com.example.backend.repository;

import com.example.backend.model.RegisteredUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RegisteredUserRepository extends JpaRepository<RegisteredUser, Integer> {
    RegisteredUser findByEmail(String email);

    @Query(value="SELECT u FROM RegisteredUser u LEFT JOIN FETCH u.watchlist pl WHERE u.email = :username")
    RegisteredUser fetchUserWithWatchlist(String username);

    @Query(value="SELECT u FROM RegisteredUser u LEFT JOIN FETCH u.watchlist pl WHERE u.id = :id")
    RegisteredUser fetchUserWithWatchlist(Integer id);

}
