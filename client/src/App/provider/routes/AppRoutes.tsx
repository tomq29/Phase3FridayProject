import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../../pages/HomePage/HomePage';
import { NotFoundPage } from '../../../pages/NotFoundPage/NotFoundPage';

function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />



      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  );
}

export default AppRoutes;
