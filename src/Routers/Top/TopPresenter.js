import CurrLocation from "Components/CurrLocation";
import PageMove from "Components/PageMove";
import Product from "Components/ProductSection/Product";
import Section from "Components/ProductSection/Section";
import SortBar from "Components/SortBar";

const TopPresenter = ({ location, products }) => (
  <>
    <CurrLocation location={location} />
    <SortBar products={products} />
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
    <PageMove />
  </>
);

export default TopPresenter;
