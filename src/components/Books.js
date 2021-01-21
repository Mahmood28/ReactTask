const Books = (props) => {
  return (
    <div className="books">
      <img src={props.product.image} alt={props.product.name} height="300" />
      <p>
        {props.product.name} <br></br> {props.product.price} BD
      </p>
    </div>
  );
};

export default Books;
