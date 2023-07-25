import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { JobsContextProvider } from "./context/JobsContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <JobsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </JobsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
