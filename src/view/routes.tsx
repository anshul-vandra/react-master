import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthGuard from "../components/AuthGuard";

const Layout = lazy(() => import("../components/layout"));
const SignIn = lazy(() => import("./SignIn"));
const Dashboard = lazy(() => import("./Dashboard"));
const MyAccount = lazy(() => import("./MyAccount"));

const Routing = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/"
        element={
          <AuthGuard>
            <Layout />
          </AuthGuard>
        }
      >
        <Route index path="/dashboard" element={<Dashboard />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Routing;
