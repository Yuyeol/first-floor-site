import CurrLocation from "Components/CurrLocation";
import Product from "Components/ProductSection/Product";
import Section from "Components/ProductSection/Section";
import React, { useState } from "react";

const Bottom = () => {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState("BOTTOM");
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "HIGHBROW SLACKS (LONG STRAIGHT , CHOCO)",
      brand: "FIRST FLOOR",
      price: "80,000원",
      salePrice: "74,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/9478adf21ebf0e522a8adec0902f52bb.jpg",
    },
    {
      id: 2,
      name: "HIGHBROW SLACKS (LONG STRAIGHT , BEIGE)",
      brand: "FIRST FLOOR",
      price: "80,000원",
      salePrice: "74,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/e59cec4deb8608fe5a847e749d198691.jpg",
    },
    {
      id: 3,
      name: "HIGHBROW SLACKS (LONG STRAIGHT , DARK NAVY)",
      brand: "FIRST FLOOR",
      price: "80,000원",
      salePrice: "74,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/a6eb2fa14d63846b10aeb38191a6484b.jpg",
    },
    {
      id: 4,
      name: "HIGHBROW SLACKS (LONG STRAIGHT , BLACK)",
      brand: "FIRST FLOOR",
      price: "80,000원",
      salePrice: "74,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/993df3f271ed9494ed2d85efd38b398a.jpg",
    },
    {
      id: 5,
      name: "EASYGOING CROP PANTS (regular fit, cream)",
      brand: "FIRST FLOOR",
      price: "68,000원",
      salePrice: "50,500원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202010/adb4df94a096772ffc7dcbb8adda8e99.jpg",
    },
    {
      id: 6,
      name: "EASYGOING CROP PANTS (regular fit, dyed charcoal)",
      brand: "FIRST FLOOR",
      price: "68,000원",
      salePrice: "50,500원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/5a7c7d3869bad11c21bead8f5619a41a.jpg",
    },
    {
      id: 7,
      name: "EASYGOING CROP PANTS (regular fit, dyed beige)",
      brand: "FIRST FLOOR",
      price: "68,000원",
      salePrice: "55,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/f36092cd909b2f20d436ebdff9fa5f20.jpg",
    },
  ]);
  return (
    <>
      <CurrLocation location={location} products={products} />
      {products && products.length > 0 && (
        <Section>
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              brand={product.brand}
              price={product.price}
              salePrice={product.salePrice}
              imgUrl={product.imgUrl}
            />
          ))}
        </Section>
      )}
    </>
  );
};

export default Bottom;
