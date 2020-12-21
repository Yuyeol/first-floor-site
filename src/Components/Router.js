import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "Routers/Home";
import About from "Routers/About";
import LookBook from "Routers/LookBook";
import Outer from "Routers/Outer";
import Coat from "Routers/Coat";
import Shirts from "Routers/Shirts";
import Top from "Routers/Top";
import Bottom from "Routers/Bottom";
import ETC from "Routers/ETC";
import Sale from "Routers/Sale";
import Header from "Routers/Header";
import Footer from "Routers/Footer";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/lookbook" exact component={LookBook} />
      <Route path="/outer" exact component={Outer} />
      <Route path="/coat" exact component={Coat} />
      <Route path="/shirts" exact component={Shirts} />
      <Route path="/top" exact component={Top} />
      <Route path="/bottom" exact component={Bottom} />
      <Route path="/etc" exact component={ETC} />
      <Route path="/sale" exact component={Sale} />
      <Footer />
    </>
  </Router>
);
