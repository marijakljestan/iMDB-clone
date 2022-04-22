package com.example.backend.model;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegisteredUser implements UserDetails {
   @Id
   @SequenceGenerator(name = "userSeqGen", sequenceName = "userSeqGen", initialValue = 1, allocationSize = 1)
   @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userSeqGen")
   @Column(name = "user_id", unique = true, nullable = false)
   private Integer id;
   @Column(nullable = false)
   private String firstName;
   @Column(nullable = false)
   private String lastName;
   @Column(unique = true, nullable = false)
   private String email;
   @Column(nullable = false)
   private String password;
   @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
   @JoinTable(name = "watchlist", joinColumns = @JoinColumn(name = "user_id",  referencedColumnName = "user_id"),
                           inverseJoinColumns = @JoinColumn(name = "movie_id", referencedColumnName = "movie_id"))
   private Set<Movie> watchlist;
   @Column(nullable = false)
   private Boolean blocked = false;
   @Column(nullable = false)
   private Boolean deleted = false;
   @Column(name = "enabled")
   private boolean enabled;
   @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
   @JoinColumn(name = "role_id")
   private Role role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<Role> roles = new ArrayList<Role>();
        roles.add(this.role);
        return roles;
    }

    @Override
    public String getUsername() { return email; }

    @Override
    public boolean isAccountNonExpired() { return true; }

    @Override
    public boolean isAccountNonLocked() { return true; }

    @Override
    public boolean isCredentialsNonExpired() { return true; }

    @Override
    public boolean isEnabled() { return this.enabled; }
}