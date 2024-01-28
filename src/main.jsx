import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Error from './pages/Error';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume';
// import Contact from './pages/Contact';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
    //   {
    //     path: '/Resume',
    //     element: <Resume />,
    //   },
    //   {
    //     path: '/Contact',
    //     element: <Contact />,
    //   },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
