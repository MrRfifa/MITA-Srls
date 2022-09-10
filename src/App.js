import { Suspense, useState, useEffect } from "react";
import MainPageLayout from "./layout/MainPage/MainPageLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./layout/ServicesPage/MainContent";
import MainContentContact from "./layout/ContatctUsPage/MainContentContact";
import VideoPageContent from "./layout/VideosPage/VideoPageContent";
import "./assets/css/style.css";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <Suspense fallback={"Loading..."}>
      <div className={`App ${theme}`}>
        <button
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
          onClick={toggleTheme}
        >
          <i className="fa-solid fa-arrow-right-arrow-left"></i>
        </button>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPageLayout />} />
            <Route path="/services" element={<MainContent />} />
            <Route path="/contact" element={<MainContentContact />} />
            <Route path="/videos" element={<VideoPageContent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
