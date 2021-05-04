package com.server.side.ii.api.repository;

import com.server.side.ii.api.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface BoardRepository extends JpaRepository<Board,Integer> {
    public boolean existsByNickname(String nickname);
    @Transactional
    public void deleteAllByNickname(String nickname);
}
