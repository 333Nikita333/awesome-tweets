import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  margin-bottom: 20px;

  font-size: 17px;
  font-weight: bold;
  border: none;
  border-radius: 0.75em;
  background: #373737;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover span {
    transform: translateY(-0.33em);
  }
  &:active span {
    transform: translateY(0);
  }
`;

export const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;

  box-sizing: border-box;
  border: 2px solid #373737;
  border-radius: 0.75em;
  background: #e8e8e8;
  color: #373737;
  transform: translateY(-0.2em);
  transition: transform 0.1s ease;
`;
