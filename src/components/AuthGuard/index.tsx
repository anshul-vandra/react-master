import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "services/store";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) { /*navigate(ROUTES.signIn, { replace: true }) */ };
  }, [isLoggedIn, navigate]);

  return <>{children}</>;
};

export default AuthGuard;
