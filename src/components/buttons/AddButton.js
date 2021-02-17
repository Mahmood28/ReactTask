import { AddButtonStyled } from "../../styles";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const AddButton = ({ shopId }) => {
  return (
    <Link to={`/shops/${shopId}/products/new`}>
      <AddButtonStyled>
        Add Product <IoIosAddCircleOutline />
      </AddButtonStyled>
    </Link>
  );
};

export default AddButton;
