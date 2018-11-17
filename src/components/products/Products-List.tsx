import * as React from "react";
import { Card, Grid, Segment } from "semantic-ui-react";
import ProductCard from "./product-card";
import { IProductsProps } from "./product-modal";
import ProductsFilter from "./products-filters";
import ProductsPagination from "./products-pagination";

const ProductsList = (props: IProductsProps) => {
  return (
    <div className="products-list">
      <Grid columns="equal">
        <Grid.Column width="3">
          <ProductsFilter />
        </Grid.Column>
        <Grid.Column>
          <Card.Group stackable itemsPerRow="3">
            {props.products.map(product => (
              <ProductCard product={product} key={product.id} />
            ))}
          </Card.Group>
          <Segment basic textAlign="center">
            <ProductsPagination />
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ProductsList;
