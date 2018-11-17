import * as React from "react";
import {
  Button,
  Icon,
  Item,
  Input,
  TextArea,
  Header,
  Message,
} from "semantic-ui-react";
import "./style.scss";
import config from "../../../config/config";
import { IProductFrom } from "../product-modal";
class ProductForm extends React.Component<IProductFrom> {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
  }
  state = {
    title: "",
    description: "",
    price: "",
    image: "",
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleDismiss() {
    this.props.dismiss();
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.create(this.state);
  }
  render() {
    const { message, error } = this.props;
    return (
      <div>
        <Header as="h2" textAlign="left">
          <Header.Content>Add New Product</Header.Content>
          <Header.Subheader>
            Add New product to your product list
          </Header.Subheader>
        </Header>
        {message && (
          <Message
            onDismiss={this.handleDismiss}
            negative={error != null}
            positive={error == null}
          >
            <Message.Header>{message}</Message.Header>
          </Message>
        )}
        <Item.Group className="product-form">
          <Item>
            <Item.Image src={this.state.image || config.defaultImagePath} />
            <Item.Content>
              <Item.Header as="a">
                <Input
                  icon="pencil alternate"
                  iconPosition="left"
                  size="medium"
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  placeholder="Product Name"
                />
              </Item.Header>
              <Item.Meta>
                <Input
                  icon="money"
                  iconPosition="left"
                  size="medium"
                  type="text"
                  name="price"
                  value={this.state.price}
                  onChange={this.handleChange}
                  placeholder="Product Price"
                />
                <Input
                  icon="photo"
                  iconPosition="left"
                  size="medium"
                  type="text"
                  name="image"
                  value={this.state.image}
                  onChange={this.handleChange}
                  placeholder="Product image"
                />
              </Item.Meta>
              <Item.Description>
                <TextArea
                  name="description"
                  placeholder="Product Description"
                  onChange={this.handleChange}
                  value={this.state.description}
                  style={{ minHeight: 100 }}
                />
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={this.handleSubmit}
                  icon
                  labelPosition="left"
                  positive
                  floated="right"
                >
                  <Icon name="add" />
                  Add Product
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  }
}

export default ProductForm;
