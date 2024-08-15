import { useEffect } from 'react';
import { NavBar } from '../widgets/NavBar/NavBar';
import AppRoutes from './provider/routes/AppRoutes';
import { useAppDispatch } from './provider/store/store';
import { refreshTokens } from '../entities/user/model/authSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshTokens());
  });

  return (
    <>
      <NavBar />
      <AppRoutes />
    </>
  );
}

export default App;
