import { Button } from "./components/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const [image, setImage] = useState("../images/navbar/Rick&Morty-Normal.png");
    const location = useLocation();
    const { pathname } = location;

    return (
        pathname === '/characters' ?
            <div className="flex justify-between items-center pt-2 pb-2 green-background">
                <div className="bg-black w-28 rounded-2xl ml-4">
                    <Link to="/">
                        <button className="m-2" onMouseEnter={() => setImage("../images/navbar/Rick&Morty-Select.png")} onMouseLeave={() => setImage("../images/navbar/Rick&Morty-Normal.png")}>
                            <img src={image} alt="Rick&Morty-Logo" width={100} height={100} />
                        </button>
                    </Link>
                </div>
                <div className="flex flex-col gap-3 md:flex-row lg:flex-row lg:justify-between">
                    <div className="mr-4">
                        <Link to="/locations">
                            <button className="bg-black rounded-xl text-base w-24 text-lime-400 hover:text-cyan-500 md:w-36 md:p-4 md:text-xl lg:w-36 lg:p-4 lg:text-xl">
                                Locations
                            </button>
                        </Link>
                    </div>
                    <div className="mr-4">
                        <Link to="/episodes">
                            <button className="bg-black rounded-xl text-base w-24 text-lime-400 hover:text-cyan-500 md:w-36 md:p-4 md:text-xl lg:w-36 lg:p-4 lg:text-xl">
                                Episodes
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            : pathname === '/locations' ?
                <div className="flex justify-between items-center pt-2 pb-2 green-background">
                    <div className="bg-black w-28 rounded-2xl ml-4">
                        <Link to="/">
                            <button className="m-2" onMouseEnter={() => setImage("../images/navbar/Rick&Morty-Select.png")} onMouseLeave={() => setImage("../images/navbar/Rick&Morty-Normal.png")}>
                                <img src={image} alt="Rick&Morty-Logo" width={100} height={100} />
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row lg:flex-row lg:justify-between">
                        <div className="mr-4">
                            <Link to="/characters">
                                <button className="bg-black rounded-xl text-base w-24 text-lime-400 hover:text-cyan-500 md:w-36 md:p-4 md:text-xl lg:w-36 lg:p-4 lg:text-xl">
                                    Characters
                                </button>
                            </Link>
                        </div>
                        <div className="mr-4">
                            <Link to="/episodes">
                                <button className="bg-black rounded-xl text-base w-24 text-lime-400 hover:text-cyan-500 md:w-36 md:p-4 md:text-xl lg:w-36 lg:p-4 lg:text-xl">
                                    Episodes
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                : pathname === '/episodes' ?
                    <div className="flex justify-between items-center pt-2 pb-2 green-background">
                        <div className="bg-black w-28 rounded-2xl ml-4">
                            <Link to="/">
                                <button className="m-2" onMouseEnter={() => setImage("../images/navbar/Rick&Morty-Select.png")} onMouseLeave={() => setImage("../images/navbar/Rick&Morty-Normal.png")}>
                                    <img src={image} alt="Rick&Morty-Logo" width={100} height={100} />
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-3 md:flex-row lg:flex-row lg:justify-between">
                            <div className="mr-4">
                                <Link to="/characters">
                                    <button className="bg-black rounded-xl text-base w-24 text-lime-400 hover:text-cyan-500 md:w-36 md:p-4 md:text-xl lg:w-36 lg:p-4 lg:text-xl">
                                        Characters
                                    </button>
                                </Link>
                            </div>
                            <div className="mr-4">
                                <Link to="/locations">
                                    <button className="bg-black rounded-xl text-base w-24 text-lime-400 hover:text-cyan-500 md:w-36 md:p-4 md:text-xl lg:w-36 lg:p-4 lg:text-xl">
                                        Locations
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="flex justify-between items-center pt-2 pb-2 green-background">
                        <div className="bg-black w-28 rounded-2xl ml-4">
                            <Link to="/">
                                <button className="m-2" onMouseEnter={() => setImage("../images/navbar/Rick&Morty-Select.png")} onMouseLeave={() => setImage("../images/navbar/Rick&Morty-Normal.png")}>
                                    <img src={image} alt="Rick&Morty-Logo" width={100} height={100} />
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-3 md:flex-row lg:flex-row lg:justify-between">
                            <div className="mr-4">
                                <Link to="/characters">
                                    <button className="bg-black rounded-xl text-base w-24 text-lime-400 hover:text-cyan-500 md:w-36 md:p-4 md:text-xl lg:w-36 lg:p-4 lg:text-xl">
                                        Characters
                                    </button>
                                </Link>
                            </div>
                            <div className="mr-4">
                                <Link to="/locations">
                                    <button className="bg-black rounded-xl text-base w-24 text-lime-400 hover:text-cyan-500 md:w-36 md:p-4 md:text-xl lg:w-36 lg:p-4 lg:text-xl">
                                        Locations
                                    </button>
                                </Link>
                            </div>
                            <div className="mr-4">
                                <Link to="/episodes">
                                    <button className="bg-black rounded-xl text-base w-24 text-lime-400 hover:text-cyan-500 md:w-36 md:p-4 md:text-xl lg:w-36 lg:p-4 lg:text-xl">
                                        Episodes
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
    )
}