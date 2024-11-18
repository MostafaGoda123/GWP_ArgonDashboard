import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import MenuContextProvider from './context/MenuContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </MenuContextProvider>
  </React.StrictMode>
);

