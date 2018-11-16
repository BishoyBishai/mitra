import * as React from "react";
import { Card } from "semantic-ui-react";
import ProductCard from "./Product-Card";

const ProductsList = () => {
  return (
    <div className="products-list">
      <Card.Group stackable itemsPerRow="4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Card.Group>
    </div>
  );
};

export default ProductsList;
