import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from 'axios'
import { setProducts } from "../redux/actions/productAction";
import Home from "./Home";

//we have created this component for only for fetching data and store data in redux so we can use anywhere.
const ProductListning = () => {
  //we use redux in this project cause redux is centralize management system. we can accees state from anywhere we want from and change state so we used Redux.
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://dummyjson.com/products")
      .catch((err) => {
        console.log("errr", err);
      });
    //we used dispatch from Dispatch hook of redux for storing data in redux store.we have pass data in action setProducts() function and this fucntion paddd data in reducer and hen reducer pass data in store.  
    dispatch(setProducts(response.data.products));
    console.log('responseee',response.data.products)
  };
  //we call fetchProducts() when component run ones.
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log('product',products)
  return <div>
    <Home/>
  </div>;
};

export default ProductListning;
