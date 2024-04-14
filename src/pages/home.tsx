export const Home = () => {
    return (
        <div className="flex flex-col h-[calc(100vh-112px)] overflow-x-auto bg-black p-5 sm:h-[calc(100vh-76px)]">
            <div className="flex-grow bg-red-100">
                <h1 className="text-3xl font-bold text-white">Hello world!</h1>
            </div>
            <div className="flex-grow bg-red-100 mt-3 mb-3">
                <h1 className="text-3xl font-bold text-white">Hello world!</h1>
            </div>
            <div className="flex-grow bg-red-100">
                <h1 className="text-3xl font-bold text-white">Hello world!</h1>
            </div>
        </div>
    )
}