import { useEffect, useState } from "react";

import { AuthProvider } from './context/auth-context'
import { GetLocationPokemon, GetLocationPokemonStateProps } from "./api/get-location-pokemon";

import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import { useAuth } from "./hooks/useAuth"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Play } from "phosphor-react";

export function App() {
  const [locations, setLocations] = useState<GetLocationPokemonStateProps[]>([])
  const { user, signInWithGoogle } = useAuth()

  async function handleGetAllLocations() {
    const result = await GetLocationPokemon()

    setLocations(result)
    return result
  }

  useEffect(() => {
    handleGetAllLocations()
  }, [])

  return (

    <main className="max-w-[1440px] mx-auto h-full w-full flex flex-col items-center">
      <div className="w-full h-[calc(100vh-150px)] md:h-full flex flex-col pb-2 items-center justify-start bg-hero bg-no-repeat text-center bg-center bg-cover px-4 pt-4">
        <Header />

        <div className="absolute top-4 right-4"><Sidebar /></div>
        <div className="flex h-full flex-col items-center justify-start gap-6 mt-7 text-center ">
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-4xl font-bold">Sua melhor <br /> aventura <span className="text-pokemon">Pokemon!</span></h1>
            <p className="text-sm">Localize os lugares perfeitos que podem ser <br /> visitados por meio da sua Pokedex.</p>
            <button
                className="px-4 py-3 bg-zinc-700 hover:bg-zinc-600 flex items-center gap-2 rounded-full duration-150"
              >
                <Play size={24} />
                Começar com a aventura
              </button>
          </div>

          <div>
            <img className="w-80" src="./banner-charmander.png" alt="image-charmander" />
          </div>

          <h1 className="text-2xl border-b-2 border-pokemon px-2 mt-24">
            Lugares
          </h1>
        </div>
      </div>

      <div className="w-full px-4 mt-8">
        {user ? (
          <div className={` flex flex-col gap-3 p-7 bg-[#3F3F46] rounded-lg`}>
            {locations.map((location) => {
              return (
                <Card key={location.url} name={location.name} />
              )
            })}
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-3 p-3 bg-[#3F3F46] rounded-lg relative overflow-hidden">
              <div className="absolute flex flex-col items-center justify-center gap-4 left-0 top-0 bg-gradient-to-b from-zinc-600/40 to-zinc-900/80 backdrop-blur-sm w-full h-full">
                <h1 className="text-2xl font-semibold">Faça login para visitar...</h1>
                <button
                onClick={() => signInWithGoogle()}
                className="px-4 py-3 bg-pokemon hover:opacity-75 rounded-full"
              >
                Entrar com o Google
              </button>
              </div>
              <Card key={1} name="canalave-city" />
              <Card key={2} name="eterna-city" />
              <Card key={3} name="pastoria-city" />
            </div>
          </>
        )}
      </div>

      <div className="w-full mt-8">
        <Footer />
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </main>

  )
}
