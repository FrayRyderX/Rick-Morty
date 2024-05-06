import { useState, useEffect } from 'react';
import { instance } from '../../../api';
import { Characters } from '../utils/interface/interface';

export const Character = () => {
    const [characters, setCharacters] = useState<Characters[]>([]);
    const [, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await instance.get('/character');
                setCharacters(response.data.results);
            } catch (error: any) {
                setError(error);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <div className="bg-black h-[calc(100vh-76px)] p-5 sm:h-[calc(100vh-76px)]">
            <div className="rounded-3xl blue-background h-[calc(100vh-115px)] sm:h-[calc(100vh-115px)]">
                <div className="flex flex-col">
                    <div className="flex flex-col items-center pb-3 border-b-4 border-black px-4 w-full">
                        <h1 className="text-6xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-8xl">Characters</h1>
                    </div>
                    <div className="p-3">
                        <div className="flex flex-col p-2 gap-2 h-[calc(100vh-215px)] sm:h-[calc(100vh-240px)] overflow-x-scroll">
                            {characters.map(character => (
                                <h1 className="bg-red-50">{character.name}</h1>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}