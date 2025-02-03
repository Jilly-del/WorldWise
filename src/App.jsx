import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/Product";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Login";
import CityList from "./component/CityList";
import City from "./component/City";
import CountryList from "./component/CountryList";
import Form from "./component/Form";

const BASE_URL = `http://localhost:4000`;
function App() {
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
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to={"cities"} />} />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
