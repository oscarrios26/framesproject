import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Detail from "./components/Details/Detail";

function App() {
  const [product, setProduct] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

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
      <Link to="/">ProductsApp</Link>
      <>
        <>
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  product={product}
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                />
              }
            />
            <Route
              path={"/details/:_id"}
              element={<Detail product={product} />}
            />
          </Routes>
        </>
      </>
    </>
  );
}

export default App;
