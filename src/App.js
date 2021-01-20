import products from "./products";
import "./App.css";

function App() {
  const productsList = products.map((product) => (
    <div className="books">
      <img src={product.image} alt={product.name} height="300" />
      <p>
        {product.name} <br></br> {product.price} BD
      </p>
    </div>
  ));
  return (
    <div>
      <center>
        <h1> Bed, Bookstore, and Beyond</h1>
        <h2> The Best Place to Nap and Read </h2>
        <img src="bookstore.jfif" />
        <br></br>

        {/* products  */}
        <grid>{productsList}</grid>
      </center>
    </div>
  );
}

export default App;
