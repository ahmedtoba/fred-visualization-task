import React from "react";
import { Navigate, ReactLocation, Router } from "@tanstack/react-location";
import { Route } from "@tanstack/react-location";
import { ROUTES } from "../../Enums/routes";
import NotFound from "../NotFound/NotFound";
import BarChart from "../../Pages/BarChart/BarChart";
import LineAreaChart from "../../Pages/LineAreaChart/LineAreaChart";
import LineChart from "../../Pages/LineChart/LineChart";

type Props = {
  children: React.ReactNode;
};

const location = new ReactLocation();

const routes = (isAuth?: boolean): Array<Route> => [
  {
    path: `/${ROUTES.BAR_CHART}`,
    element: (
        <BarChart />
    )
  },
  {
    path: `/${ROUTES.LINE_AREA_CHART}`,
    element: (
        <LineAreaChart />
    )
  },
  {
    path: `/${ROUTES.LINE_CHART}`,
    element: (
        <LineChart />
    )
  },
  {
    path: "*",
    element: (
        <NotFound />
    ),
  },
  {
    path: "",
    element: <Navigate to={ROUTES.LINE_AREA_CHART} />,
  },
];

export default function Routes({ children }: Props) {
  return (
    <Router location={location} routes={routes(true)}>
      {children}
    </Router>
  );
}
