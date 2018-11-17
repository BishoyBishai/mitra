import { connect } from "react-redux";
import { IStore } from "../../../bin/store-modal";
import ProductsFilter from "./products-filters";
import {
  changeFilterBy,
  toggleOnlyMe,
  changeSortedBy,
} from "../product-actions/product-layout";
const mapDispatchToProps = dispatch => ({
  changeFilterBy: val => dispatch(changeFilterBy(val)),
  toggleOnlyMe: () => dispatch(toggleOnlyMe()),
  changeSortedBy: key => dispatch(changeSortedBy(key)),
});

const mapStateToProps = (state: IStore) => {
  const { filters } = state.products;
  return {
    filterBy: filters.filterByKeyWord,
    onlyMe: filters.onlyMe,
    sortedBy: filters.sortedBy,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsFilter);
