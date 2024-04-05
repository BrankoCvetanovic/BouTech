import { FC } from "react";

interface Category_arr {
  name: string;
  img: string;
  id: string;
}

const Categories: FC<{ categories: Category_arr[] }> = ({ categories }) => {
  return (
    <ul className="categories">
      {categories.map((category) => {
        return (
          <li key={category.id}>
            <img src={category.img} alt={category.name} />
            <div>{category.name}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
