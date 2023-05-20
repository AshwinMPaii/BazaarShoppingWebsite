import React from "react";
import Head from "../../Components/header/head";
import NavBar from '../../Components/navbar/navbar';
import SearchBar from '../../Components/searchBar/searchbar';
import ProductList from '../../Components/ProductList/product';

function Productpage() {
  return (
    <>
      <div>
        <Head />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <NavBar />
      </div>
      <div>
        <ProductList />
      </div>
    </>
  );
}

export default Productpage;