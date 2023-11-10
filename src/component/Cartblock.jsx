import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { Button, Modal } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs"; // Import Bootstrap icon
import moment from "moment";
import "./Cartblock.css";

const Cartblock = () => {
  const [showModal, setShowModal] = useState(false);
  const token = sessionStorage.getItem("jwtToken");

  const handleBuyNow = () => {
    // Handle buy now logic here
    // For simplicity, just toggling the modal in this example
    setShowModal(true);
  };
  const orderTimestamp = moment().format("MMMM Do YYYY, h:mm:ss a");

  const handleClose = () => setShowModal(false);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  // if(token==null){
  //   return(
  //     <>
  //       <h1>Please Login </h1>
  //     </>
  //   )
  // }
  if (isEmpty) return <h1 className="text-center"> Your Cart is Empty</h1>;
  return (
    <div>
      {token == null ? (
        <h1 className="text-center"> Please Login </h1>
      ) : (
        <section className="py-4 container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h5>
                Cart ({totalUniqueItems}) total Items :({totalItems})
              </h5>
              <table className="table table-light table-hover m-0 mb-2">
                <tbody>
                  {items.map((item, index) => {
                    return (
                      <tr className="card-item" key={index}>
                        <td>
                          <img src={item.img} style={{ height: "3.5rem" }} />
                        </td>
                        <td>{item.title}</td>
                        <td>&#8377; {item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <button
                            className="btn btn-info ms-2"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <button
                            className="btn btn-info ms-2"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                          <button
                            className="btn btn-danger ms-2"
                            onClick={() => removeItem(item.id)}
                          >
                            Remove Item
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="col-auto ms-auto">
              <h2 className="m-2">Total Price:&#8377; {cartTotal}</h2>
            </div>
            <div className="col-auto">
              <button
                className="btn btn-danger m-2"
                onClick={() => emptyCart()}
              >
                Clear Cart
              </button>
              <button className="btn btn-primary m-2" onClick={handleBuyNow}>
                Buy Now
              </button>
              <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header
                  closeButton
                  style={{
                    backgroundColor: "#28a745",
                    color: "#fff",
                    borderBottom: "none",
                  }}
                >
                  <Modal.Title
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <BsCheckCircle
                      style={{
                        color: "white",
                        marginRight: "10px",
                        fontSize: "24px",
                      }}
                    />
                    <span style={{ fontSize: "18px" }}>Order Successful</span>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: "20px", textAlign: "center" }}>
                  <p
                    style={{
                      color: "#28a745",
                      fontWeight: "bold",
                      marginBottom: "15px",
                    }}
                  >
                    Order placed successfully!
                  </p>
                  <p style={{ marginBottom: "10px", color: "#6c757d" }}>
                    Tracking Information: Your order is being processed.
                  </p>
                  <p style={{ color: "#6c757d" }}>
                    Order Time: {orderTimestamp}
                  </p>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cartblock;
