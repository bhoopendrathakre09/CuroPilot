import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Survey from "./pages/Survey";
import Insights from "./pages/Insights";
import Resources from "./pages/Resoursces";
import Contact from "./pages/Contact";
import GoldenHour from "./pages/GoldenHour";

export default function App() {
  return (
    <div className="min-h-screen bg-[#040610] text-white">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                {/* <Contact /> */}
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/golden-hour" element={<GoldenHour />} />
          <Route path="/insights" element={<Insights />} />
          {/* <Route path="/resources" element={<Resources />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
