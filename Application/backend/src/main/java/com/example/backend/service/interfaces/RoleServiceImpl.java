package com.example.backend.service.interfaces;

import com.example.backend.model.Role;
import com.example.backend.repository.RoleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class RoleServiceImpl implements RoleService{

    private final RoleRepository roleRepository;

    @Override
    public Role findById(Integer id) { return this.roleRepository.findById(id).get(); }

    @Override
    public List<Role> findByName(String name) { return this.roleRepository.findByName(name); }

    @Override
    public Role findOneByName(String name) { return this.roleRepository.findOneByName(name); }
}
