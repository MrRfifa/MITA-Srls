import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Videos from "./Videos";
import VideosHeader from "./VideosHeader";

const VideoPageContent = () => {
  return (
    <div>
      <Navbar />
      <VideosHeader />
      <Videos />
      <Footer />
    </div>
  );
};

export default VideoPageContent;
