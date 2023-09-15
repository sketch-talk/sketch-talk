import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/GlobalStyle.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index.tsx';
// import { worker } from './mocks/worker';

// if (import.meta.env.MODE === 'development') {
//   worker.start();
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
