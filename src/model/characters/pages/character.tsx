import { useState, useEffect } from 'react';
import { instance } from '../../../api';
import { Characters } from '../utils/interface/interface';
import { formatedDate } from '../../../utils'; // Asegúrate de que la ruta es correcta

export const Character = () => {
    const [characters, setCharacters] = useState<Characters[]>([]);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await instance.get('/character');
                setCharacters(response.data.results);
            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchCharacters();
    }, []);

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    // episode[]

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
                                <div key={character.id} className="flex bg-black p-2 rounded-xl font-sans">
                                    <div className="flex-none w-56 relative">
                                        <img src={character.image} alt={character.name} className="absolute inset-0 object-coverrounded-xl" />
                                    </div>
                                    <div className="flex-auto p-6">
                                        <div className="flex flex-col mb-6 pb-6 border-b border-slate-200">
                                            <h1 className='green-text font-medium text-xl'>Name: {character.name}</h1>
                                            <p className='green-text font-medium text-md'>Created: {formatedDate(character.created)}</p>
                                            <p className='green-text font-medium text-md'>Status: {character.status}</p>
                                            <p className='green-text font-medium text-md'>Species: {character.species}</p>
                                            <p className='green-text font-medium text-md'>Type: {character.type}</p>
                                            <p className='green-text font-medium text-md'>Gender: {character.gender}</p>
                                            <p className='green-text font-medium text-md'>Origin: {character.origin.name}</p>
                                            <p className='green-text font-medium text-md'>Location: {character.location.name}</p>
                                        </div>
                                        <div className="flex space-x-4 mb-5 text-sm font-medium">
                                            <div className="flex-auto flex space-x-4">
                                                <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white">
                                                    Buy now
                                                </button>
                                                <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white">
                                                    Buy now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}