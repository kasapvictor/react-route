import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@app/theme/styles';
import '@app/styles.css';

import { Root } from '@app/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
