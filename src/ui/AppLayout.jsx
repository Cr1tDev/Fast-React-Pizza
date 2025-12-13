import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  // determine the api status
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      {/* Only the main content will change base on the outlet */}
      <main>
        <h1>Content</h1>
        {/* Render the content of the nested rout */}
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
