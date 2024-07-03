import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  background-color: #FFDAB9; /* Dusky peach background color */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Title = styled.h1`
  color: #333333; /* Dark color for contrast */
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Button = styled.button`
  background-color: #FF6347; /* Vibrant button color */
  border: none;
  color: white;
  padding: 20px 40px;
  text-align: center;
  text-decoration: none !important;
  display: inline-block;
  font-size: 24px;
  margin: 10px 2px;
  cursor: pointer;
  border-radius: 12px;
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
  transition: background-color 0.3s;

  &:hover {
    background-color: #FF4500; /* Darker shade on hover */
  }
`;
