import { api } from "../lib/axios";

export interface GetLocationPokemonProps {
  results: {
    name: string;
    url: string;
  }[]
}


export interface GetLocationPokemonStateProps {
    name: string;
    url: string;
}

export async function GetLocationPokemon() {
  const { data }: any = await api.get<GetLocationPokemonProps[]>('https://pokeapi.co/api/v2/location')

  return data.results
}