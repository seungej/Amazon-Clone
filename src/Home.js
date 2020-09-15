import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="TCL 40S325 40 Inch 1080p Smart LED Roku TV (2019)"
            price={198.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71YZlXXFktL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
            price={2099.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SX522_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
            price={49.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SX425_.jpg"
          />
          <Product
            id="23445930"
            title="Novogratz Tallulah Memory Foam Futon, Gray Velvet"
            price={509.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91gDMXQG9rL._AC_SY355_.jpg"
          />
          <Product
            id="3254354345"
            title="Hydro Flask Water Bottle - Wide Mouth Straw Lid 2.0-32 oz, Fog"
            price={49.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51ZocuA5PYL._AC_SY355_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="John Green: The Complete Collection Box Set"
            price={36.34}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51XQAeLTPlL._SX371_BO1,204,203,200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
