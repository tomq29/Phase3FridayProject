import { Route, Routes } from 'react-router-dom';
import HomePage from '../../../pages/HomePage/HomePage';
import { NotFoundPage } from '../../../pages/NotFoundPage/NotFoundPage';
import LoginPage from '../../../pages/LogRegPage/LoginPage';
import LogoutPage from '../../../pages/LogRegPage/LogoutPage';
import RegPage from '../../../pages/LogRegPage/RegPage';
import GamePage from '../../../pages/GamePage/GamePage';

function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<GamePage />} />


      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/reg" element={<RegPage />} />
      <Route path="/auth/logout" element={<LogoutPage />} />


      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
