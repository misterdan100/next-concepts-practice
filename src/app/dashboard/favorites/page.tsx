import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Favorites - Next'
}

export default async function PokemonPage() {


  return (
    <div className="flex flex-col">

      <span className="my-2 text-5xl font-semibold">Favorite Pokemons <small className="text-red-500">Global State</small></span>

      <PokemonGrid 
        pokemons={[]}
      />
    </div>
  );
}
