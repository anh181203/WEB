
import React from 'react'
import ItemCart from './ItemCart'
import axios from "axios";
import { useState, useEffect } from "react";
// import Cart from './Cart/Cart';
import Slide from "./Slide";

const Main = () => {
  // const { addItem } = useCart();
    const [keyword, setKeyword] = useState(null);
  const [data, setData] = useState([]);

 
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const res = await axios.get("http://localhost:3009/products");
    if (res.status === 200) {
      setData(res.data);
      console.log(res);
      console.log(data,"data");

    }
  }
  
  if(data.length==0) {
    return <h1>Loading</h1>
  }
  return (
    <>
        <Slide/>
      <h1 className='text-center mt-3'>ALL Item</h1>
      <section className='py-4 container'>
        <div className="row justify-content-center ">
        <ItemCart products={data}/>
        </div>
      </section>
    </>
  )
}

export default Main
