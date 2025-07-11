import { foodItems } from "../../data/foodData";

export async function generateStaticParams() {
  return foodItems.map(i=>({ id: i.id }));
}

export default function FoodDetail({ params }) {
  const food = foodItems.find(i=>i.id === params.id);
  if (!food) throw new Error("NotFound");
  return (
    <div>
      <h1>{food.name}</h1>
      <img style={{width:"100%",maxWidth:600}} src={food.img} alt={food.name}/>
      <p>{food.desc}</p>
      <p><strong>{food.price}</strong></p>
    </div>
  );
}
