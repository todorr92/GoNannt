import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// HIDING NAVBAR AND FOOTER WHEN PATH IS /login and /sign-up

const HideNavbarAndFooter = ({ children }) => {
  const location = useLocation();

  const [showNavbarAndFooter, setShowNavbarAndFooter] = useState(false);

  useEffect(() => {
    console.log("something", location);
    if (location.pathname === "/sign-up" || location.pathname === "/login") {
      setShowNavbarAndFooter(false);
      console.log(
        showNavbarAndFooter,
        "inside of if and the navbar/footer should be hidden"
      );
    } else {
      setShowNavbarAndFooter(true);
      console.log(
        showNavbarAndFooter,
        "inside of else and the navbar/footer should be shown"
      );
    }
  }, [location]);
  console.log(children);
  return <div>{showNavbarAndFooter && children}</div>;
};

export default HideNavbarAndFooter;
