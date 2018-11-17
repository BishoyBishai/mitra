import * as React from "react";
import { Card, Grid, Segment, Message } from "semantic-ui-react";
import ProductCard from "./product-card";
import { IProductsProps } from "../product-modal";
import ProductsFilter from "../products-filters/products-filters-container";
import ProductsPagination from "../products-pagination";

const ProductsList = (props: IProductsProps) => {
  const { message, error, dismiss, products } = props;
  return (
    <div className="products-list">
      {message && (
        <Message
          onDismiss={dismiss.bind(this)}
          negative={error != null}
          positive={error == null}
        >
          <Message.Header>{message}</Message.Header>
        </Message>
      )}
      <Grid columns="equal">
        <Grid.Column width="3">
          <ProductsFilter />
        </Grid.Column>
        <Grid.Column>
          <Card.Group stackable itemsPerRow="3">
            {products.map(product => (
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
