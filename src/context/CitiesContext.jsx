import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const BASE_URL = `http://localhost:4000`;

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, Setcities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        Setcities(data);
      } catch {
        alert("There was an error loading the data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the the Cities Provider");

  return context;
}

CitiesProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is a valid React node
};

export { CitiesProvider, useCities };
