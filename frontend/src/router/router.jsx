import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

// pages
import Home from '../pages/Home';
import ShowSingleProperty from '../pages/ShowSingleProperty';
import Signup from '../auth/Signup';
import Login from '../auth/Login';
import CreateProperty from '../pages/CreateProperty';
import BecomeAgent from '../auth/BecomeAgent';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home />               
            },
            {
                path:'property/:id',
                element: <ShowSingleProperty />
            },
            {
                path:'signup',
                element: <Signup />
            },
                    {
                path:'login',
                element: <Login />
            },
            {
                path:'become-agent',
                element: <BecomeAgent />
            },
            {
                path: 'about',
                element: <CreateProperty/>
            }
        ]
    }
])