'use client'

import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoEye, IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface PokemonCardProps {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector( state => !!state.pokemons.favorites[id] )
  const dispatch = useAppDispatch()

  const onToggle = () => {
    dispatch(toggleFavorite(pokemon))
  }

  return (
    <div className="right-0 mx-auto mt-2 w-60">
      <div className="overflow-hidden bg-white rounded shadow-lg">
        <div className="p-6 text-center bg-gray-100">
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={150}
            height={150}
            alt={pokemon.name}
            priority={false}
            className="w-full h-full transition hover:scale-105"
          />
        </div>

        <div className="bg-gray-100">
          <Link
            href={`/dashboard/pokemon/${name}`}
            className="flex w-full px-4 py-2 pb-4 hover:bg-gray-100"
          >
            <h3 className="w-full font-bold leading-none text-center text-gray-800 capitalize ">
              {name}
            </h3>
          </Link>
        </div>

        <div className="grid w-full grid-cols-2 border-b">
          <div
            // href="/dashboard/main"
            onClick={onToggle}
            className="flex items-center justify-center px-4 py-4 cursor-pointer hover:bg-gray-100"
          >
            <div className="text-lg text-red-600">
              { isFavorite ? <IoHeart /> : <IoHeartOutline /> }
              
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium leading-none text-gray-800">
                Favorite
              </p>
            </div>
          </div>
          <Link
            href={`/dashboard/pokemon/${name}`}
            className="flex items-center justify-center px-4 py-4 hover:bg-gray-100"
          >
            <div className="w-5 text-gray-600">
              <IoEye />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium leading-none text-gray-800">
                See
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
