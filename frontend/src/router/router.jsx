import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

// pages
import Home from '../pages/Home';
import ShowSingleProperty from '../pages/ShowSingleProperty';
import Signup from '../auth/Signup';
import Login from '../auth/Login';
import CreateProperty from '../pages/CreateProperty';
import BecomeAgent from '../auth/BecomeAgent';
import PageNotFound from '../pages/PageNotFound';
import Profile from '../pages/Profile';
import ProtectedAuth from '../protected/ProtectedAuth'; // if user logged in, they should not access login and signup page
import ProtectRole from '../protected/ProtectRole'; // if user is agent they should not access become agent page
import ProtectUserOnly from '../protected/ProtectedUserOnly'; // if user is not logged in they should not access profile page
import ProtectAgentOnly from '../protected/ProtectAgentOnly'; // if user is not agent they should not access create property page
import About from '../pages/About';
import Contact from '../pages/Contact';

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
                element: <About />              
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path:'property/:id',
                element: <ShowSingleProperty />
            },
            {
                path:'signup',
                element: <ProtectedAuth><Signup /></ProtectedAuth>
            },
            {
                path:'login',
                element: <ProtectedAuth><Login /></ProtectedAuth>
            },
            {
                path:'become-agent',
                element:<ProtectRole><BecomeAgent /></ProtectRole>
            },
            {
                path:'profile',
                element: <ProtectUserOnly><Profile /></ProtectUserOnly>  
            },
            {
                path: 'create-property',
                element: <ProtectAgentOnly><CreateProperty/></ProtectAgentOnly>
            },
            {
                path:"*",
                element: <PageNotFound />
            }
        ]
    }
])