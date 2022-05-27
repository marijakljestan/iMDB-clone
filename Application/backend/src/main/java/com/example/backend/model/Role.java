package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Role  implements GrantedAuthority {

    @Id
    @Column(name="id")
    @SequenceGenerator(name = "roleSeqGen", sequenceName = "roleSeqGen", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "roleSeqGen")
    Integer id;
    @Column(name="name")
    String name;

    @JsonIgnore
    @Override
    @Column(unique = false, nullable = false)
    public String getAuthority() { return name; }
}
