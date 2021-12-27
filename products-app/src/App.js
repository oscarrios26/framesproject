import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Details from "./components/Details/Details";
import Nav from "./components/Nav/Nav";

function App() {
  const [product, setProduct] = useState([]);
 

  useEffect(() => {
    const getProduct = async () => {
      const url = "https://products-api-01.herokuapp.com/api/products";
      const response = await axios.get(url);
      setProduct(response.data);
    };
    getProduct();
  }, []);

  return (
    <>
      <Nav/>
      <>
        <>
          <Routes>
            <Route
              path="/"
              element={
                <Homepage product={product}/>
              }
            />
            <Route
              path={"/details/:_id"}
              element={<Details product={product} />}
            />
          </Routes>
        </>
      </>
    </>
  );
}

export default App;