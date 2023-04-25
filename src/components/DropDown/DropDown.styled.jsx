import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Select = styled.select`
  padding: 8px;
  margin-top: 8px;
  border: none;
  border-radius: 4px;
  color: #333;
  background-color: rgb(245, 225, 245);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 0;
  font-size: 18px;
  transform: translateY(-10px);
  animation: ${fadeIn} 0.2s ease forwards;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

export const Option = styled.option`
  display: block;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f8f8f8;
  }
`;
