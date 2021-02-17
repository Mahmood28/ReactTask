import { useState } from "react";
import { createProduct, updateProduct } from "../store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Title } from "../styles";

const ProductForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { productSlug, shopId } = useParams();
  const oldProduct = useSelector((state) => state.productReducer.products).find(
    (product) => product.slug === productSlug
  );
  console.log(shopId);
  const [product, setProduct] = useState(
    oldProduct ?? {
      shopId: shopId,
      name: "",
      price: 0,
      image: "",
    }
  );

  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: [event.target.value],
    });
  };

  const handleImage = (event) => {
    setProduct({
      ...product,
      image: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(oldProduct ? updateProduct(product) : createProduct(product));
    history.push("/products");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title> {oldProduct ? "Update Book" : "New Book"} </Title>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          className="form-control"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Image</label>
        <input
          type="file"
          className="form-control"
          name="image"
          onChange={handleImage}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {oldProduct ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default ProductForm;
