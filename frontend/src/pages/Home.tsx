import Slider from "../components/Slider";
import axios, { AxiosError } from "axios";
import {
  useLoaderData,
  json,
  LoaderFunctionArgs,
  useNavigation,
} from "react-router-dom";
import { loadedData } from "../util/types";
import ItemsContainer from "../components/ItemsContainer";
import HomeCategories from "../components/HomeCategories";

export default function HomePage() {
  const data = useLoaderData() as loadedData;
  console.log(data);
  const navigation = useNavigation();
  return (
    <div className="home-page">
      <Slider />
      <HomeCategories />
      <div className="title">Recommended:</div>
      <ItemsContainer navigation={navigation.state} items={data.items} />
    </div>
  );
}
export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const response = await axios.get("http://localhost:3000/recommended");
    return response.data;
  } catch (err) {
    const errors = err as Error | AxiosError;
    throw json({ message: errors.message }, { status: 500 });
  }
};
