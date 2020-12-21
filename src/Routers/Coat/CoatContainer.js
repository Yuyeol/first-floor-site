import React from "react";
import CoatPresenter from "./CoatPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    location: "COAT",
    products: [
      {
        id: 1,
        name: "EASY DOUBLE COAT (BLACK, OVERSIZED)",
        brand: "FIRST FLOOR",
        price: "256,000원",
        salePrice: "231,000원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202011/ead675fb28ae92ff0a0276bd0782ea69.jpg",
      },
      {
        id: 2,
        name: "SERENE SOUTIEN (OATMEAL GRAY)",
        brand: "FIRST FLOOR",
        price: "348,000원",
        salePrice: "295,100원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202011/022cafc270e6efe9891f0ca5606fc7b0.jpg",
      },
      {
        id: 3,
        name: "SERENE SOUTIEN (DARK BROWN)",
        brand: "FIRST FLOOR",
        price: "348,000원",
        salePrice: "344,600원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202011/114d9b84f3a38e54b1ba26d8ab6a56a6.jpg",
      },
      {
        id: 4,
        name: "MINIMAL PEA COAT (DARK BROWN,오버핏)",
        brand: "FIRST FLOOR",
        price: "249,000원",
        salePrice: "210,900원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202010/f319019473034b8f253e7fd89b72625a.jpg",
      },
      {
        id: 5,
        name: "MINIMAL PEA COAT (BLACK,오버핏)",
        brand: "FIRST FLOOR",
        price: "249,000원",
        salePrice: "210,900원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202010/be0591efb508eb7bcd59e0da06151a25.jpg",
      },
      {
        id: 6,
        name: "2020 EASY COAT (CAMEL, CASHMERE BLENDED)",
        brand: "FIRST FLOOR",
        price: "228,000원",
        salePrice: "193,800원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202011/2f6a36e5c923b7679d798c5ac20acc74.jpg",
      },
      {
        id: 7,
        name: "2020 EASY COAT (BLACK, CASHMERE BLENDED)",
        brand: "FIRST FLOOR",
        price: "228,000원",
        salePrice: "193,800원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/202011/ca2896d4934d146a68ee5d1b46e529f7.jpg",
      },
      {
        id: 8,
        name: "ROBE TRENCH (wool blended, BLACK)",
        brand: "FIRST FLOOR",
        price: "198,000원",
        salePrice: "112,100원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/201902/ba470894d065bb765633aafa787388fe.jpg",
      },
      {
        id: 9,
        name: "ROBE TRENCH (wool blended, DARK NAVY)",
        brand: "FIRST FLOOR",
        price: "198,000원",
        salePrice: "169,100원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/201902/4bb67990405d30ad3370f171ac7d4a07.jpg",
      },
      {
        id: 10,
        name: "ROBE TRENCH (wool blended, OLIVE)",
        brand: "FIRST FLOOR",
        price: "198,000원",
        salePrice: "169,100원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/201902/02abd7156198d3fba2812e4f1ce9e32b.jpg",
      },
      {
        id: 11,
        name: "ROBE TRENCH (wool blended, BEIGE)",
        brand: "FIRST FLOOR",
        price: "198,000원",
        salePrice: "169,100원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/201902/06459a05e29819a2f7bc29e60fe397e4.jpg",
      },
      {
        id: 12,
        name: "ROBE TRENCH (wool blended, MOCHA BEIGE)",
        brand: "FIRST FLOOR",
        price: "198,000원",
        salePrice: "169,100원",
        imgUrl:
          "http://firstfloor.co.kr/web/product/medium/201902/7b3db4d15faf74150ad1655aac3953ed.jpg",
      },
    ],
  };

  render() {
    return <CoatPresenter {...this.state} />;
  }
}
