import Layout from 'Layout';
import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('pages/Home'));
const TweetsPage = lazy(() => import('pages/Tweets'));

export const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/tweets' element={<TweetsPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};
