// COMPONENTS
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import HideNavbar from "./components/HideNavbar";
import HideFooter from "./components/HideFooter";

// HOOOKS
import { useAuthContext } from "./hooks/useAuthContext";

// PAGES
import HowItWorksParents from "./pages/HowItWorksParents";
import HowItWorksSitters from "./pages/HowItWorksSitters";
import FAQParents from "./pages/FAQParents";
import FAQSitters from "./pages/FAQSitters";
import JobsBoard from "./pages/JobsBoard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// REACT IMPORTS
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const { user } = useAuthContext();
  return (
    <>
      <HideNavbar>
        <Navbar />
      </HideNavbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/parents/how-it-works"
          element={<HowItWorksParents />}
        ></Route>
        <Route path="/parents/FAQ's" element={<FAQParents />}></Route>
        <Route
          path="/sitters/how-it-works"
          element={<HowItWorksSitters />}
        ></Route>
        <Route path="/sitters/FAQ's" element={<FAQSitters />}></Route>
        <Route
          path="/jobs-board"
          element={user ? <JobsBoard /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        ></Route>
      </Routes>
      <HideFooter>
        <Footer />
      </HideFooter>
    </>
  );
}

export default App;
