import React from "react";
import Sections from "../Sections/Sections";
import TOC from "../TableOfContents/TOC";

function Home() {
  return (
    <div className="app-container">
      <div className="app-container-body">
        <TOC />
        <Sections />
      </div>
    </div>
  );
}

export default Home;
