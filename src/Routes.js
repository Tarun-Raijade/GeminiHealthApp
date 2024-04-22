import About from './components/About/About';
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login';
import Registration from './components/Resgistration/Registration';
import Dashboard from './components/Dashboard/Dashboard'

import {createBrowserRouter } from 'react-router-dom';
import AppLayout from './App';
const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/registration',
        element: <Registration />,
    },
    {
        path: '/home',
        element: <AppLayout />,
        children: [
            {
                path: '',
                element: <Dashboard />,
            },
            {
                path: '/home/about',
                element: <About />,
            },
            {
                path: '/home/contact',
                element: <Contact />,
            },
        ],
    },
]);

export default routes;