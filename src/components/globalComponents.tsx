export const screenInformative = (message: string) => {
    return (
        <div className="bg-black h-[calc(100vh-76px)] p-5 sm:h-[calc(100vh-76px)]">
            <div className="rounded-3xl blue-background h-[calc(100vh-115px)] sm:h-[calc(100vh-115px)] flex justify-center items-center">
                <div className="text-black text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl">{message}</div>
            </div>
        </div>
    )
}