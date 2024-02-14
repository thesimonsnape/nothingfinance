import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LeaderBoardPage from './pages/LeaderBoardPage';
import TasksPage from './pages/TasksPage';
import ProjectsPage from './pages/ProjectsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/nothingfi',
    element: <App />
  },
  {
    path: '/',
    element: <App />
  },
  {
    path: '/projects',
    element: <ProjectsPage />
  },
  {
    path: '/leaderboard',
    element: <LeaderBoardPage />
  },
  {
    path: '/tasks',
    element: <TasksPage />
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
