import api from "@/api";
import RestaurantComponent from "@/app/components/Restaurant";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic' // por defecto: auto
export const revalidate = 100 // por defecto: false

export default async function Home({ searchParams }: { searchParams: { q: string } }) {
  const restaurants = await api.search(searchParams.q);

  async function searchAction(formData: FormData) {
    "use server"
  // Redirigir con el valor de query
    redirect(`/?q=${formData.get('query')}`);
  }


  return (
   <section>
            <form action={searchAction} className="inline-flex gap-2 mb-4">
                <input defaultValue={searchParams.q || ''} className="px-6 border-white border-2" name="query" placeholder="La Piazza"/>
                <button type="submit" className="p-2 px-4 bg-white/20">Search</button>
            </form>
            <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {restaurants.length === 0
                ? <p>El restaurante no existe</p>
                : restaurants.map((restaurant) => {
                  return (
                    <RestaurantComponent restaurant={restaurant} key={restaurant.id}/>
                  );
                })
              }
              
            </section>
   </section> 
  );
}