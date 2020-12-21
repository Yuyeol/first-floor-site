import React from "react";
import HeaderPresenter from "./HeaderPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    fixNav: false,
  };

  handleScroll = (e) => {
    const {
      srcElement: {
        scrollingElement: { scrollTop },
      },
    } = e;
    if (scrollTop >= 150) {
      this.setState({ fixNav: true });
    } else {
      this.setState({ fixNav: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    // console.log(this.state);
    return <HeaderPresenter {...this.state} />;
  }
}
