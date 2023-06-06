import Home from './Containers/home/Home';
import { Routes, Route } from 'react-router-dom';
import Cartpage from './Containers/cartPage/cartpage';
import Detailpage from './Containers/detailsPage/DetailPage';
import Paymentpage from './Containers/paymentPage/paymentpage';
import Productpage from './Containers/productPage/productpage';
import ProductDetails from './Containers/productDetails/productdetails'
import OrderPage from './Containers/orderPage/orderPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/time1' element={<Cartpage />} />
        <Route path='/time2' element={<Detailpage />}></Route>
        <Route path='/time3' element={<Paymentpage />}></Route>
        <Route path='/time4' element={<OrderPage />}></Route>
        {/* <Route path="/time5" element={<Productpage />} /> */}
        <Route path="/productlist/:categoryId" element={<Productpage />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        {/* <Route path="/cart" element={<CartItems />} /> */}
      </Routes>
    </div>
  );
}

export default App;
