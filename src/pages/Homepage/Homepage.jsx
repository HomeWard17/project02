import React, { useState } from "react";
import "./Homepage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Product from "../../components/Product/Product";
function Homepage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "BLACKPINK THE GAME OST MERCH - BLACK EDITION",
      picture:
        "https://shop.blackpinkmusic.com/cdn/shop/files/BPTG_OST_thumbnail_BLACK_1000px.png?v=1691171818",
      price: 25,
    },
    {
      id: 2,
      picture:
        "https://shop.blackpinkmusic.com/cdn/shop/files/BPTG_OST_thumbnail_PINK_1000px.png?v=1691171832",
      name: "BLACKPINK THE GAME OST MERCH - PINK EDITION",
      price: 25,
    },
    {
      id: 3,
      picture:
        "https://shop.blackpinkmusic.com/cdn/shop/files/BP_ICETEE_FRONT.png?v=1689185570",
      name: "ICE CREAM TIE DYE T-SHIRT",
      price: 25,
    },
    {
      id: 4,
      picture:
        "https://shop.blackpinkmusic.com/cdn/shop/files/BP_ICECREW_FRONT.png?v=1689185773",
      name: "ICE CREAM TIE DYE CREWNECK",
      price: 80,
    },
    {
      id: 5,
      picture:
        "https://shop.blackpinkmusic.com/cdn/shop/files/BP_SILTEE_FRONT.png?v=1689959548",
      name: "BLACKPINK SILHOUETTE BLACK T-SHIRT",
      price: 45,
    },
    {
      id: 6,
      picture:
        "https://shop.blackpinkmusic.com/cdn/shop/products/hoodiefront.png?v=1681415927",
      name: "BLACKPINK 2023 ATHELTIC PUFF PRINT PULLOVER HOODIE",
      price: 80,
    },
    {
      id: 7,
      picture:
        "https://shop.blackpinkmusic.com/cdn/shop/files/BP_SWEATS_FRONT.png?v=1689959504",
      name: "BLACKPINK ATHELETIC PINK PUFF PRINT SWEATPANTS",
      price: 80,
    },
    {
      id: 8,
      picture:
        "https://shop.blackpinkmusic.com/cdn/shop/products/bralette.png?v=1681415983",
      name: "BLACKPINK EMBROIDERED LOGO BRALETTE",
      price: 45,
    },
  ]);
  return (
    <div className="homepage">
      <Header></Header>
      <div className="body">
        <div className="slideshow"></div>
        <div className="product-list">
          {products.map((e, i) => (
            <Product
              id={e.id}
              picture={e.picture}
              name={e.name}
              price={e.price}
            ></Product>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
