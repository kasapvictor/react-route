import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@app/theme/styles';
import '@app/styles.css';

import { Home, Error as ErrorPage } from '@app/pages';
import { Contact } from '@app/features/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'contacts/:contactId',
    element: <Contact />,
  },
]);

const init = () => {
  const rootContainer = document.getElementById('root');

  if (rootContainer) {
    const root = createRoot(rootContainer);

    root.render(<RouterProvider router={router} />);
  }
};

init();
