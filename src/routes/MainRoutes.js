import React from "react";
import Home from "../components/home/Home";
import Multiplications from "../components/multiplications/Multiplications";
import Plus from "../components/plus/Plus";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const routes = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/multiplications",
      element: <Multiplications />,
      id: 2,
    },
    {
      link: "/plus",
      element: <Plus />,
      id: 3,
    },
  ];
  return (
    <Routes>
      {routes.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
