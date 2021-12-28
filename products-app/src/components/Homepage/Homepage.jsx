import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

import { useState } from "react";


export default function Homepage(props) {
  
  const [search, setSearch] = useState("");

 


  return (
    <>
     
        <div id="box" >
        
        <input
          id="searchbarcss"
          type="search"
          placeholder="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          />
          
      </div>
      <div className="grid">
        <div className="inner">
        
        {props.product
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
              return false;
            })
            
            .map((prod, _id) => (
            
            
            <div className="hoverEffect" key={_id}>
              <Link id="textdeco" to={`/details/${prod._id}`}>
                <img src={prod.imgURL} alt="pictures" width="350px" />
                <h3 className="titlecolor"  >{prod.name}</h3>
                <h4 className="pricecolor" >$ {prod.price}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>


    
    </>
  );
}

//hey