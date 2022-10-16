import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@app/theme/styles';
import '@app/styles.css';

import { Home, Error as ErrorPage } from '@app/pages';
import { Contact } from '@app/features/Contact';
import { getContacts } from '@app/contacts';

const contactsLoader = async () => {
  const contacts = await getContacts();
  return { contacts };
};

// остановился на этом пункте
// https://reactrouter.com/en/main/start/tutorial#data-writes--html-forms

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: contactsLoader,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
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
