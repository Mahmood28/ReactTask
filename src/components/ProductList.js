// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import AddButton from "./buttons/AddButton";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const ProductList = ({ products }) => {
  const [query, setQuery] = useState("");
  const loading = useSelector((state) => state.productReducer.loading);

  if (loading)
    return (
      <ListWrapper>
        <Loading />
      </ListWrapper>
    );

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </div>
  );
};

export default ProductList;
