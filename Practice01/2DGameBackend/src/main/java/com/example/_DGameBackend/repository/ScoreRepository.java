package com.example._DGameBackend.repository;

import com.example._DGameBackend.entity.Score;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, Long> {}
