import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from 'axios'

import { setProducts } from "../redux/actions/productAction";
import Home from "./Home";
const ProductListning = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://dummyjson.com/products")
      .catch((err) => {
        console.log("errr", err);
      });
    dispatch(setProducts(response.data.products));
    console.log('responseee',response.data.products)
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log('product',products)
  return <div>
    <Home/>
  </div>;
};

export default ProductListning;
