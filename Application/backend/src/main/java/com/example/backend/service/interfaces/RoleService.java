package com.example.backend.service.interfaces;

import com.example.backend.model.Role;
import java.util.List;

public interface RoleService {

    Role findById(Integer id);
    List<Role> findByName(String name);
    Role findOneByName(String name);
}
