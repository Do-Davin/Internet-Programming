package com.example._DGameBackend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Score {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String playerName;
    private int score;
    private LocalDateTime createdAt = LocalDateTime.now();

    // Constructors
    public Score() {}
    public Score(String playerName, int score) {
        this.playerName = playerName;
        this.score = score;
    }

    // Getters & Setters
    public Long getId() { return id; }
    public String getPlayerName() { return playerName; }
    public void setPlayerName(String playerName) { this.playerName = playerName; }
    public int getScore() { return score; }
    public void setScore(int value) { this.score = value; }
    public LocalDateTime getCreatedAt() { return createdAt; }
}
