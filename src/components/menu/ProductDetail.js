import React from "react";
import { Link } from "react-router-dom";
// import user from "../images/user.jpg";

const ProductDetail = (props) => {
  const {  id, image, title,price} = props.location.state.product;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={props.image} alt="img" />
        </div>
        <div className="content">
          <div className="header">{props.title}</div>
          <div className="description">{props.price}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
