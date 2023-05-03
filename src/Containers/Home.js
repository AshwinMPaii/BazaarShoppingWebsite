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
import SearchBar from '../Components/searchbar';
import NavBar from '../Components/navbar';
import Head from '../Components/head';
import HomeOffer from '../Components/HomeOffer';

function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ flex: '0 0 7%', minWidth: '100vw' }}>
                <Head />
            </div>
            <div style={{ flex: '0 0 10%', minWidth: '100vw' }}>
                <SearchBar />
            </div>
            <div style={{ flex: '0 0 10%', minWidth: '100vw' }}>
                <NavBar />
            </div>
            <div style={{ flex: '1', minWidth: '100vw' }}>
                <HomeOffer />
            </div>
        </div>
    );
}

export default Home;
