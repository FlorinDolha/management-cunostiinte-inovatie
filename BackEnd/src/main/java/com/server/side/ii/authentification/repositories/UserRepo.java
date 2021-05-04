package com.server.side.ii.authentification.repositories;


/*import com.fluffy.backend.BackendApplication;*/
import com.server.side.ii.authentification.model.User;


import org.springframework.data.jpa.repository.JpaRepository;

import java.io.IOException;
import java.sql.*;
import java.util.Optional;
import java.util.Properties;

public interface UserRepo extends JpaRepository<User,String> {
    Optional<User> findByUsername(String s);
    Boolean existsByUsername(String email);
    Boolean existsByNickname(String nickname);
}