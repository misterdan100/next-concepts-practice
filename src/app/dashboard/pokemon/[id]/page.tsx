import { Pokemon } from "@/pokemons"
import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"

interface PokemonPageProps {
    params: {id: string}
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemon = await fetch(url,{
      cache: 'force-cache'
    }).then( resp => resp.json())
    
    return pokemon

  } catch (error) {
    notFound()    
  }
}

// function to generate 151 pages in build
export async function generateStaticParams() {
  const static151Pokemons = Array.from({ length: 151}).map( (v, i) => `${i + 1}`)
  return static151Pokemons.map( id => ({
    id: id
  }))
}



export async function generateMetadata({params}: PokemonPageProps): Promise<Metadata> {
  try {
    const {id} = params
    const pokemon = await getPokemon(id)

    return {
        title: `#${pokemon.id} - ${pokemon.name}`,
        description: `Pokemon ${pokemon.name} description`
    }
    
  } catch (error) {
    return {
      title: "Pokemon page"
    }
  }
}


export default async function PokemonPage({ params }: PokemonPageProps) {

    const pokemon = await getPokemon(params.id);
    
  
    return (
      <div className="flex flex-col items-center mt-5 text-slate-800">
        <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
          <div className="w-full mt-2 mb-8">
            <h1 className="px-2 text-xl font-bold capitalize text-slate-700">
              #{pokemon.id} {pokemon.name}
            </h1>
            <div className="flex flex-col items-center justify-center">
              <Image
                src={pokemon.sprites.other?.dream_world.front_default ?? ''}
                width={150}
                height={150}
                alt={`Imagen del pokemon ${pokemon.name}`}
                className="mb-5"
              />
  
  
              <div className="flex flex-wrap">
                {
                  pokemon.moves.map(move => (
                    <p key={move.move.name} className="mr-2 capitalize">{move.move.name}</p>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 px-2">
  
            <div className="flex flex-col items-start justify-center px-3 py-4 bg-white rounded-2xl bg-clip-border drop-shadow-lg ">
              <p className="text-sm text-gray-600">Types</p>
              <div className="flex text-base font-medium text-navy-700">
                {
                  pokemon.types.map(type => (
                    <p key={type.slot} className="mr-2 capitalize">{type.type.name}</p>
                  ))
                }
              </div>
            </div>
  
            <div className="flex flex-col items-start justify-center px-3 py-4 bg-white rounded-2xl bg-clip-border drop-shadow-lg ">
              <p className="text-sm text-gray-600">Peso</p>
              <span className="flex text-base font-medium text-navy-700">
                {
                  pokemon.weight
                }
              </span>
            </div>
  
            <div className="flex flex-col justify-center px-3 py-4 bg-white rounded-2xl bg-clip-border drop-shadow-lg">
              <p className="text-sm text-gray-600">Regular Sprites</p>
              <div className="flex justify-center">
  
                <Image
                  src={pokemon.sprites.front_default}
                  width={100}
                  height={100}
                  alt={`sprite ${pokemon.name}`}
                />
  
                <Image
                  src={pokemon.sprites.back_default}
                  width={100}
                  height={100}
                  alt={`sprite ${pokemon.name}`}
                />
  
              </div>
            </div>
  
            <div className="flex flex-col justify-center px-3 py-4 bg-white rounded-2xl bg-clip-border drop-shadow-lg">
              <p className="text-sm text-gray-600">Shiny Sprites</p>
              <div className="flex justify-center">
  
                <Image
                  src={pokemon.sprites.front_shiny}
                  width={100}
                  height={100}
                  alt={`sprite ${pokemon.name}`}
                />
  
                <Image
                  src={pokemon.sprites.back_shiny}
                  width={100}
                  height={100}
                  alt={`sprite ${pokemon.name}`}
                />
  
              </div>
            </div>
  
  
  
          </div>
        </div>
      </div>
    );
  }