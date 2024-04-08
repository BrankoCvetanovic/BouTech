import Categories from "../components/Categories";
import { appliances } from "../util/categories";
import axios, { AxiosError } from "axios";
import {
  useLoaderData,
  json,
  LoaderFunctionArgs,
  useSearchParams,
  useNavigation,
} from "react-router-dom";
import Item from "../components/Item";
import { Slider, CircularProgress } from "@mui/material";
import { useState } from "react";
import Sort from "../components/Sort";
import { loadedData } from "../util/types";

export default function AppliancesPage() {
  const data = useLoaderData() as loadedData;
  const [searchParams, setSearchParams] = useSearchParams();

  const [value, setValue] = useState<number[]>([1, 1000]);

  const navigation = useNavigation();

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const handleChangeCommited = () => {
    const paramValue = `${value[0]}-${value[1]}`;
    if (!searchParams.toString()) {
      setSearchParams(`?${new URLSearchParams({ price: paramValue })}`);
    } else if (searchParams.has("price")) {
      const regex = /(?<=price=)[^&\s]+/;

      setSearchParams(`?${searchParams.toString().replace(regex, paramValue)}`);
    } else {
      setSearchParams(
        `?${searchParams.toString()}&${new URLSearchParams({
          price: paramValue,
        })}`
      );
    }
  };
  return (
    <div className="page">
      <div className="title">Appliances</div>
      <Categories categories={appliances} />
      <div className="bar">
        <div className="slider">
          <div>Price:</div>
          <Slider
            getAriaLabel={() => "Price range"}
            valueLabelDisplay="auto"
            min={1}
            max={1000}
            onChange={handleChange}
            onChangeCommitted={handleChangeCommited}
            value={value}
            size="small"
            color="warning"
            disableSwap
          />
        </div>
        <div className="sort">
          <Sort
            key={searchParams.toString()}
            sortingValues={[
              { name: "Newest", value: "createdAt" },
              { name: "Lowest Price", value: "price" },
              { name: "Highest Price", value: "-price" },
            ]}
          />
        </div>
      </div>

      <ul className="item-container">
        {navigation.state === "loading" && (
          <div className="pending">
            <CircularProgress size={50} />
          </div>
        )}
        {navigation.state !== "loading" &&
          data &&
          data.items.map((item) => (
            <li key={item._id}>
              <Item img={item.image} price={item.price} name={item.name} />
            </li>
          ))}
      </ul>
    </div>
  );
}
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const sortBy = new URL(request.url).searchParams.toString();

  let searchUrl = "http://localhost:3000/appliances";
  if (sortBy) {
    searchUrl = `http://localhost:3000/appliances?${sortBy}`;
  }
  try {
    const response = await axios.get(searchUrl);
    return response.data;
  } catch (err) {
    const errors = err as Error | AxiosError;
    throw json({ message: errors.message }, { status: 500 });
  }
};
