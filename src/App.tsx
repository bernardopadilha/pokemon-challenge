import { useEffect, useState } from "react";

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
      <div className="w-full h-[calc(100vh-150px)] flex flex-col pb-2 items-center justify-start bg-hero bg-no-repeat text-center bg-center bg-cover px-4 md:px-8 pt-4 md:pt-8">
        <Header />

        <div className="absolute top-4 md:top-6 right-4 md:right-8"><Sidebar /></div>
        <div className="flex h-full md:w-full flex-col md:flex-row items-center justify-start md:justify-end gap-6 mt-7 text-center ">
          <div className="flex flex-col items-center md:items-start md:text-start justify-center gap-3 md:gap-5 md:flex-1">
            <h1 className="text-4xl md:text-6xl font-bold">Sua melhor <br /> aventura <span className="text-pokemon">Pokemon!</span></h1>
            <p className="text-sm md:text-base">Localize os lugares perfeitos que podem ser  visitados por meio da sua Pokedex.</p>
            <button
              className="px-4 py-3 bg-zinc-700 hover:bg-zinc-600 flex items-center gap-2 rounded-full duration-150"
            >
              <Play size={24} />
              Começar com a aventura
            </button>
          </div>

          <div className="">
            <img className="w-80 md:w-[500px]" src="./banner-charmander.png" alt="image-charmander" />
          </div>

        </div>
        <h1 className="text-2xl border-b-2 border-pokemon px-2 mt-24">
          Lugares
        </h1>
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
            <div className="flex flex-col md:grid md:grid-cols-3 gap-3 p-3 bg-[#3F3F46] rounded-lg relative overflow-hidden">
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
              <Card key={4} name="canalave-city" />
              <Card key={5} name="eterna-city" />
              <Card key={6} name="pastoria-city" />
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
