import CurrLocation from "Components/CurrLocation";
import Product from "Components/ProductSection/Product";
import Section from "Components/ProductSection/Section";
import React, { useState } from "react";

const Top = () => {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState("TOP");
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([
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

export default Top;
