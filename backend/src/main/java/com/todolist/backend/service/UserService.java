package com.todolist.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.todolist.backend.model.User;
import com.todolist.backend.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository repo;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository repo, PasswordEncoder passwordEncoder) {
        this.repo = repo;
        this.passwordEncoder = passwordEncoder;
    }

    public List<User> getAll() {
        return repo.findAll();
    }

    public User getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public User save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));  // encode with injected encoder
        return repo.save(user);
    }

    public User update(Long id, User updatedUser) {
        Optional<User> existing = repo.findById(id);
        if (existing.isPresent()) {
            User user = existing.get();
            user.setName(updatedUser.getName());
            user.setEmail(updatedUser.getEmail());
            // Encode password only if it changed (optional, else it might re-encode hash)
            if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
                user.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
            }
            return repo.save(user);
        }
        return null;
    }

    public boolean delete(Long id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    public User login(String email, String password) {
        Optional<User> optionalUser = repo.findByEmail(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (passwordEncoder.matches(password, user.getPassword())) {
                return user; // Login successful
            }
        }
        return null; // Login failed
    }
}

