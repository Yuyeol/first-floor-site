import CurrLocation from "Components/CurrLocation";
import Product from "Components/ProductSection/Product";
import Section from "Components/ProductSection/Section";
import React, { useState } from "react";

const Shirts = () => {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState("SHIRTS");
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([
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

export default Shirts;
