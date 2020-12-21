import React from "react";
import OuterPresenter from "./OuterPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    location: "OUTER",
    products: [
      {
        id: 1,
        name: "[M.H] FIELD BLOUSON (BROWN CHECK)",
        brand: "FIRST FLOOR",
        price: "189,000원",
        salePrice: "160,550원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202010/cc94acf75fbded0081d899d5e739d566.jpg",
      },
      {
        id: 2,
        name: "[M.H] FIELD BLOUSON (BLACK)",
        brand: "FIRST FLOOR",
        price: "189,000원",
        salePrice: "160,550원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202010/2c43fd504efe168b6b279b30ddef2732.jpg",
      },
      {
        id: 3,
        name: "HIGHBROW JACKET (BLACK,세미오버핏)",
        brand: "FIRST FLOOR",
        price: "189,000원",
        salePrice: "160,550원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202010/d254c3b863e6534d6a61e85d7569f662.jpg",
      },
      {
        id: 4,
        name: "HIGHBROW JACKET (DARK NAVY,세미오버핏)",
        brand: "FIRST FLOOR",
        price: "189,000원",
        salePrice: "160,550원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202010/ccd0828dd0795c977b9309c7e040060d.jpg",
      },
      {
        id: 5,
        name: "HIGHBROW JACKET (BROWN CHECK,세미오버핏)",
        brand: "FIRST FLOOR",
        price: "189,000원",
        salePrice: "169,000원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202010/ad2a17bd68971b99009a5e41f5554d5b.jpg",
      },
    ],
  };

  render() {
    return <OuterPresenter {...this.state} />;
  }
}
