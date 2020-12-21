import React, { useState, useEffect } from "react";
import LogoBlock from "./Headers/LogoBlock";
import NavBar from "./Headers/NavBar";
import TopBar from "./Headers/TopBar";

export const Header = () => {
  const [fixNav, setFixNav] = useState([]);

  const handleScroll = (e) => {
    const {
      srcElement: {
        scrollingElement: { scrollTop },
      },
    } = e;
    if (scrollTop >= 150) {
      setFixNav(true);
    } else {
      setFixNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <TopBar />
      <LogoBlock />
      <NavBar fixNav={fixNav} />
    </>
  );
};
