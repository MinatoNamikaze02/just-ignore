import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TestContainer } from '../components';
import words from '../data/words.json';

const Test = () => {
  const [learntWords, setLearntWords] = useState([]);
  const [currentWord, setCurrentWord] = useState(null);
  const [rememberedCount, setRememberedCount] = useState(0);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [testedWords, setTestedWords] = useState(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    const savedLearntWords = JSON.parse(localStorage.getItem('learntWords')) || [];
    const learntWordsData = words.filter(word => savedLearntWords.includes(word.word));
    setLearntWords(learntWordsData);
    if (learntWordsData.length > 0) {
      setCurrentWord(learntWordsData[Math.floor(Math.random() * learntWordsData.length)]);
    }
  }, []);

  const handleRemembered = () => {
    setRememberedCount(rememberedCount + 1);
    nextWord();
  };

  const handleDidNotRemember = () => {
    nextWord();
  };

  const nextWord = () => {
    setTestedWords(prevTestedWords => {
      const newTestedWords = new Set(prevTestedWords);
      newTestedWords.add(currentWord.word);
      return newTestedWords;
    });

    if (testedWords.size >= learntWords.length - 1) {
      setIsTestCompleted(true);
      const retentionRate = ((rememberedCount + 1) / learntWords.length) * 100;
      updateRetention(new Date().toISOString(), retentionRate);
      return;
    }

    let newWord;
    do {
      newWord = learntWords[Math.floor(Math.random() * learntWords.length)];
    } while (testedWords.has(newWord.word));

    setCurrentWord(newWord);
  };

  const updateRetention = (date, percentage) => {
    const savedRetention = JSON.parse(localStorage.getItem('retention')) || [];
    const newRetention = [...savedRetention, { date, percentage }];
    localStorage.setItem('retention', JSON.stringify(newRetention));
  };

  if (isTestCompleted) {
    return (
      <TestContainer.ResultContainer>
        <h1>Test Completed</h1>
        <TestContainer.ResultText>Your retention rate is: {(rememberedCount / learntWords.length) * 100}%</TestContainer.ResultText>
        <TestContainer.Button onClick={() => navigate('/stats')}>View Stats</TestContainer.Button>
      </TestContainer.ResultContainer>
    );
  }

  if (!currentWord) {
    return (
        <TestContainer>
            <h1>You have to Learn before testing!</h1>
            <TestContainer.Button onClick={() => navigate('/learn')}>Learn</TestContainer.Button>
        </TestContainer>
    )
  }

  return (
    <TestContainer>
      <h1>Test Your Knowledge</h1>
      <TestContainer.Word>Word: {currentWord.word}</TestContainer.Word>
      <TestContainer.ButtonContainer>
        <TestContainer.Button onClick={handleRemembered} style={{ backgroundColor: 'green', color: 'white' }}>Remembered</TestContainer.Button>
        <TestContainer.Button onClick={handleDidNotRemember} style={{ backgroundColor: 'red', color: 'white' }}>Did Not Remember</TestContainer.Button>
      </TestContainer.ButtonContainer>
    </TestContainer>
  );
};

export default Test;
