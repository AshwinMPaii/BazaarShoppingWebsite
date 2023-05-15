import Home from './Containers/home/Home';
import { Routes, Route } from 'react-router-dom';
//import Products from './Components/Product';
//import SignUp from './Components/searchBar/signUp';
//import Cart from './Components/Cartpage/cart';

function App() {
  return (
    <div>
      {/* <SignUp /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='products' element={<Products />} /> */}
        {/* <Route path='/cart' element={<Cart />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
