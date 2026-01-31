import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <h1 className='font-mono'>Home Page</h1>                
            },
            {
                path:'about',
                element: <h1>About page</h1>
            },
            {
                path: 'contact',
                element: <h1>Contact Page</h1>                
            },
            {
                path:'info',
                element: <h1>Info page</h1>
            },
        ]
    }
])