import { useState } from "react";

export const Navbar = () => {
    const [image, setImage] = useState("../images/Rick&Morty-Normal.png");

    return (
        <div className="flex justify-between items-center pt-2 pb-2" style={{ backgroundColor: 'rgb(136, 226, 59)' }}>
            <div className="bg-black w-28 rounded-2xl ml-4">
                <button className="m-2" onMouseEnter={() => setImage("../images/Rick&Morty-Select.png")} onMouseLeave={() => setImage("../images/Rick&Morty-Normal.png")}>
                    <img src={image} alt="Rick&Morty-Logo" width={100} height={100} />
                </button>
            </div>
            <div className="flex flex-col gap-3 md:flex-row lg:flex-row lg:justify-between">
                <div className="mr-4">
                    <button className="bg-black rounded-xl text-base w-24 text-lime-400 md:w-36 md:p-4 md:text-xl lg:w-36 lg:p-4 lg:text-xl">Character</button>
                </div>
                <div className="mr-4">
                    <button className="bg-black rounded-xl text-base w-24 text-lime-400 md:w-36 md:p-4 md:text-xl lg:w-36 lg:p-4 lg:text-xl">Location</button>
                </div>
                <div className="mr-4">
                    <button className="bg-black rounded-xl text-base w-24 text-lime-400 md:w-36 md:p-4 md:text-xl lg:w-36 lg:p-4 lg:text-xl">Episode</button>
                </div>
            </div>
        </div>
    )
}