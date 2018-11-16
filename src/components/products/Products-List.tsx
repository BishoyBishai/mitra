import * as React from "react";
import { Card } from "semantic-ui-react";
import ProductCard from "./product-card";
import { IProductsProps } from "./product-modal";

const ProductsList = (props: IProductsProps) => {
  return (
    <div className="products-list">
      <Card.Group stackable itemsPerRow="4">
        {props.products.map((product) => (
          <ProductCard  product={product} key={product.id}/>
        ))}
      </Card.Group>
    </div>
  );
};

export default ProductsList;
