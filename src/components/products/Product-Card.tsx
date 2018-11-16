import * as React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../router/routes";
import { IProduct } from "./product-modal";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src={product.image} />
        <Card.Header>{product.title}</Card.Header>
        <Card.Meta>{product.date_created}</Card.Meta>
        <Card.Description>{product.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <NavLink exact activeClassName="active" to={PATHS.PRODUCT(product.id)}>
          <Icon name="add" />
          Show Details
        </NavLink>
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
