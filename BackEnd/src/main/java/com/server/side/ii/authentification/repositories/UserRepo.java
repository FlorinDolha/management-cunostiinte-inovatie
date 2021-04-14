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
    /*private static UserRepo Instance = null;
    private JdbcUtils jdbcUtils;

    private UserRepo() {
        Properties properties = new Properties();
        try {
            properties.load(BackendApplication.class.getResourceAsStream("/application.properties"));
            this.jdbcUtils = new JdbcUtils(properties);}
        catch (IOException e)
        {
            e.printStackTrace();
        }

    }
    public static UserRepo getInstance() {
        if(Instance == null){
            Instance = new UserRepo();
        }
        return Instance;
    }

    public User save(User entity) {
        Connection connection = jdbcUtils.getConnection();

        final String statement = "insert into users values (?, ?, ?)";
        System.out.println(entity);
        try(PreparedStatement preparedStatement = connection.prepareStatement(statement, Statement.RETURN_GENERATED_KEYS)){
            preparedStatement.setString(1, entity.getUsername());
            preparedStatement.setString(2,entity.getPassword());
            preparedStatement.setString(3,entity.getEmail());


            preparedStatement.executeUpdate();
            ResultSet rs = preparedStatement.getGeneratedKeys();
            if(rs.next())
            {
                return entity;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    public User findByUsername(String username) {
        Connection connection = this.jdbcUtils.getConnection();

        final String statement = "SELECT * FROM users WHERE username = ?";

        try (PreparedStatement preparedStatement = connection.prepareStatement(statement)) {
            preparedStatement.setString(1, username);

            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    return new User(username,
                            resultSet.getString("password"),
                            resultSet.getString("email")
                    );
                }
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        return null;
    }

    public boolean existsByUsername(String username) {
        Connection connection = this.jdbcUtils.getConnection();

        final String statement = "SELECT * FROM users WHERE username = ?";

        try (PreparedStatement preparedStatement = connection.prepareStatement(statement)) {
            preparedStatement.setString(1, username);

            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    return true;
                }
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        return false;
    }

    public boolean existsByEmail(String email) {
        Connection connection = this.jdbcUtils.getConnection();

        final String statement = "SELECT * FROM users WHERE email = ?";

        try (PreparedStatement preparedStatement = connection.prepareStatement(statement)) {
            preparedStatement.setString(1, email);

            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    return true;
                }
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        return false;
    }*/
}