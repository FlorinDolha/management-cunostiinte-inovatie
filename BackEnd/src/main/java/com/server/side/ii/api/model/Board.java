package com.server.side.ii.api.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Board {
    public Board (String nickname,int score)
    {
        this.nickname=nickname;
        this.score=score;
    }
    @Id
    @GeneratedValue
    private int Id;
    private String nickname;
    private int score;
}
