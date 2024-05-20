import api from "@/api";
import RestaurantComponent from "@/components/Restaurant";
import Link from "next/link";



// TODOS: hacer funcionar la imagen con openGraph
//        hacer la funcion de fetch para que traiga un solo objeto de google sheet

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
    <section>
      <RestaurantComponent restaurant={restaurant} />
      <Link href={`/`} >
          <p className="bg-red-500 text-center p-4 mt-8 ">Volver a inicio</p>
      </Link>
    </section>
    
  );
}


































