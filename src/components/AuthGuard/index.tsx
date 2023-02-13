import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "services/store";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) { /*navigate('/signin', { replace: true }) */ };
  }, [isLoggedIn, navigate]);

  return <>{children}</>;
};

export default AuthGuard;
