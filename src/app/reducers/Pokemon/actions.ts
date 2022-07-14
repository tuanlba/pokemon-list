import { action } from 'typesafe-actions';
import { ActionTypes, Pokemon } from './types';

export const addPokemons = (pokemons: Pokemon[]) => action(ActionTypes.ADD_POKEMONS, pokemons);
