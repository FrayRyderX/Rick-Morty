import { QueryFunctionContext } from "@tanstack/react-query";
import { CharactersInterface } from "../model/characters/utils/interface/interface";
import { instance } from "../api";
import { delay } from "../utils";
import { PageResponse } from "../utils/interface";

export const fetchCharacters = async ({ pageParam }: QueryFunctionContext): Promise<{results: CharactersInterface[];nextPage: number | null;}> => {
  let page = typeof pageParam === "number" ? pageParam : 1;
  await delay(1000);
  const res = await instance.get<PageResponse>(`/character?page=${page}`);

  return {
    results: res.data.results,
    nextPage: res.data.info?.next ? page += 1 : null,
  };
};