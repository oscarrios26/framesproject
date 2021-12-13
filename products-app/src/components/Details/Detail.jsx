import { useParams } from "react-router-dom";

export default function Detail(props) {
  const params = useParams();

  const allNewInfo = props.product.find((la) => {
    return params._id === la._id;
  });

  return (
    <>
      <div>
        <>
          <img src={allNewInfo.imgURL} />
          <h1>{allNewInfo.name}</h1>
          <h2>{allNewInfo.price}</h2>
          <h3>{allNewInfo.description}</h3>
        </>
      </div>
      <div></div>
    </>
  );
}
