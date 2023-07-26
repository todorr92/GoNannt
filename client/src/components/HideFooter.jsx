import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// HIDING FOOTER WHEN PATH IS /login and /sign-up

const HideFooter = ({ children }) => {
  const location = useLocation();

  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    if (location.pathname === "/join-us") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location]);
  return <div>{showFooter && children}</div>;
};

export default HideFooter;
