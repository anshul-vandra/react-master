import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthGuard from "../components/AuthGuard";
import { ROUTES } from "constants/routes";

const Layout = lazy(() => import("../components/layout"));
const SignIn = lazy(() => import("./SignIn"));
const Dashboard = lazy(() => import("./Dashboard"));
const MyAccount = lazy(() => import("./MyAccount"));

const Routing = () => {
  return (
    <Routes>
      <Route path={ROUTES.signIn} element={<SignIn />} />
      <Route
        path={ROUTES.default}
        element={
          <AuthGuard>
            <Layout />
          </AuthGuard>
        }
      >
        <Route index path={ROUTES.dashboard} element={<Dashboard />} />
        <Route path={ROUTES.myAccount} element={<MyAccount />} />
        <Route path={ROUTES.default} element={<Navigate replace to={ROUTES.dashboard} />} />
      </Route>
      <Route path="*" element={<Navigate replace to={ROUTES.default} />} />
    </Routes>
  );
};

export default Routing;
