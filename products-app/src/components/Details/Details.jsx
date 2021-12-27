import { useParams } from "react-router-dom";
import "./Detail.css";

export default function Details(props) {
  const params = useParams();

  const allNewInfo = props.productdetail.find((la) => {
    return params._id === la._id;
  });

  return (
    <>
      <div id="fixedimg">

        <img id="finalinfo" src={allNewInfo.imgURL} alt="gallery" />
        </div>
      <div id="helloor">
        
          
          <h1 className="titledetail">{allNewInfo.name}</h1>
          <h2 className="pricedetail">$ {allNewInfo.price}</h2>
          <h3 id="desdetail">{allNewInfo.description}</h3>
          
      </div>
      
    </>
  );
}
