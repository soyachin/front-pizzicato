import { StrictMode } from 'react'
import React from 'react'
import './index.css'
import App from './App.jsx'
import * as ReactDOM from 'react-dom/client'
import {Root} from './routes/root.jsx'
import { SignInForm } from './routes/signin/form.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([ // root rout 
  {
    path: "/",
    element: <Root/>,
    
  },
  {
    path: "/signin",
    element: <SignInForm/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


