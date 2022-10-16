import { Outlet } from 'react-router-dom';

import { Sidebar } from '@app/components';

export const Home = () => {
  return (
    <>
      <Sidebar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
