import { createBrowserRouter } from 'react-router-dom';
import { MembersPage } from '../pages';
import App from '../App';




export const router = createBrowserRouter([
  {
    path: '/query',
    element: <App />,
  },
  {
    path: '/members',
    element: <MembersPage />,
  },
  {
    path: '*',
    element: <h1>Not found</h1>,
  },
]);
