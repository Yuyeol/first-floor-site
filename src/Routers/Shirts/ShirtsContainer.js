import React from "react";
import ShirtsPresenter from "./ShirtsPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    location: "SHIRTS",
    products: [
      {
        id: 1,
        name: "HIDDEN MINIMAL SHIRT (choco,초코)",
        brand: "FIRST FLOOR",
        price: "72,000원",
        salePrice: "68,400원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202010/17febbb3bfd9c62341d09761e5f0a265.jpg",
      },
      {
        id: 2,
        name: "HIDDEN MINIMAL SHIRT (light choco,라이트초코)",
        brand: "FIRST FLOOR",
        price: "72,000원",
        salePrice: "68,400원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202010/3e98db7f65714ad0b1b9ae15505b34a7.jpg",
      },
      {
        id: 3,
        name: "HIDDEN MINIMAL SHIRT (mocha,모카)",
        brand: "FIRST FLOOR",
        price: "72,000원",
        salePrice: "68,400원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202010/034e94e931518fa9abf4039443e5b366.jpg",
      },
      {
        id: 4,
        name: "HIDDEN MINIMAL SHIRT (light grey,라이트그레이)",
        brand: "FIRST FLOOR",
        price: "72,000원",
        salePrice: "68,400원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202010/109d263207e73ebe911854407b420224.jpg",
      },
      {
        id: 5,
        name: "HIDDEN MINIMAL SHIRT (cream beige,크림베이지)",
        brand: "FIRST FLOOR",
        price: "72,000원",
        salePrice: "68,400원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202010/7ec6301e75462b5e14348403f402e800.jpg",
      },
      {
        id: 6,
        name: "HIDDEN MINIMAL SHIRT (ash brown,애쉬브라운)",
        brand: "FIRST FLOOR",
        price: "72,000원",
        salePrice: "68,400원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202010/ef40b01fd60403e450bb7587f3a81d04.jpg",
      },
    ],
  };

  render() {
    return <ShirtsPresenter {...this.state} />;
  }
}
