import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Pages/About';
import Course from './Pages/Course';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import Error404 from './Pages/Error404';
import Enquiry from './Pages/Enquiry';
import Login from './Pages/Login';
import Tab from './Tab';
import ToDoList from './Pages/ToDoList';
import PasswordGenerator from './Pages/PasswordGenerator';
import Weather from './Pages/Weather';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter(
  [
    {
      path: '/',
      element:<Home/>
    },
    {
      path: 'about-us',
      element: <About/>
    },
    {
      path: 'course',
      element: <Course/>
    },
    {
      path: 'blog',
      element: <Blog/>
    },
    {
      path: 'enquiry',
      element: <Enquiry/>
    },
    {
      path: 'login',
      element: <Login/>
    },
    {
      path: 'tab',
      element: <Tab/>
    },
    {
      path: 'todo-list',
      element: <ToDoList/>
    },
    {
      path: 'password-generator',
      element: <PasswordGenerator/>
    },
    {
      path: 'city-weather',
      element: <Weather/>
    },
    {
      path: 'blog/:id',
      element: <BlogDetails/>
    },
    {
      path: '*', //only routing pages path call, if other page not found the this page call
      element: <Error404/>
    }
  ]
)
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={allRoutes}/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
