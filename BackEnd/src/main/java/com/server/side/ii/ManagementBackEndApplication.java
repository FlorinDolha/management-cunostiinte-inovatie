package com.server.side.ii;

import com.github.javafaker.Faker;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class ManagementBackEndApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(ManagementBackEndApplication.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder  builder) {
        return builder.sources(ManagementBackEndApplication.class);
    }

}
