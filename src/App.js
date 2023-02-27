import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorFallback from './layer/error_fallback/ErrorFallback';
import ExpenseTracker from './layer/expense_tracker/ExpenseTracker';
import Home from './layer/home/Home';
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton';


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorFallback/>}>
      <Route index element={<Home/>} />
      <Route path="/expense-tracker" element={<ExpenseTracker/>} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <SkeletonTheme
        baseColor="#777"
        borderRadius="0.5rem"
      >
         <RouterProvider router={route}/>
      </SkeletonTheme>
    </div>
  );
}

export default App;
