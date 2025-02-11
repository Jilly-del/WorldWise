import { createContext, useContext } from "react";

const AuthContext = createContext();

function AuthoProvider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthoContext was used outside AuthoProvider");
  }
}
