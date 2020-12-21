import React from "react";
import LookBookPresenter from "./LookBookPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    location: "LookBook",
    posters: [
      {
        title: "19F/W JUST MODERN",
        writer: "Tan",
        date: "2019-11-10",
        imgUrl:
          "http://m.firstfloor.co.kr/file_data/firstfloor/2019/11/10/a081f9eeb75c6abe16c374839fde15f6.jpg",
      },
      {
        title: "247 everyday everywhere",
        writer: "Tan",
        date: "2019-03-14",
        imgUrl:
          "http://m.firstfloor.co.kr/file_data/firstfloor/2019/03/14/fb0cf2abc9f681b2a6fa9c81b3d89844.jpg",
      },
      {
        title: "18-19 F/W - LESS BUT BETTER",
        writer: "Tan",
        date: "2018-11-06",
        imgUrl:
          "http://m.firstfloor.co.kr/file_data/firstfloor/2018/11/06/4938cd1dff88a9fb19e21c0b8ad973f3.jpg",
      },
      {
        title: "18 SFW , 여름 그리고 가을",
        writer: "Tan",
        date: "2018-08-16",
        imgUrl:
          "http://m.firstfloor.co.kr/file_data/firstfloor/2018/08/16/642daed4608890857c18c807db0b9b16.jpg",
      },
      {
        title: "17 F/W FIRST FLOOR 2nd Delivery",
        writer: "BONNIE",
        date: "2017-11-03",
        imgUrl:
          "http://m.firstfloor.co.kr/file_data/firstfloor/2017/10/18/74e308be50d474dd9406e7b5a911e22a.jpg",
      },
      {
        title: "17 F/W FIRST FLOOR in London Film Ver.",
        writer: "BONNIE",
        date: "2017-10-18",
        imgUrl:
          "http://m.firstfloor.co.kr/file_data/firstfloor/2017/10/18/7df25307a70791c09dbc2a74488996c9.jpg",
      },
    ],
  };

  render() {
    return <LookBookPresenter {...this.state} />;
  }
}
