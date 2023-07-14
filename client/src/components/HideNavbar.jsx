import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// HIDING NAVBAR WHEN PATH IS /login and /sign-up

const HideNavbar = ({ children }) => {
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/join-us") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);
  return <div>{showNavbar && children}</div>;
};

export default HideNavbar;
