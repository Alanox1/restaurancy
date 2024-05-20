import api from "@/api";
import RestaurantComponent from "@/components/Restaurant";


export default async function Home() {
  const restaurants = await api.list();
//  console.log(restaurants)
  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant) => {
        return (
          <RestaurantComponent restaurant={restaurant} key={restaurant.id}/>
        );
      })}
    </section>
  );
}