import { useCallback } from "react";

export const formattedDate = (created: Date) => {
  const data = created.toLocaleString().split("T");
  return data[0];
};

export const delay = (time: number) => {
  return new Promise(resolve => setTimeout(resolve, time));
};

export const handleObserver = (fetchNextPage: any, hasNextPage: boolean, isFetchingNextPage: boolean) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useCallback(
    async (entries: IntersectionObserverEntry[]) => {
      await delay(150);
      const target = entries[0];
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  )
};