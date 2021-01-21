import { ProductWrapper } from "../styles";

const Book = (props) => {
  return (
    <ProductWrapper>
      <img src={props.product.image} alt={props.product.name} />
      <p>
        {props.product.name} <br></br>
        <p className="product-price">{props.product.price} BD</p>
      </p>
    </ProductWrapper>
  );
};

export default Book;
