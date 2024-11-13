'use client'

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";


export default function FavoritePokemons() {
    const favoritePokemons = useAppSelector( state => state.pokemons.favorites)
    let arrayPokemons = Object.values(favoritePokemons)
    
    const [pokemons, setPokemons] = useState(arrayPokemons)

    useEffect(() => {
      setPokemons(Object.values(favoritePokemons))
    }, [favoritePokemons])


  return (
    <>
        {pokemons.length ? <PokemonGrid pokemons={pokemons}/> :<NoFavorites />
        }
    </>
  )
}


export const NoFavorites = () => {
    return (
      <div className="flex flex-col h-[50vh] items-center justify-center">
        <IoHeartOutline size={100} className="text-gray-500"/>
        <span>There are not favorites</span>
      </div>
    )
  }