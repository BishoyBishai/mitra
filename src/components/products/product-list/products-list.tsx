import * as React from "react";
import { Card, Grid, Segment, Message } from "semantic-ui-react";
import ProductCard from "./product-card";
import { IProductsProps } from "../product-modal";
import ProductsFilter from "../products-filters/products-filters-container";
import ProductsPagination from "../product-pagination/products-pagination";
import { getPageParam } from "../../../helper/redux";

class ProductsList extends React.Component<IProductsProps> {
  componentDidMount() {
    const pageId = getPageParam(this.props, "page");
    pageId && this.props.paginate(pageId);
  }
  render() {
    const {
      message,
      error,
      dismiss,
      products,
      activePage,
      paginate,
      totalPages,
    } = this.props;
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
              <ProductsPagination
                activePage={activePage}
                paginate={paginate}
                totalPages={totalPages}
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default ProductsList;
