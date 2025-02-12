import { BrowserRouter } from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from './routes'
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);
