import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function scrollOver(id) {
  const ele = document.getElementById(id);
  window.scrollTo(ele.offsetLeft, ele.offsetTop);
}

function ScrollToSection() {
  const { name } = useParams();
  const id = name.toLowerCase();
  useEffect(() => {
    const ele = document.getElementById(id);
    window.scroll({
      top: ele.offsetTop - 100,
      behavior: "smooth",
    });
  });
  return true;
}

export default ScrollToSection;
