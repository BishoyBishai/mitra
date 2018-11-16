import * as React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../router/routes";

const ProductCard = () => {
  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <NavLink exact activeClassName="active" to={PATHS.PRODUCT()}>
          <Icon name="add" />
          Show Details
        </NavLink>
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
