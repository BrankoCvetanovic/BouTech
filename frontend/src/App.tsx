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
  const [list2, setList2] = useState<ListObj[]>();

  useEffect(() => {
    async function getList() {
      const response = await axios.get(
        `http://localhost:3000/appliances?category=fridge`
      );
      const response2 = await axios.get(
        `http://localhost:3000/it?category=desktop`
      );

      setList(response.data.items);
      setList2(response2.data.items);
    }
    getList();
  }, []);

  return (
    <>
      <ul>
        {list && list?.length > 0
          ? list.map((item) => {
              return (
                <li key={item._id}>
                  <div>
                    <h4>{item.name}</h4>
                    <img src={`http://localhost:3000/${item.image}`}></img>
                  </div>
                </li>
              );
            })
          : null}
      </ul>
      <ul>
        {list2 && list2?.length > 0
          ? list2.map((item) => {
              return (
                <li key={item._id}>
                  <div>
                    <h4>{item.name}</h4>
                    <img src={`http://localhost:3000/${item.image}`}></img>
                  </div>
                </li>
              );
            })
          : null}
      </ul>
    </>
  );
}

export default App;
