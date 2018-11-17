import * as React from "react";
import { Icon, Pagination } from "semantic-ui-react";

const ProductsPagination = (props: {
  paginate;
  activePage: number;
  totalPages: number;
}) => (
  <Pagination
    activePage={props.activePage}
    onPageChange={(e, { activePage }) => {
      props.paginate(activePage);
    }}
    ellipsisItem={{
      content: <Icon name="ellipsis horizontal" />,
      icon: true,
    }}
    firstItem={{
      content: <Icon name="angle double left" />,
      icon: true,
    }}
    lastItem={{
      content: <Icon name="angle double right" />,
      icon: true,
    }}
    prevItem={{
      content: <Icon name="angle left" />,
      icon: true,
    }}
    nextItem={{
      content: <Icon name="angle right" />,
      icon: true,
    }}
    totalPages={props.totalPages}
  />
);

export default ProductsPagination;
