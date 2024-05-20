import React from "react";
import {
  Introduction,
  About,
  Portfolio,
  Sidebar,
  Timeline,
} from "./components";
import { data } from "./data/data";
import "./App.css";

import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar />
        <div style={{ padding: 0 }} id="colorlib-main">
          <Introduction />
          <About />
          <Portfolio data={data.Projects} />
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default App;
