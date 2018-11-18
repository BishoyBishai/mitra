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
import { IProductFrom, IFormTypeEnum } from "../product-modal";
import PageLoader from "../../layout/loader/loader";
import { checkField, IConditionKey } from "../../../helper/form";
class ProductForm extends React.Component<IProductFrom> {
  productLoaded = false;
  state = {
    title: "",
    description: "",
    price: "",
    image: "",
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
  }
  componentDidUpdate() {
    const { product, formType } = this.props;
    if (formType === IFormTypeEnum.UPDATE && product && !this.productLoaded) {
      this.setState({ ...product });
      this.productLoaded = true;
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleDismiss() {
    this.props.dismiss();
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.formType === IFormTypeEnum.CREATE
      ? this.props.create(this.state)
      : this.props.update(this.state);
  }
  render() {
    const { message, error, formType, product } = this.props;
    const { title, price } = this.state;
    const titleErrors = checkField(
      [
        {
          type: IConditionKey.REQUIRED,
          message: "Title is required",
        },
      ],
      title,
    );
    const priceErrors = checkField(
      [
        {
          type: IConditionKey.REQUIRED,
          message: "Price is required",
        },
        {
          type: IConditionKey.NUMBER,
          message: "Price must to be number",
        },
      ],
      price,
    );
    const formError = [].concat(titleErrors, priceErrors);
    return (formType === IFormTypeEnum.UPDATE && product) ||
      formType === IFormTypeEnum.CREATE ? (
      <div className="product-form">
        <Header as="h2" textAlign="left">
          <Header.Content>
            {formType === IFormTypeEnum.CREATE
              ? "Add New Product"
              : "Update Your Product"}
          </Header.Content>
          <Header.Subheader>
            {formType === IFormTypeEnum.CREATE
              ? " Add New product to your product list"
              : " Update your product list"}
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
        <Item.Group >
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
                  error={titleErrors.length > 0}
                  value={title}
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
                  error={priceErrors.length > 0}
                  name="price"
                  value={price}
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
                  disabled={formError.length > 0}
                  labelPosition="left"
                  positive
                  floated="right"
                >
                  <Icon name="add" />
                  {formType === IFormTypeEnum.CREATE
                    ? "Add Product"
                    : "Update Product"}
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        {formError.length > 0 && (
          <Message negative>
            {formError.map(err => (
              <Message.Content key={err}>{err}</Message.Content>
            ))}
          </Message>
        )}
      </div>
    ) : (
      <PageLoader />
    );
  }
}

export default ProductForm;
