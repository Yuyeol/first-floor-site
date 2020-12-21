import React from "react";
import TopPresenter from "./TopPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    location: "TOP",
    products: [
      {
        id: 1,
        name: "STITCHED MINIMAL KNIT (DARK BLUE)",
        brand: "FIRST FLOOR",
        price: "66,000원",
        salePrice: "27,550원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/201903/308f29ac0c52e911de4cf6be58f21f13.jpg",
      },
      {
        id: 2,
        name: "11th anniversary OG logo T-shirt (5 colors, 3/4 sleeves)",
        brand: "FIRST FLOOR",
        price: "38,000원",
        salePrice: "33,900원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/201906/8557cdaa9f08e87267d386789a14c8e8.jpg",
      },
    ],
  };

  render() {
    return <TopPresenter {...this.state} />;
  }
}
