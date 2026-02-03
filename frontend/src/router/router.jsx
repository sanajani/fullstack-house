import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

// pages
import Home from '../pages/Home';

// 
// import ShowSingleProperty from '../pages/ShowSingleProperty';

import ImagePreviewDesk from '../components/gallary/ImagePreviewDesk';
import ImagePreviewMobile from '../components/gallary/ImagePreviewMobile';
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
                path:'about',
                element: <ShowSingleProperty />
            },
            {
                path: 'contact',
                element: <ImagePreviewDesk />              
            },
            {
                path:'info',
                element: <ImagePreviewMobile />
            },
        ]
    }
])