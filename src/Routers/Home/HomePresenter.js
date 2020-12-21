import MainBanner from "Components/Mainbanner";
import Product from "Components/ProductSection/Product";
import Section from "Components/ProductSection/Section";
import styled from "styled-components";

const NewArr = styled.div`
  text-align: center;
  font-size: 32px;
  margin: 70px 0 40px 0;
`;

const HomePresenter = ({ products }) => {
  return (
    <>
      <MainBanner />
      <NewArr>NEW ARRIVALS</NewArr>
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

export default HomePresenter;
