export const screenInformative = (message: string) => {
	return (
		<div className="bg-black h-[calc(100vh-76px)] p-5 sm:h-[calc(100vh-76px)]">
			<div className="rounded-3xl blue-background h-[calc(100vh-115px)] sm:h-[calc(100vh-115px)] flex justify-center items-center">
				<div className="text-black text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl">{message}</div>
			</div>
		</div>
	)
};

export const loadingScreen = () => {
	return (
		<div className="bg-black h-[calc(100vh-76px)] p-5 sm:h-[calc(100vh-76px)]">
			<div className="rounded-3xl blue-background h-[calc(100vh-115px)] sm:h-[calc(100vh-115px)] flex flex-col justify-center items-center gap-6">
				<div className="w-20 h-20 border-8 border-black border-t-transparent rounded-full animate-spin"></div>
				<div className="text-black text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl">Cargando personajes...</div>
			</div>
		</div>
	)
};