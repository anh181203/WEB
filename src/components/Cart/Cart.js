import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import "./Cart.css";
import { useCart } from "react-use-cart";
const Cart = () => {
  let sum = 0;
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  if (isEmpty) return <h1 className="text-center"> Your cart is Empty</h1>;
 
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="f-c">Shopping Cart</h2>
          <h5>
            {" "}
            Cart ({totalUniqueItems}) loại hàng , total item : ({totalItems})
            sản phẩm
          </h5>
          <Table>
            <thead>
              <tr>
                <th>Product</th>
                {/* <th>picture</th> */}
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  {/* <td>{item.image}</td> */}
                  <td> ${item.price}</td>
                  {/* <td> ${cartTotal}</td> */}

                  <td>{item.quantity}</td>
                  <td>
                    <button
                      className=" btn-cart "
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className=" btn-cart"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className=" btn-cart"
                      onClick={() => removeItem(item.id)}
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tr>tổng :{cartTotal}</tr>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default Cart;
