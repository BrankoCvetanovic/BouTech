import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Item: FC<{
  img: string;
  name: string;
  price: number;
  category: string;
  id: string;
  discount: number;
}> = ({ img, price, name, category, id, discount }) => {
  let realPrice = price;

  if (discount > 0) {
    realPrice = Math.round(price - (price / 100) * discount);
  }

  let urlCategory = "/appliances";
  if (category === "samsung-tv" || category === "sony" || category === "lg")
    urlCategory = "/tvs";
  if (category === "laptop" || category === "desktop") urlCategory = "/it";
  if (category === "samsung" || category === "apple" || category === "xiaomi")
    urlCategory = "/phones";

  return (
    <Link to={`${urlCategory}/${id}`} className="item">
      <img src={`http://localhost:3000/${img}`} alt="" />
      <div className="info">
        <div className="name">{name}</div>
        {discount > 0 && (
          <>
            <div className="discount">
              -{discount}% Saved: <strong>{price - realPrice} USD</strong>
            </div>
            <div className="prev-price">{price},99 USD</div>
          </>
        )}
        <div className="price">{realPrice},99 USD</div>
      </div>
      <div className="control">
        <Button variant="contained" color="inherit" size="small">
          <ShoppingCartOutlinedIcon />
        </Button>
      </div>
    </Link>
  );
};

export default Item;
