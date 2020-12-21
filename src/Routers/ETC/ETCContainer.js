import React from "react";
import ETCPresenter from "./ETCPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    location: "ETC",
    products: [
      {
        id: 1,
        name: "STRIPE SOCKS (4 types, all seasons)",
        brand: "FIRST FLOOR",
        price: "10,400원",
        salePrice: "1,900원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/201903/21a0d5be61b5927cfad4b14e9e0dc023.jpg",
      },
    ],
  };

  render() {
    return <ETCPresenter {...this.state} />;
  }
}
