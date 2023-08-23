import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CustomizedOffcanvas from "../../components/CustomizedOffcanvas/CustomizedOffcanvas";
import Product from "../../components/Product/Product";

function Homepage() {
  const [products, setProducts] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  return (
    <div>
      <Header></Header>
      <div>
        <div className="products">
          This is the list of products
          <Product></Product>
        </div>
        {/* Phần cart ở offcanvas */}
        <CustomizedOffcanvas openCart={openCart}></CustomizedOffcanvas>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Homepage;
