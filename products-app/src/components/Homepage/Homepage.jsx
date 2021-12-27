import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import { useState } from "react";

export default function Homepage(props) {
  const [search, setSearch] = useState([]);


  const handleSearch = (event) => {
    const results = props.product.filter((pro) =>
      pro.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearch(results);
    
  };

  const handleSubmit = (event) => event.preventDefault();

  return (
    <>
        <div id="box" >
        <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          id="searchbarcss"
            type="text"
            name="Search"
          placeholder="search"
          value={search}
          onChange={(e) => handleSearch(e)}
          />
          </form>
      </div>
      <div className="grid">
        
        {props.product.map((prod, _id) => (
              
          <div className="hoverEffect" key={_id}>
            <Link id="textdeco" to={`/details/${prod._id}`}>
              <img src={prod.imgURL} alt="pictures" width="350px" />
              <h3 className="titlecolor"  >{prod.name}</h3>
              <h4 className="pricecolor" >$ {prod.price}</h4>
            </Link>
          </div>
        ))}
        </div>
      


    
    </>
  );
}