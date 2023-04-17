import React from 'react';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import Layout from './components/Layout'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


import { store } from './app/store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
  <Route path="/" element={<Dashboard />}></Route>
        <Route path="/Login" element={<Login />}></Route>
  

    </Route>
  )
)


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      
      </div>
    </Provider>
  );
}


export default App;
