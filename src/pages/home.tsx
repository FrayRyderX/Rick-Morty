import { useState, useEffect } from 'react';

export const Home = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const imageSize = windowWidth > 768 ? 300 : 150;

    return (
        <div className="flex flex-col h-[calc(100vh-112px)] bg-black p-5 sm:h-[calc(100vh-76px)]">
            <div className="flex-grow grid justify-items-start p-2">
                <button>
                    <div className="md:flex-row md:items-center lg:flex lg:justify-between lg:items-center blue-background p-2 rounded-xl">
                        <img className="pr-2 rounded-3xl" src="../images/pages/home/character.jpg" alt="Characters" width={imageSize} height={imageSize} />
                        <h1 className="lg:text-4xl sm:text-xl text-center font-bold text-white hover:text-black">Characters</h1>
                    </div>
                </button>
            </div>
            <div className="flex-grow grid justify-items-center mt-3 mb-3 p-2">
                <button>
                    <div className="md:flex-row md:items-center lg:flex lg:justify-between lg:items-center blue-background p-2 rounded-xl">
                        <img className="pr-2 rounded-3xl" src="../images/pages/home/episode.jpg" alt="Locations" width={imageSize} height={imageSize} />
                        <h1 className="lg:text-4xl sm:text-xl text-center font-bold text-white hover:text-black">Locations</h1>
                    </div>
                </button>
            </div>
            <div className="flex-grow grid justify-items-end p-2">
                <button>
                    <div className="md:flex-row md:items-center lg:flex lg:justify-between lg:items-center blue-background p-2 rounded-xl">
                        <img className="pr-2 rounded-3xl" src="../images/pages/home/locations.jpg" alt="Episodes" width={imageSize} height={imageSize} />
                        <h1 className="lg:text-4xl sm:text-xl text-center font-bold text-white hover:text-black">Episodes</h1>
                    </div>
                </button>
            </div>
        </div>
    )
}