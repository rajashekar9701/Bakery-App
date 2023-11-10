import React from "react";
import { useCart } from "react-use-cart";
import swal from "sweetalert";
const Cart = (props) => {
  const { addItem } = useCart();
  const handleAddToCart = () => {
    const token = sessionStorage.getItem("jwtToken");
    if (token === null) {
      // Show pop-up if token is null
      swal({
        title: "Please log in!",
        text: "You need to log in to add items to your cart.",
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else {
      addItem(props.item);
      console.log("Item added to cart");
    }
  };
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div
        className="card p-0 overflow-hidden h-100 shadow"
        style={{ maxHeight: "400px" }}
      >
        <img
          src={props.img}
          className="card-img-top img-fluid"
          style={{ height: "100%", objectFit: "cover" }}
          alt={props.title}
        />
        <div className="card-body text-center" style={{ flex: 1 }}>
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-title">Price : &#8377; {props.price}</h5>

          <button className="btn btn-success" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
