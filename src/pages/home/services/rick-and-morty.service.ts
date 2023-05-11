import { User } from '@/models'
import { RickAndMortyAdapter } from '../adapters'

export const rickAndMortyUrl = 'https://rickandmortyapi.com/api/character/2'

export const fetchMorty = async (url: string): Promise<User> => {
  return await fetch(url)
    .then((res) => res.json())
    .then((res) => RickAndMortyAdapter(res))
}
