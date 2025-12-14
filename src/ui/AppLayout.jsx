import React from 'react';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

function AppLayout() {
  // determine the api status
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid-row-3 grid h-dvh grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      {/* Only the main content will change base on the outlet */}
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* Render the content of the nested rout */}
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
