import * as React from "react";
import { Button, Icon, Item } from "semantic-ui-react";
import { IProduct } from "../product-modal";
import PageLoader from "../../layout/loader/loader";
import { geCalenderDate } from "../../../helper/date";
import "./style.scss";
import AppModal from "../../layout/modal";
class Product extends React.Component<{
  product: IProduct;
  edit;
  remove;
  currentUser;
}> {
  constructor(props) {
    super(props);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
    this.handelDeleteProduct = this.handelDeleteProduct.bind(this);
  }
  state = {
    openDeleteModal: false,
  };
  openDeleteModal() {
    this.setState({ openDeleteModal: true });
  }
  closeDeleteModal() {
    this.setState({ openDeleteModal: false });
  }
  handelDeleteProduct() {
    this.setState({ openDeleteModal: false });
    this.props.remove(this.props.product);
  }

  render() {
    const { product, currentUser } = this.props;
    return (
      <div>
        {product ? (
          <Item.Group className="product-card">
            <Item>
              <Item.Image src={product.image} />

              <Item.Content>
                <Item.Header as="a">{product.title}</Item.Header>
                <Item.Meta>
                  <span className="cinema">
                    {geCalenderDate(product.date_created)}
                  </span>
                </Item.Meta>
                <Item.Meta>
                  <span className="cinema">{product.price} $</span>
                </Item.Meta>
                <Item.Description>{product.description}</Item.Description>
                {currentUser === product.uid && (
                  <Item.Extra>
                    <Button
                      onClick={() => this.props.edit(product.id)}
                      icon
                      labelPosition="left"
                      positive
                      floated="right"
                    >
                      <Icon name="edit" />
                      Edit
                    </Button>
                    <Button
                      onClick={this.openDeleteModal}
                      icon
                      labelPosition="right"
                      negative
                      floated="right"
                    >
                      <Icon name="delete" />
                      Delete
                    </Button>
                  </Item.Extra>
                )}
              </Item.Content>
            </Item>
          </Item.Group>
        ) : (
          <PageLoader />
        )}
        <AppModal
          header={"Delete Product"}
          open={this.state.openDeleteModal}
          onConfirm={this.handelDeleteProduct}
          onCancel={this.closeDeleteModal}
          body="your product will deleted permanently, Are you sure?"
        />
      </div>
    );
  }
}

export default Product;
