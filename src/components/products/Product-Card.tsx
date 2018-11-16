import * as React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

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
        <a>
          <Icon name="add" />
          Show Details
        </a>
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
