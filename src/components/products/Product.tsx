import * as React from "react";
import { Button, Icon, Item } from "semantic-ui-react";

const Product = () => {
  return (
      <Item.Group>
        <Item>
          <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />

          <Item.Content>
            <Item.Header as="a">Watchmen</Item.Header>
            <Item.Meta>
              <span className="cinema">IFC</span>
            </Item.Meta>
            <Item.Description>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum
            </Item.Description>
            <Item.Extra>
              <Button icon labelPosition="left" positive floated="right">
                <Icon name="edit" />
                Edit
              </Button>
              <Button icon labelPosition="right" negative floated="right">
                <Icon name="delete" />
                Delete
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
  );
};

export default Product;
