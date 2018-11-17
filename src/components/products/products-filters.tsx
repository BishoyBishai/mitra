import * as React from "react";
import { Menu, Dropdown, Input } from "semantic-ui-react";
const ProductsFilter = () => {
  return (
    <Menu vertical fluid>
      <Menu.Item>
        <Input placeholder="Search..." />
      </Menu.Item>
      <Menu.Item>
        Create New Product
      </Menu.Item>
      <Dropdown item text="Sort By">
        <Dropdown.Menu>
          <Dropdown.Item icon="money" text="Price" />
          <Dropdown.Item icon="time" text="Date" />
          <Dropdown.Item icon="text height" text="Name" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default ProductsFilter;
