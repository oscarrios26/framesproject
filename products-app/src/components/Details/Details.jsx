import { useParams } from "react-router-dom";
import "./Detail.css";

export default function Details(props) {
  const params = useParams();

  const update = props.product.find((la) => {
    return params._id === la._id;
  });

  return (
    <>
      <div id="fixedimg">

        <img id="finalinfo" src={update.imgURL} alt="gallery" />
        </div>
      <div id="helloor">
        
          
          <h1 className="titledetail">{update.name}</h1>
          <h2 className="pricedetail">$ {update.price}</h2>
          <h3 id="desdetail">{update.description}</h3>
          
      </div>
      
    </>
  );
}