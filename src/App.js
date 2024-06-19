import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "/src/components/Header";
import Body from "/src/components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroCard from "./components/RestroCard";
import Shimmer from "./components/Shimmer";
import UserContext from "/src/utils/UserContext";
import AppStore from "/src/utils/AppStore";
import RestaurantM from "./components/RestaurantM";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux"; // Providing it to the React application
import Cart from "./components/Cart"

const Grocery = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => {
  const [info, setInfo] = useState();

  useEffect(() => {
    const data = { name: "KUSHANK P" };
    setInfo(data.name);
  }, []);

  return (
    <Provider store={AppStore}>
      <UserContext.Provider value={{ User: info, setInfo }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantM />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
