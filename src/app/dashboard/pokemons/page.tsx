import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const data: PokemonsResponse = await fetch(url).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col ">

      <span className="my-2 text-5xl font-semibold">Pokemon List <small>Static</small></span>

      <PokemonGrid 
        pokemons={pokemons}
      />
    </div>
  );
}
