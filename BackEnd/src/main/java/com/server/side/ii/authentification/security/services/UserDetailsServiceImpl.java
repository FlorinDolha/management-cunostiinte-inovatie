package com.server.side.ii.authentification.security.services;


import com.fasterxml.jackson.annotation.OptBoolean;
import com.server.side.ii.authentification.model.User;
import com.server.side.ii.authentification.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UserRepo userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userRepository.findByUsername(username).orElseThrow
                (()->new UsernameNotFoundException(username));
        var to_return=UserPrinciple.build(user);
        return to_return;
    }
}
