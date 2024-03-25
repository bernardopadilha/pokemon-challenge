import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth, provider } from "../services/auth";
import { ReactNode, createContext, useState } from "react";
import { toast } from "react-toastify";

interface AuthProviderProps {
  children: ReactNode;
}

interface UserProps {
  id: string;
  email?: string
  name?: string;
  userPhoto?: string;
  token?: string;
}

interface AuthContextData {
  user: any;
  signInWithGoogle: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>()

  async function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const { email, uid, displayName, photoURL } = result.user;

        setUser({
          id: uid,
          email: email ?? '',
          name: displayName ?? '',
          userPhoto: photoURL ?? '',
          token,
        })


        toast.success("Logado com sucesso");

      }).catch(() => {
        toast.error("Você cancelou o método de login com o Google");
      });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}