package com.server.side.ii.api;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.server.side.ii.api.model.Board;
import com.server.side.ii.api.repository.BoardRepository;
import com.server.side.ii.authentification.model.User;
import com.server.side.ii.authentification.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/main")
public class ManagementApi {

    @Autowired
    UserRepo userRepo;

    @GetMapping("/nickname/{username}")
    public String getNickname(@PathVariable String username){
        User user = userRepo.findByUsername(username).orElseThrow
                (()->new UsernameNotFoundException(username));
        return user.getNickname();
    }

    @Autowired
    BoardRepository boardRepository;

    @GetMapping("/leaderboard")
    public List<Board> getLeaderboard()
    {
        return boardRepository.findAll()
                .stream()
                .sorted((x,y)->{
                    if(x.getScore()>y.getScore())
                        return -1;
                    else
                        return 1;
                        }
                ).collect(Collectors.toList());
    }

    @PostMapping("/leaderboard/{nickname}/{points}")
    public void addToLeaderboard(@PathVariable String nickname,@PathVariable int points)
    {
        if(userRepo.existsByNickname(nickname)) {
            if (!boardRepository.existsByNickname(nickname))
                boardRepository.save(new Board(nickname, points));
            else
            {
                boardRepository.deleteAllByNickname(nickname);
                boardRepository.save(new Board(nickname, points));
            }
        }
    }
}
