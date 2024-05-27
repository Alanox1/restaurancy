"use client"
import dynamic from "next/dynamic";
import Restaurant from "@/types";

import { useState, useEffect } from "react";


function FavoriteButton({ restaurant }: { restaurant: Restaurant }) {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    // Al cargar la página, comprobar si el restaurante está en favoritos
    // Corrige el tipo de datos para favorites
    const favoritesString = window.localStorage.getItem("favorites");
    const favorites = (favoritesString ? JSON.parse(favoritesString) : []) as string[];

    setIsFavourite(favorites.includes(restaurant.id));
  }, [restaurant.id]);

  const toggleFavorite = () => {
    // Alternar el estado de favoritos y actualizar el almacenamiento local
    const favorites = JSON.parse(window.localStorage.getItem("favorites") || "[]") as string[];

    const updatedFavorites = isFavourite
      ? favorites.filter((id: string) => id !== restaurant.id)
      : [...favorites, restaurant.id];
    window.localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavourite(!isFavourite);
  };

  return (
    <button type="button" className={`text-red-500 text-3xl text-center p-0 m-0 ${isFavourite ? "opacity-100" : "opacity-20"}`} onClick={toggleFavorite}>
      ♥
    </button>
  );
}

const DynamicFavoriteButton = dynamic(async () => FavoriteButton, { ssr: false });

export default DynamicFavoriteButton