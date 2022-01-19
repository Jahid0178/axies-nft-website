import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Activity from "./Components/Activity/Activity";
import Community from "./Components/Community/Community";
import Contact from "./Components/Contact/Contact";
import Pages from "./Components/Pages/Pages";
import Navigation from "./Components/Shared/Navigation/Navigation";
import Explore from "./Pages/Explore/Explore";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/community" element={<Community />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
