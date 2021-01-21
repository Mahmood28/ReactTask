import "../App.css";
import Books from "./Books";
import products from "../products";

const BookList = () => {
  const bookList = products.map((product) => (
    <Books key={product.id} product={product} />
  ));

  return <center>{bookList}</center>;
};

export default BookList;
