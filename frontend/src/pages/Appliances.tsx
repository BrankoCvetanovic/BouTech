import Categories from "../components/Categories";
import appliances from "../util/categories";
import axios from "axios";
import { useLoaderData, json, LoaderFunctionArgs } from "react-router-dom";
import Item from "../components/Item";
import { Slider } from "@mui/material";
import { useState } from "react";

export default function AppliancesPage() {
  interface LoaderItem {
    _id: string;
    category: string;
    createdAt: string;
    image: string;
    description: string;
    name: string;
    price: number;
    __v: number;
  }

  interface loadedData {
    items: LoaderItem[];
    count: number;
  }

  const data = useLoaderData() as loadedData;
  const [value, setValue] = useState<number[]>([39, 1000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    console.log(event);
  };

  return (
    <div className="page">
      <div className="title">Appliances</div>
      <Categories categories={appliances} />
      <div className="bar">
        <div className="slider">
          <div>Price</div>
          <Slider
            getAriaLabel={() => "Price range"}
            valueLabelDisplay="auto"
            min={39}
            max={1000}
            onChange={handleChange}
            value={value}
            size="small"
          />
        </div>
        <div>Sort</div>
      </div>
      <ul className="item-container">
        {data
          ? data.items.map((item) => (
              <li id={item._id}>
                <Item img={item.image} price={item.price} name={item.name} />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const sortBy = new URL(request.url).searchParams.get("category");
  let searchUrl = "http://localhost:3000/appliances";
  if (sortBy) {
    searchUrl = `http://localhost:3000/appliances?category=${sortBy}`;
  }

  const response = await axios.get(searchUrl);
  if (response.status !== 200) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }
  return response.data;
};
