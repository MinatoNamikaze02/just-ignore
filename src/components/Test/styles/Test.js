import styled from "styled-components";

export const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Word = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: ${props => (props.remembered ? 'green' : 'red')};

  &:hover {
    opacity: 0.8;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const ResultText = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;
