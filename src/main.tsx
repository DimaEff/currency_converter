import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

// the element with the id 'root' exists
const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
