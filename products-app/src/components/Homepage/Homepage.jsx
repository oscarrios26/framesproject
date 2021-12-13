import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import { useState } from "react";

export default function Homepage(props) {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="grid">
        <div className="inner">
          {props.product
            .filter((val) => {
              if (search == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((prod, _id) => (
              <div className="hoverEffect">
                <Link key={prod._id} to={`/details/${prod._id}`}>
                  <img src={prod.imgURL} alt="pictures" width="350px" />
                  <h3>{prod.name}</h3>
                  <h4>${prod.price}</h4>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <div>
        <input
          type="search"
          placeholder="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </>
  );
}
