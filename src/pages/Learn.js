import React, { useState, useEffect } from 'react';
import { LearnContainer } from '../components';
import words from '../data/words.json';

const Learn = () => {
  const [unlearntWords, setUnlearntWords] = useState([]);
  const [learntWords, setLearntWords] = useState([]);
  const [currentWords, setCurrentWords] = useState([]);

  useEffect(() => {
    const savedLearntWords = JSON.parse(localStorage.getItem('learntWords')) || [];
    setLearntWords(savedLearntWords);
    setUnlearntWords(words.filter(word => !savedLearntWords.includes(word.word)));
  }, []);

  const getNewWords = () => {
    const remainingWords = unlearntWords.filter(word => !currentWords.includes(word));
    const newWords = [];
    for (let i = 0; i < 10 && remainingWords.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * remainingWords.length);
      newWords.push(remainingWords.splice(randomIndex, 1)[0]);
    }
    setCurrentWords(newWords);
  };


  useEffect(() => {
    if (currentWords.length === 0) {
      getNewWords();
    }
  }, [currentWords]);

  const handleTick = (word) => {
    setLearntWords([...learntWords, word]);
    setUnlearntWords(unlearntWords.filter(w => w.word !== word));
    //remove from currentWords
    setCurrentWords(currentWords.filter(w => w.word !== word));
    localStorage.setItem('learntWords', JSON.stringify([...learntWords, word]));
  };

  return (
    <LearnContainer>
      <h1>Learn New Words</h1>
      <LearnContainer.WordList>
        {currentWords.map(({ word, definition }) => (
          <LearnContainer.WordCard key={word}>
            <LearnContainer.WordText>{word}</LearnContainer.WordText>
            <LearnContainer.MeaningText>{definition}</LearnContainer.MeaningText>
            <LearnContainer.TickButton
              type="button" // Add this line to ensure it's not a submit button
              onClick={(event) => {
                event.preventDefault();
                handleTick(word);
              }}
            >
              ✓
            </LearnContainer.TickButton>
          </LearnContainer.WordCard>
        ))}
      </LearnContainer.WordList>
    </LearnContainer>
  );
};

export default Learn;
