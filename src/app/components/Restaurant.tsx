'use client'

import dynamic from "next/dynamic";
import Link from "next/link";

function FavoriteButton({restaurant}: {
  restaurant: {
    id: string;
    name: string;
    image: string;
    description: string;
    score: number;
    ratings: number;
  }
}) {
  const isFavourite = window.localStorage.getItem('favorites')?.includes(restaurant.id)

  return (
    <button type="button" className={`text-red-500 text-xl ${isFavourite ? 'opacity-100' : 'opacity-20'}`}>♥</button>
  )
}

// Creamos un componente dinámico para que no se renderice en el servidor
const DynamicFavoriteButton = dynamic(async () => FavoriteButton, { ssr: false });

export default function RestaurantCard({ restaurant }: { restaurant: {
  id: string;
  name: string;
  image: string;
  description: string;
  score: number;
  ratings: number;
}}) {
  return (
    <article key={restaurant.id} className="bg-gray-800 p-6 shadow-md rounded-md">
           <img
              alt={restaurant.name}
              className="mb-3 h-[300px] w-full object-cover"
              src={restaurant.image}
            />
           
            <h2 className="inline-flex gap-2 text-lg font-bold mt-2 text-white  text-center justify-evenly w-full">
              <Link href={`/${restaurant.id}`} prefetch={false} className="hover:underline">
                <span>{restaurant.name}</span>
              </Link>
              
              <small className="inline-flex gap-1 text-xl">
                <span>⭐</span>
                <span>{restaurant.score}</span>
                <span className="font-normal opacity-75">({restaurant.ratings})</span>
              </small>
              <DynamicFavoriteButton restaurant={restaurant} />
            </h2>
            <hr className="mt-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-85 dark:via-neutral-400" />
            <p className="opacity-90 mt-4 font-serif">{restaurant.description}</p>
          </article>
  );
}