import React from "react";
import { connect } from "react-redux";

import { changeActive } from "../store/categories.js";
import { isActive } from "../store/products.js";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const Categories = (props) => {
  return (
    <section>
      <Breadcrumbs>
        {props.category.map((cat) => {
          return (
            <Link
              onClick={() =>
                props.changeActive(cat.name) && props.isActive(cat.name)
              }
              href="#"
            >
              {cat.name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </section>
  );
};

const mapStateToProps = (state) => ({
  category: state.activeCat,
});

const mapDispatchToProps = { changeActive, isActive };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
