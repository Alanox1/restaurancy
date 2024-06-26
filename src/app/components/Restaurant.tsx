import Link from "next/link";
import DynamicFavoriteButton from "./FavoriteButton";
import Restaurant from "@/types";


export default function RestaurantCard({restaurant}: {restaurant: Restaurant}) {

  return (
    <article key={restaurant.id} className="bg-gray-800 p-6 shadow-md rounded-md">
           <img
              alt={restaurant.name}
              className="mb-3 h-[300px] w-full object-cover"
              src={restaurant.image}
            />
           
            <h2 className="inline-flex gap-2 text-lg font-bold mt-2 text-white  text-center justify-evenly items-center w-full">
              <Link href={`/${restaurant.id}`} prefetch={false} className="hover:underline">
                <span>{restaurant.name}</span>
              </Link>
              
              <small className="inline-flex gap-1 text-xl">
                <span>⭐</span>
                <span>{restaurant.score}</span>
                <span className="font-normal opacity-75 ml-3">({restaurant.ratings})</span>
              </small>
              <DynamicFavoriteButton restaurant={restaurant} />
            </h2>
            <hr className="mt-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-85 dark:via-neutral-400" />
            <p className="opacity-90 mt-4 font-sans">{restaurant.description}</p>
          </article>
  );
}