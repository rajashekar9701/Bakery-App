import React from "react";
import Cart from "../Cart";
import data from "../data";
import Login from "../login/login";
import Logout from "../login/logout";
import "./homepage.css";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "react-use-cart";
const Homepage = (props) => {
  const { totalItems } = useCart();
  var name = sessionStorage.getItem("name");
  console.log(name);
  console.log(data.productData);
  return (
    <div className="page-container">
      <div className="header-container">
        <h1 className="text-center">RK's Bakery</h1>
        <h1 className="h-name">Welcome {name}!</h1>
        <div className="icon-cont">
          <button className="btn-cart-icon btn btn-info">
            <span className="cart-icon">
              <FaShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="item-count">{totalItems}</span>
              )}
            </span>
          </button>
          <h1>
            {sessionStorage.getItem("jwtToken") == null && <Login />}
            {sessionStorage.getItem("jwtToken") != null && <Logout />}
          </h1>
        </div>
      </div>
      <section className="py-4 container">
        <div className="row justify-container-center">
          {data.productData.map((item, index) => {
            return (
              <Cart
                key={index}
                img={item.img}
                title={item.title}
                item={item}
                price={item.price}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
