import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  interface ListObj {
    name: String;
    image: String;
    price: Number;
    description: String;
    category: String;
    createdAt: Date;
    _id: any;
    __v: number;
  }

  const [list, setList] = useState<ListObj[]>();

  useEffect(() => {
    async function getList() {
      const response = await axios.get("http://localhost:3000/appliance");
      setList(response.data.appliances);
    }
    getList();
  }, []);

  return (
    <ul>
      {list && list?.length > 0
        ? list.map((item) => {
            return <li key={item._id}>{item.name}</li>;
          })
        : null}
    </ul>
  );
}

export default App;
