// import React from 'react';
// import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider'; // Import AuthProvider
// import App from './App'; // Import App component
// // import { useAuth } from './context/AuthProvider';

// // Create the root element
// const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot instead of render

// root.render(
//   <BrowserRouter>
//   <App />
    
//   </BrowserRouter>
// );

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
   <AuthProvider>
      <App />
    </AuthProvider>
      </BrowserRouter>
  </StrictMode>,
)

