// Styling
import { DetailWrapper } from "../styles";
import { Link, Redirect, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { BsPlusSquare } from "react-icons/bs";
import AddButton from "./buttons/AddButton";
import ProductList from "./ProductList";

const ShopDetail = () => {
  const { shopSlug } = useParams();
  const allProducts = useSelector((state) => state.productReducer.products);

  const shop = useSelector((state) =>
    state.shopReducer.shops.find((shop) => shop.slug === shopSlug)
  );

  const products = shop.products.map((product) =>
    allProducts.find((_product) => _product.id === product.id)
  );
  return !shop ? (
    <Redirect to="/shops" />
  ) : (
    <>
      <DetailWrapper>
        <Helmet>
          <title>{shop.name}</title>
          <meta name="description" content={shop.name} />
        </Helmet>
        <h1>{shop.name}</h1>
        <img src={shop.image} alt={shop.name} />
      </DetailWrapper>
      <ProductList products={products} />
      <AddButton shopId={shop.id} />
    </>
  );
};

export default ShopDetail;
