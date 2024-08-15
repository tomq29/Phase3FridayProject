import { ThemeToggle } from '../shared/ui/ThemeToggle/ThemeToggle';
import AppRoutes from './provider/routes/AppRoutes';

function App(): JSX.Element {
  return (
    <>
      <ThemeToggle />

      <AppRoutes />
    </>
  );
}

export default App;
