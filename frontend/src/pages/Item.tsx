import { useLoaderData, LoaderFunctionArgs, json } from "react-router-dom";
import { LoaderItem } from "../util/types";
import axios, { AxiosError } from "axios";
export default function ItemPage() {
  const data = useLoaderData() as LoaderItem;

  return (
    <div className="item-page">
      <div className="img-container">
        <img src={`http://localhost:3000/${data.image}`} alt="" />
      </div>
      <div className="info">
        <div className="name">{data.name}</div>
        <div className="price">{data.price}</div>
        <button>Add to Cart</button>
      </div>
      <div className="description">{data.description}</div>
    </div>
  );
}

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  try {
    const response = await axios.get(`http://localhost:3000${url.pathname}`);
    return response.data;
  } catch (err) {
    const errors = err as Error | AxiosError;
    throw json({ message: errors.message }, { status: 500 });
  }
};
