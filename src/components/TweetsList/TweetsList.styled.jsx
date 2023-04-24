import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 48px;
  padding: 0 0 20px 0;
  margin-top: 10px;
`;

export const Item = styled.li`
  width: 380px;
  height: 460px;

  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;
