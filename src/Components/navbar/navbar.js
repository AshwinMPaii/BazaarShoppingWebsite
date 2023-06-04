// import React from "react";
// import "./navbar.css";
// import { FaLaptop } from "react-icons/fa";
// // import "@fortawesome/fontawesome-free/css/all.css";
// import { FaShoppingBasket, FaChevronDown, FaBicycle, FaTv, FaTshirt } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from 'react-router-dom';






// function NavBar() {

//   return (
//     <div class="navbar">
//       <ul className="nav-links">

//         <li className="dropdown1">
//           <a href="#" class="category">
//             Categories <FaChevronDown />
//           </a>
//           <div className="dropdown-content">
//             <Link to="/time5">
//               <a href="#" class="category">
//                 <FaTshirt /> Fashion
//               </a>
//             </Link>
//             <a href="#" class="category">
//               <FaBicycle /> Bikes
//             </a>
//             <a href="#" class="category">
//               <FaShoppingBasket /> Groceries
//             </a>
//             <a href="#" class="category">
//               <FaTv /> Electronics
//             </a>
//           </div>
//         </li>
//       </ul>


//       <div class="nav-links">
//         <a href="#" class="option">
//           Home
//         </a>
//         <a href="#" class="option">
//           Mega Menu
//         </a>
//         <a href="#" class="option">
//           Full Screen Menu
//         </a>
//         <a href="#" class="option">
//           Pages
//         </a>
//         <a href="#" class="option">
//           User Account
//         </a>
//         <a href="#" class="option">
//           Vendror Account
//         </a>
//       </div>
//     </div>

//   );

// }

// export default NavBar;
import React from "react";
import "./navbar.css";
import { FaLaptop } from "react-icons/fa";
// import "@fortawesome/fontawesome-free/css/all.css";
import { FaShoppingBasket, FaChevronDown, FaBicycle, FaTv, FaTshirt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';






function NavBar() {

  return (
    <div className="navbar">
      <ul className="nav-links">
        <li className="dropdown1">
          <Link to="/" className="category">
            Categories <FaChevronDown />
          </Link>
          <div className="dropdown-content">
            <Link to="/productlist/3" className="category">
              <FaTshirt /> Fashion
            </Link>
            <Link to="/productlist/1" className="category">
              <FaBicycle /> Bikes
            </Link>
            <Link to="/productlist/4" className="category">
              <FaShoppingBasket /> Groceries
            </Link>
            <Link to="/productlist/2" className="category">
              <FaTv /> Electronics
            </Link>
          </div>
        </li>
      </ul>

      <div class="nav-links">
        <a href="#" class="option">
          Home
        </a>
        <a href="#" class="option">
          Mega Menu
        </a>
        <a href="#" class="option">
          Full Screen Menu
        </a>
        <a href="#" class="option">
          Pages
        </a>
        <a href="#" class="option">
          User Account
        </a>
        <a href="#" class="option">
          Vendror Account
        </a>
      </div>
    </div>
  );

}

export default NavBar;