import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../services";

export const useCharactersInfo = () => {
  const response = useInfiniteQuery({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    refetchOnWindowFocus: false,
  });

  return response;
}