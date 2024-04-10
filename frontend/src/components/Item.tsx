import { FC } from "react";
import { Link } from "react-router-dom";

const Item: FC<{
  img: string;
  name: string;
  price: number;
  category: string;
  id: string;
}> = ({ img, price, name, category, id }) => {
  const discountToken = price > 500 ? 0.2 : 0.15;
  const prevPrice = Math.round(price + price * discountToken);
  const discount = prevPrice - price;

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
        <div className="discount">
          -{discountToken * 100}% Saved: <strong>{discount} USD</strong>
        </div>
        <div className="prev-price">{prevPrice},99 USD</div>
        <div className="price">{price},99 USD</div>
      </div>
    </Link>
  );
};

export default Item;
