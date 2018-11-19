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
import { validations } from "../utils";
import ValidateField from "../../common/validate-field/validateField";
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
        <Item.Group>
          <Item>
            <Item.Image src={this.state.image || config.defaultImagePath} />
            <Item.Content>
              <Item.Header as="a">
                <ValidateField
                  icon="pencil alternate"
                  size="medium"
                  type="text"
                  name="title"
                  value={title}
                  validate={validations.title}
                  onChange={this.handleChange}
                  placeholder="Product Name"
                />
              </Item.Header>
              <Item.Meta>
                <ValidateField
                  icon="money"
                  size="medium"
                  type="text"
                  name="price"
                  validate={validations.price}
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
      </div>
    ) : (
      <PageLoader />
    );
  }
}

export default ProductForm;
