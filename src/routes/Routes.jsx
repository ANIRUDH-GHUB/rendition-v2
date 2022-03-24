import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { basePath, contextPath, previewPath } from "../constants/Common";
import Home from "./../Components/Home/Home";

function HomeRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Navigate replace to={basePath} />} />
        <Route path={basePath} element={<Home />} />
        <Route path={contextPath} element={<Home />} />
        <Route path={previewPath} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default HomeRoutes;
