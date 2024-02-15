import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LeaderBoardPage from './pages/LeaderBoardPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';
import FarmingPage from './pages/FarmingPage';
import TradePage from './pages/TradePage';
import LendPage from './pages/LendPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/nothingfinance',
    element: <ProjectsPage />
  },
  {
    path: '/',
    element: <ProjectsPage />
  },
  {
    path: '/projects',
    element: <ProjectsPage />
  },
  {
    path: '/project/:id',
    element: <ProjectPage />
  },
  {
    path: '/leaderboard/:id',
    element: <LeaderBoardPage />
  },
  {
    path: '/farm',
    element: <FarmingPage />
  },
  {
    path: '/trade',
    element: <TradePage />
  },
  {
    path: '/lend',
    element: <LendPage />
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
