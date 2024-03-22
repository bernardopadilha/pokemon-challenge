import { useState } from "react";

interface CardProps {
  name: string;
}

export function Card({ name }: CardProps) {
  const [isAvailable, setIsAvailable] = useState(true)

  return (
    <div 
      className={`${!isAvailable && 'opacity-70'} flex items-center justify-between bg-[#52525B] gap-3 py-3 px-5 rounded-3xl`}
    >
      <div>
        <img className="w-20" src="./map.png" alt="foto-map" />
      </div>

      <div className="h-full w-full flex text-center items-center justify-between gap-2">
        <h1 className="font-medium text-lg">{name}</h1>
        <button
          disabled={!isAvailable}
          onClick={() => setIsAvailable(false)}
          className="py-3 px-6 bg-pokemon rounded-full text-nowrap hover:opacity-80 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Visitar
        </button>
      </div>
    </div>
  )
}