import { ListWrapper } from "../styles";
import Book from "./Books";
import products from "../products";

const BookList = () => {
  const bookList = products.map((product) => (
    <Book key={product.id} product={product} />
  ));

  return <ListWrapper>{bookList}</ListWrapper>;
};

export default BookList;
