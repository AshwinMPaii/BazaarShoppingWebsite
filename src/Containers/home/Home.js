// import React from 'react'
// import SearchBar from "../Components/searchbar";
// import NavBar from "../Components/navbar";
// import Head from "../Components/head";
// import HomeOffer from '../Components/HomeOffer'


// function Home() {
//     return (
//         <div>
//             <div className="container1" style={{ display: 'block', width: '100vw', height: '10vh' }}>
//                 <Head />
//             </div>
//             <div className="container2" style={{ display: 'block', width: '100vw', height: '10vh' }}>
//                 <SearchBar />
//             </div>
//             <div className="container3" style={{ display: 'block', width: '100vw', height: '10vh' }}>
//                 <NavBar />
//             </div>
//             <div className='container4' style={{ display: 'block', width: '100vw', height: '70vh' }}>
//                 <HomeOffer />
//             </div>

//         </div>

//     )
// }

// export default Home
import React from 'react';
// import SearchBar from '../Components/searchBar/searchbar';
// import NavBar from '../Components/navbar/navbar';
// import Head from '../Components/header/head';
// import HomeOffer from '../Components/homeOffer/HomeOffer';
import Head from '../../Components/header/head';
import HomeOffer from '../../Components/homeOffer/HomeOffer';
import NavBar from '../../Components/navbar/navbar';
import SearchBar from '../../Components/searchBar/searchbar';

import "./Home.css"



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
