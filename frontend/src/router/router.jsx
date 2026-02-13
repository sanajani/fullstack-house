import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

// pages
import Home from '../pages/Home';
import ShowSingleProperty from '../pages/ShowSingleProperty';
import Signup from '../auth/Signup';
import Login from '../auth/Login';
import CreateProperty from '../pages/CreateProperty';
import BecomeAgent from '../auth/BecomeAgent';
import AgentOnlyProtected from '../protected/AgentOnlyProtected';
import PageNotFound from '../pages/PageNotFound';
import Protected from '../protected/Protected';
import { Profiler } from 'react';
import Profile from '../pages/Profile';

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
                path:'/about',
                element: <div>About US</div>               
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
                element:<AgentOnlyProtected isAuthenticated={false}><BecomeAgent /></AgentOnlyProtected>
            },
            {
                path:'profile',
                element: <Protected isAuthenticated={true}>
                    <Profile />
                </Protected>  
            },
            {
                path: 'create-property',
                element: <AgentOnlyProtected isAuthenticated={true}><CreateProperty/></AgentOnlyProtected>
            },
            {
                path:"*",
                element: <PageNotFound />
            }
        ]
    }
])