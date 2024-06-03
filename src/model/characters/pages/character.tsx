import { useState, useEffect } from 'react';
import { instance } from '../../../api';
import { CharactersInterface } from '../utils/interface/interface';
import { Card } from '../components/card/card';

export const Character = () => {
    const [characters, setCharacters] = useState<CharactersInterface[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        setLoading(true);
        const fetchCharacters = async () => {
            try {
                const response = await instance.get('/charactera');
                setCharacters(response.data.results);
            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchCharacters();
        setLoading(false);
    }, []);

    if (error) {
        return (
            <div className="bg-black h-[calc(100vh-76px)] p-5 sm:h-[calc(100vh-76px)]">
                <div className="rounded-3xl blue-background h-[calc(100vh-115px)] sm:h-[calc(100vh-115px)] flex justify-center items-center">
                    <div className="text-black text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl">{error}</div>
                </div>
            </div>
        )
    }

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
                                Card(character)
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}