import * as React from "react";
import { Menu, Dropdown, Input, Checkbox } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { PATHS } from "./../../../router/routes";
import { IProductsFilters } from "../product-modal";
import { getSortedByOption } from "./helper";
import "./style.scss";
const ProductsFilter = (props: IProductsFilters) => {
  const {
    filterBy,
    onlyMe,
    changeFilterBy,
    toggleOnlyMe,
    changeSortedBy,
  } = props;
  return (
    <Menu vertical fluid className="filters-section">
      <Menu.Item>
        <Input
          onChange={e => changeFilterBy(e.target.value)}
          value={filterBy || ""}
          placeholder="Search..."
        />
      </Menu.Item>
      <Menu.Item>
        <NavLink to={PATHS.CREATE_PRODUCT}>Create New Product</NavLink>
      </Menu.Item>
      <Menu.Item>
        <Checkbox
          onChange={() => toggleOnlyMe()}
          checked={onlyMe}
          label="Only my products"
        />
      </Menu.Item>
      <Dropdown
        selection
        placeholder="Sort By"
        fluid
        onChange={e => {
          changeSortedBy((e.target as any).textContent);
        }}
        options={getSortedByOption()}
      />
    </Menu>
  );
};

export default ProductsFilter;
