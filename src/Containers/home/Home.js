import React from 'react';
import Head from '../../Components/header/head';
import HomeOffer from '../../Components/homeOffer/HomeOffer';
import NavBar from '../../Components/navbar/navbar';
import SearchBar from '../../Components/searchBar/searchbar';



function Home() {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
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
          <HomeOffer />
        </div>
      </div>

    </>
  );
}

export default Home;
