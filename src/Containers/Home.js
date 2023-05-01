import react from "react";
import SearchBar from "../Components/searchbar";
import NavBar from "../Components/navbar";
import Head from "../Components/head";




function Home(){
    return (
      <>
        <div className="1st container">
          <Head/>
        </div>
        <div className="container2">
          <SearchBar/>  
        </div>
        <div className="container3">
          <NavBar/>
        </div>
      </>
    );
}

export default Home;