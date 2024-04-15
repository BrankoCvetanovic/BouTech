import { useLoaderData, LoaderFunctionArgs, json } from "react-router-dom";
import { LoaderItem } from "../util/types";
import axios, { AxiosError } from "axios";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
export default function ItemPage() {
  const data = useLoaderData() as LoaderItem;

  let realPrice = data.price;

  if (data.discount > 0) {
    realPrice = Math.round(data.price - (data.price / 100) * data.discount);
  }

  return (
    <div className="item-page">
      <div className="img-container">
        <img id="img" src={`http://localhost:3000/${data.image}`} alt="" />
      </div>
      <div className="info">
        <div className="name">{data.name}</div>
        {data.discount > 0 && (
          <>
            <div className="discount">
              -{data.discount}% Saved:
              <strong>{data.price - realPrice} USD</strong>
            </div>
            <div className="prev-price">{data.price},99 USD</div>
          </>
        )}
        <div className="price">{realPrice},99 USD</div>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<ShoppingCartOutlinedIcon />}
        >
          <span className="btn-text">Add To Cart</span>
        </Button>
      </div>
      <div className="description">{data.description}</div>
    </div>
  );
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  try {
    const response = await axios.get(`http://localhost:3000${url.pathname}`);
    return response.data;
  } catch (err) {
    const errors = err as Error | AxiosError;
    throw json({ message: errors.message }, { status: 500 });
  }
};
