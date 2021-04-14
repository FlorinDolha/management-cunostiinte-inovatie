package com.server.side.ii.authentification.security.services;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.server.side.ii.authentification.model.User;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class UserPrinciple implements UserDetails {
    private static final long serialVersionUID = 1L;


    private String username;

    @JsonIgnore
    private String password;

    private Collection authorities;

    public UserPrinciple( String username, String password,
                         Collection authorities) {
        this.username = username;
        this.password = password;
        this.authorities = authorities;
    }

   public static UserPrinciple build(User user) {
        List authorities = new ArrayList();
        authorities.add(new SimpleGrantedAuthority("user"));

        return new UserPrinciple(
                user.getUsername(),
                user.getPassword(),
                authorities
        );
    }





    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public Collection getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}

