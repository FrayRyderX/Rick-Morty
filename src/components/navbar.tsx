import { useState } from "react";

// #97ce4c	(151,206,76)

export const Navbar = () => {
    const [image, setImage] = useState("../images/Rick&Morty-Normal.png");

    return (
        <div className="flex justify-between items-center pt-2 pb-2" style={{ backgroundColor: 'rgb(151,206,76)' }}>
            <div className="ml-4 bg-black rounded-2xl">
                <button className="m-2" onMouseEnter={() => setImage("../images/Rick&Morty-Select.png")} onMouseLeave={() => setImage("../images/Rick&Morty-Normal.png")}>
                    <img src={image} alt="Rick&Morty-Logo" width={100} height={100} />
                </button>
            </div>
            <div className="mr-4">
                <button className="bg-red-100 rounded-xl">Episode</button>
                <button className="bg-red-100 rounded-xl">Location</button>
                <button className="bg-red-100 rounded-xl">Episode</button>
            </div>
        </div>
    )
}