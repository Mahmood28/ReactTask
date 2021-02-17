// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { ProductWrapper } from "../styles";
import { Link } from "react-router-dom";
import UpdateButton from "./buttons/UpdateButton";

const ProductItem = ({ product }) => {
  return (
    <ProductWrapper>
      <Link to={`/products/${product.slug}`}>
        <img alt={product.name} src={product.image} />
      </Link>
      <p>{product.name}</p>
      <p>{product.price} USD</p>
      <DeleteButton productId={product.id} />
      <UpdateButton product={product} />
    </ProductWrapper>
  );
};

export default ProductItem;
