import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './author/Home';
import About from './author/About';
import Author from './author/authors/Author';
import Series from './author/authors/series/Series';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'author',
        children: [
          {
            path: ':authorId',
            element: <Author />,
            children: [
              {
                path: ':seriesId',
                element: <Series />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
