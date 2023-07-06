import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
      </Routes>
    </>
  );
}

export default App;
