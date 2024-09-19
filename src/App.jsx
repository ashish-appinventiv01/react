import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from '../src/Components/Redux/store';

import NavBar from './Components/Navbar/Navbar';
import FooterBottom from './Components/Footer/FooterBottom';
import NavText from './Components/NavText/NavText';
import SellingProducts from './Components/SellingProducts/SellingProducts';
import ContextAPI from './Components/Context/ContextAPI/ContextAPI';
import DarkArea from './Components/DarkArea/DarkArea';
import Blocks from './Components/Blocks/Blocks';
import TrendingProducts from './Components/TrendingProducts/TrendingProducts';
import Information from './Components/Informatoin/Information';
import ProductsDetails from './Components/ProductsDetails/ProductsDetails';
import SIngleProducts from './Components/SingleProduct/SIngleProducts';
import Cart from './Components/Cart/Cart';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';



const Layout = () => (
  <div>
    <NavBar />
    <Outlet />
    <FooterBottom />
  </div>
);

const Homepage = () => (
  <div>
    <NavText />
    <DarkArea />
    <SellingProducts />
    <Blocks />
    <Information />
    <TrendingProducts/>
  
  </div>
);

function App() {
  return (
    // <ContextAPI>
   
    //     <Router>
    //       <Routes>
    //         <Route path="/" element={<Layout />}>
    //           <Route index element={<Homepage />} />
    //           <Route path="product" element={<ProductsDetails/>} />
    //           <Route path="product/:id" element={<SIngleProducts />} />
    //           <Route path="Cart" element={<Cart/>} />
    //           <Route path="About" element={<About/>}/>
    //           <Route path="Contact" element={<Contact/>}/>
    //           <Route path="Login" element={<Login/>}/>
    //           {/* <Route path="cart" element={<Cart/>} /> */}
              
    //         </Route>
    //       </Routes>
    //     </Router>
   
    // </ContextAPI>
    <Provider store={store}> 
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="product" element={<ProductsDetails />} />
            <Route path="product/:id" element={<SIngleProducts/>} />
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
   
  );
}

export default App;
