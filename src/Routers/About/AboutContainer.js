import React from "react";
import AboutPresenter from "./AboutPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = { location: "COMPANY" };

  render() {
    return <AboutPresenter {...this.state} />;
  }
}
