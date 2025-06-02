import { CharactersInterface } from "../../model/characters/utils/interface/interface";
import { formattedDate } from "../../utils";

export const Card = (character: CharactersInterface) => {
  return (
    <div key={character.id} className="flex flex-col md:flex-row bg-black p-2 rounded-xl font-sans mb-4">
      <div className="flex-none w-full md:w-56 relative h-56 md:h-auto">
        <img src={character.image} alt={character.name} className="absolute md:relative inset-0 w-full h-full object-cover rounded-xl border-image-card" />
      </div>
      <div className="flex-auto p-6">
        <div className="flex flex-col mb-6 pb-6 border-b border-slate-200">
          <h1 className='green-text font-medium text-xl'>Name: {character.name}</h1>
          <p className='green-text font-medium text-md'>Created: {formattedDate(character.created)}</p>
          <p className='green-text font-medium text-md'>Status: {character.status}</p>
        </div>
        <div className="flex flex-col sm:flex-row items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
          <div className="space-y-2 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row">
            <label className='border border-slate-200 rounded-xl p-2'>
              <p className='green-text font-medium text-md md:text-sm sm:text-sm'>Species: {character.species}</p>
            </label>
            {character.type && (
              <label className='border border-slate-200 rounded-xl p-2'>
                <p className='green-text font-medium text-md md:text-sm sm:text-sm'>Type: {character.type}</p>
              </label>
            )}
            <label className='border border-slate-200 rounded-xl p-2'>
              <p className='green-text font-medium text-md md:text-sm sm:text-sm'>Gender: {character.gender}</p>
            </label>
            <label className='border border-slate-200 rounded-xl p-2'>
              <p className='green-text font-medium text-md md:text-sm sm:text-sm'>Origin: {character.origin.name}</p>
            </label>
            <label className='border border-slate-200 rounded-xl p-2'>
              <p className='green-text font-medium text-md md:text-sm sm:text-sm'>Location: {character.location.name}</p>
            </label>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-5 text-sm font-medium">
          <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white">
            test
          </button>
          <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white">
            test
          </button>
        </div>
      </div>
    </div>
  )
}