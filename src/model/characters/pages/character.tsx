import { useEffect, useRef } from 'react';
import { CharactersInterface } from '../utils/interface/interface';
import { Card } from '../../../components/card/card';
import { loadingScreen, screenInformative } from '../../../components/globalComponents';
import { useCharactersInfo } from '../../../hooks';
import { handleObserver } from '../../../utils';

export const Character = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCharactersInfo();

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const handleObserverPage = handleObserver(fetchNextPage, hasNextPage, isFetchingNextPage);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserverPage, option);
    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [handleObserverPage]);

  if (isLoading) return loadingScreen('Cargando personajes...');
  if (isError) return screenInformative(error.message);

  return (
    <div className="bg-black h-[calc(100vh-76px)] p-5 overflow-y-auto">
      <div className="rounded-3xl blue-background p-4">
        <h1 className="text-6xl text-center border-b-4 border-black mb-4">Characters</h1>

        {data?.pages.map((page, pageIndex) => (
          <div key={pageIndex} className="flex flex-col gap-2 mb-2">
            {page.results.map((character: CharactersInterface) => (
              <div key={character.id}>{Card(character)}</div>
            ))}
          </div>
        ))}

        <div ref={loaderRef} className="flex flex-col items-center justify-center py-4 gap-2">
          {isFetchingNextPage ? (
            <div className="w-20 h-20 border-8 border-black border-t-transparent rounded-full animate-spin"></div>
          ) : hasNextPage ? (
            <div className="text-black text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl">Desliza para cargar más</div>
          ) : (
            <div className="text-black text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl">No hay más personajes
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
