import { FC } from "react";

const Item: FC<{ img: string; name: string; price: number }> = ({
  img,
  price,
  name,
}) => {
  const discountToken = price > 500 ? 0.2 : 0.15;
  const prevPrice = Math.round(price + price * discountToken);
  const discount = prevPrice - price;
  return (
    <div className="item">
      <img src={`http://localhost:3000/${img}`} alt="" />
      <div className="name">{name}</div>
      <div className="discount">
        -{discountToken * 100}% Saved: <strong>{discount} USD</strong>
      </div>
      <div className="prev-price">{prevPrice},99 USD</div>
      <div className="price">{price},99 USD</div>
    </div>
  );
};

export default Item;
