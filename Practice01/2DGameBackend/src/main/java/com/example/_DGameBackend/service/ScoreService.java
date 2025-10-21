package com.example._DGameBackend.service;

import com.example._DGameBackend.entity.Score;
import com.example._DGameBackend.repository.ScoreRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScoreService {
    private final ScoreRepository repo;

    public ScoreService(ScoreRepository repo) {
        this.repo = repo;
    }

    public Score saveScore(Score score) {
        return repo.save(score);
    }

    public List<Score> getAllScores() {
        return repo.findAll();
    }
}

