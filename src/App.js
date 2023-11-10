import Homepage from "./component/Homepage/homepage";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "react-use-cart";
import Cartblock from "./component/Cartblock";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import "./App.css";
import Footer from "./component/Footer";
const clientId =
  "943264069242-a96qq5kild8hahup8lfufaeoqq53t95i.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        client: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className="App">
      <CartProvider>
        <Homepage />
        <Cartblock />
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
