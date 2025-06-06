import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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
      <div className="flex-grow grid sm:justify-items-start justify-items-center p-2">
        <Link to="/characters">
          <button>
            <div className="md:flex-row md:items-center lg:flex lg:justify-between lg:items-center blue-background p-2 rounded-xl">
              <img className="pr-2 rounded-3xl mx-auto sm:mx-0" src="../images/pages/home/character.jpg" alt="Characters" width={imageSize} height={imageSize} />
              <h1 className="lg:text-4xl sm:text-xl text-center font-bold text-white hover:text-black mt-2 sm:mt-0">Characters</h1>
            </div>
          </button>
        </Link>
      </div>
      <div className="flex-grow grid justify-items-center mt-3 mb-3 p-2">
        <Link to="/locations">
          <button>
            <div className="md:flex-row md:items-center lg:flex lg:justify-between lg:items-center blue-background p-2 rounded-xl">
              <img className="pr-2 rounded-3xl mx-auto sm:mx-0" src="../images/pages/home/episode.jpg" alt="Locations" width={imageSize} height={imageSize} />
              <h1 className="lg:text-4xl sm:text-xl text-center font-bold text-white hover:text-black mt-2 sm:mt-0">Locations</h1>
            </div>
          </button>
        </Link>
      </div>
      <div className="flex-grow grid sm:justify-items-end justify-items-center p-2">
        <Link to="/episodes">
          <button className='hover:text-black'>
            <div className="md:flex-row md:items-center lg:flex lg:justify-between lg:items-center blue-background p-2 rounded-xl">
              <img className="pr-2 rounded-3xl mx-auto sm:mx-0" src="../images/pages/home/locations.jpg" alt="Episodes" width={imageSize} height={imageSize} />
              <h1 className="lg:text-4xl sm:text-xl text-center font-bold text-white hover:text-black mt-2 sm:mt-0">Episodes</h1>
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}