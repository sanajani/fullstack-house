import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

// pages
import Home from '../pages/Home';
import ShowSingleProperty from '../pages/ShowSingleProperty';

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
            }
        ]
    }
])