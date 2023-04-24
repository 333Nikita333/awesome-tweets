import AppBar from 'components/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  background: linear-gradient(to right, #c9d6ff, #e2e2e2);
`;
const Layout = () => {
  return (
    <>
      <AppBar />

      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
