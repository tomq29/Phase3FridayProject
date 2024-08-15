import '@mantine/core/styles.css';
import { createRoot } from 'react-dom/client';
import App from './App/App.tsx';
import { BrowserRouter } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import store from './App/provider/store/store.tsx';


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <BrowserRouter>
  <MantineProvider>
    <App />
  </MantineProvider>
  </BrowserRouter>
  </Provider>
);
