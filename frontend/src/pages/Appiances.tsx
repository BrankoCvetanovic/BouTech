import Categories from "../components/Categories";
import appliances from "../util/categories";

export default function AppliancesPage() {
  console.log(appliances);
  return (
    <div className="page">
      <div className="title">Appliances</div>
      <Categories categories={appliances} />
      <div className="bar">
        <div>Price</div>
        <div>Sort</div>
      </div>
    </div>
  );
}
