const BASE_URL = 'https://pokeapi.co/api/v2';
const PAGE_LIMIT = 150;

export const getFirstPageUrl = () => `${BASE_URL}/pokemon?limit=${PAGE_LIMIT}`;

export const getPokemonUrl = (id: string | null) => `${BASE_URL}/pokemon/${id}`;

export const getPokemonImageUrl = (id: string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
