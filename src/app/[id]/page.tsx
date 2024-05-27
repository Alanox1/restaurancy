import api from "@/api";
import RestaurantComponent from "@/app/components/Restaurant";
import Link from "next/link";


export async function generateMetadata({params: {id}}: {params: {id: string}}) {
  const restaurant = await api.fetch(id);

  return {
    title: `${restaurant.name} - Restaurancy`,
    description: restaurant.description,
    // openGraph : {
    //   images : [{url : restaurant.image}]
    // }
  };
}


export async function generateStaticParams() {
  const restaurants = await api.list();

  return restaurants.map((restaurant) => ({
    id: restaurant.id,
  }));
}

export default async function RestaurantPage({ params: { id } }: { params: { id: string } }) {
  const restaurant = await api.fetch(id);
 
  return (
    <section className="w-3/4 m-auto">
      <RestaurantComponent restaurant={restaurant} />
      <div className="flex justify-center items-center ">
          <Link href={`/`}  className="bg-white text-black text-center py-3 px-6 mt-8 font-bold ">Volver a inicio</Link>
      </div>
    </section>
    
  );
}


































