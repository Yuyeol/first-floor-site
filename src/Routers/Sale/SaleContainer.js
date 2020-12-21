import React from "react";
import SalePresenter from "./SalePresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    location: "SALE",
    products: [
      {
        id: 1,
        name: "EASY DOUBLE COAT (BLACK, OVERSIZED)",
        brand: "FIRST FLOOR",
        price: "256,000원",
        salePrice: "219,450원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202011/ead675fb28ae92ff0a0276bd0782ea69.jpg",
      },
      {
        id: 2,
        name: "EASYGOING CROP PANTS (regular fit, dyed charcoal)",
        brand: "FIRST FLOOR",
        price: "68,000원",
        salePrice: "55,100원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202011/5a7c7d3869bad11c21bead8f5619a41a.jpg",
      },
      {
        id: 3,
        name: "EASYGOING CROP PANTS (regular fit, dyed beige)",
        brand: "FIRST FLOOR",
        price: "68,000원",
        salePrice: "55,100원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202011/f36092cd909b2f20d436ebdff9fa5f20.jpg",
      },
      {
        id: 4,
        name: "2020 EASY COAT (BLACK, CASHMERE BLENDED)",
        brand: "FIRST FLOOR",
        price: "228,000원",
        salePrice: "193,800원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202011/ca2896d4934d146a68ee5d1b46e529f7.jpg",
      },
      {
        id: 5,
        name: "2020 EASY COAT (CAMEL, CASHMERE BLENDED)",
        brand: "FIRST FLOOR",
        price: "228,000원",
        salePrice: "193,800원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202011/2f6a36e5c923b7679d798c5ac20acc74.jpg",
      },
      {
        id: 6,
        name: "SERENE SOUTIEN (OATMEAL GRAY)",
        brand: "FIRST FLOOR",
        price: "348,000원",
        salePrice: "344,600원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202011/2e5a0a85032a6cf1278b8b2727d3f476.jpg",
      },
    ],
  };

  render() {
    return <SalePresenter {...this.state} />;
  }
}
