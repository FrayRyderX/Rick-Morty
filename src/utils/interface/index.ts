import { CharactersInterface } from "../../model/characters/utils/interface/interface";

export type PageResponse = {
  results: CharactersInterface[];
  info: {
    next: string | null;
  };
};