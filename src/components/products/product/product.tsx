import * as React from "react";
import { Button, Icon, Item } from "semantic-ui-react";
import { IProduct } from "../product-modal";
import PageLoader from "../../layout/loader/loader";
import { geCalenderDate } from "../../../helper/date";

const Product = ({ product }: { product: IProduct }) => {
  return product ? (
    <Item.Group>
      <Item>
        <Item.Image src={product.image} />

        <Item.Content>
          <Item.Header as="a">{product.title}</Item.Header>
          <Item.Meta>
            <span className="cinema">{geCalenderDate(product.date_created)}</span>
          </Item.Meta>
          <Item.Meta>
            <span className="cinema">{product.price} $</span>
          </Item.Meta>
          <Item.Description>{product.description}</Item.Description>
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
  ) : (
    <PageLoader/>
  );
};

export default Product;
