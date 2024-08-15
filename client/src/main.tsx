import '@mantine/core/styles.css';
import { createRoot } from 'react-dom/client';
import App from './App/App.tsx';
import { BrowserRouter } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <MantineProvider>
    <App />
  </MantineProvider>
  </BrowserRouter>
);
