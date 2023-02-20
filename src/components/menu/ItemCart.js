import {useCart} from "react-use-cart";
import React from 'react'
import Card from 'react-bootstrap/Card';
import { useCallback } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import "./ItemCart.css"
const ItemCart = ({ products, keyword, onReload }) => {
    const {addItem} = useCart();

    // const addItem = ((product)=>{
    //     addItems(product);
    //     alert ("thêm thành công");
    // })
    const testData = useCallback(() => {
            console.log("Posts here", keyword);
          }, [keyword]);
          if (products.length === 0) {
            return (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            );
          }
  return (

    <Row>
       {products.map((product) => {
        return (
          <Card style={{ width: '18rem' }} key={product.id} className="product pro-cart">
     <Card.Img className="cart-img" variant="top" src={product.image} />
     <Card.Body className='card-bd'style={{ textAlign: 'center' }} >
        <Card.Title>
         <Link to={`/products/${product.id}`}> {product.title}</Link>
         </Card.Title>
         <Card.Text>
         $ {product.price}
         </Card.Text>
         <div key={product.id}>

         <Button variant="primary" onClick={()=>addItem(product)} >Add to card</Button>
         </div>
       </Card.Body>
     </Card>
         );
       })}
     </Row>
  )
}

export default ItemCart


