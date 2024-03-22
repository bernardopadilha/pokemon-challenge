import { CaretDoubleRight, List } from "phosphor-react"
import { useState } from "react"
import { useAuth } from "../hooks/useAuth"

export function Sidebar() {
  const { user, signInWithGoogle } = useAuth()

  const [hasActiveSidebar, setHasActiveSidebar] = useState(false)

  return (
    <>
      <aside className={`${hasActiveSidebar ? 'w-[17rem] opacity-100 visible' : 'w-0 opacity-0 invisible'} ${!user && 'w-[17rem] flex flex-col items-start justify-start '} overflow-hidden whitespace-nowrap duration-300 flex flex-col w-0 gap-2 h-screen bg-zinc-800 fixed top-0 right-0 z-50 p-2`}>
        {user ? (
          <div className="flex items-center flex-col justify-between gap-4">
            <div className="w-full flex items-center justify-between ">
              <h1 className="text-xl w-10 h-10 flex items-center justify-center bg-pokemon rounded-full">
                {user.name.slice(0, 1)}
              </h1>

              <h1 className="text-sm">{user.name}</h1>
              <button
                onClick={() => setHasActiveSidebar(false)}
                className="bg-zinc-700 p-1 rounded-md hover:opacity-80"
              >
                <CaretDoubleRight size={24} />
              </button>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-[6px]">
              <a href="" className="w-full py-2 bg-zinc-700 rounded-md hover:opacity-80">Games & Apps</a>
              <a href="" className="w-full py-2 bg-zinc-700 rounded-md hover:opacity-80">Pokemons</a>
              <a href="" className="w-full py-2 bg-zinc-700 rounded-md hover:opacity-80">Anime</a>
              <a href="" className="w-full py-2 bg-zinc-700 rounded-md hover:opacity-80">Manga</a>
            </div>
          </div>
        ) : (
          <>
            <button
              onClick={() => setHasActiveSidebar(false)}
              className="bg-zinc-700 p-1 rounded-md hover:opacity-80"
            >
              <CaretDoubleRight size={24} />
            </button>
            <div className="w-full flex flex-col items-center justify-center gap-6 mt-8">
              <h1 className="text-lg font-medium">Faça o login:</h1>
              <button
                onClick={() => signInWithGoogle()}
                className="px-4 py-3 bg-pokemon rounded-full hover:opacity-80 duration-150"
              >
                Entrar com o Google
              </button>
            </div>
          </>
        )}

      </aside>

      {!hasActiveSidebar && (

        <button
          onClick={() => hasActiveSidebar ? setHasActiveSidebar(false) : setHasActiveSidebar(true)}
          className='p-2 text-white rounded-full bgButton hover:opacity-80 duration-150'
        >
          <List size={28} />
        </button>
      )}
    </>
  )
}