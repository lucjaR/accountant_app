import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './index.css';
//import './firebaseInit';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Logo from "./components/common/Logo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Logo/>,
    },
    {
        path: "/ksiegowi",
        element: <App/>,
    },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
