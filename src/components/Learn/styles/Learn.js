import styled from 'styled-components';

export const LearnContainer = styled.div`
  text-align: center;
  padding: 20px;
  font-family: "Baskervville SC", serif;
`;

export const WordList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const WordCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const WordText = styled.div`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

export const MeaningText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;

export const TickButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 12px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export const Checkmark = styled.div`
  font-size: 24px;
  color: green;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
