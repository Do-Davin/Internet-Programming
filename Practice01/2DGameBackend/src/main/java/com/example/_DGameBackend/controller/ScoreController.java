package com.example._DGameBackend.controller;

import com.example._DGameBackend.entity.Score;
import com.example._DGameBackend.service.ScoreService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/scores")
@CrossOrigin(origins = "*") // allow JS frontend to call API
public class ScoreController {

    private final ScoreService scoreService;

    public ScoreController(ScoreService scoreService) {
        this.scoreService = scoreService;
    }

    @PostMapping
    public Score addScore(@RequestBody Score score) {
        return scoreService.saveScore(score);
    }

    @GetMapping
    public List<Score> getScores() {
        return scoreService.getAllScores();
    }
}

