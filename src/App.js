import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { useEffect, useState } from "react";
import { fetchAdverts } from "./services/advertsApi";

function App() {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState([]);  // array of cars Id
  const [favoriteCars, setFavoriteCars] = useState([]);  // array of cars

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites"));
    if (data) {
      setFavorites(data);
     }
    
  }, []);

  useEffect(() => {
    (async () => {
      const data = await fetchAdverts(page);
      if (page === 1) setAdverts(data);
      if (page > 1) setAdverts((prev) => [...prev, ...data]);
    })();
  }, [page]);

  useEffect(() => {
    const favoriteList = adverts.filter((advert) =>
      favorites.includes(advert.id)
    );
    setFavoriteCars(favoriteList);
    
  }, [favorites, adverts]);

  const handleLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };

  const addFavorite = (e) => {
    const id = parseInt(e.id);
    const updatedFavorites = [...favorites];
    const index = updatedFavorites.indexOf(id);

    if (index === -1) {
      updatedFavorites.push(id);
    } else {
      updatedFavorites.splice(index, 1);
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/catalog"
            element={
              <CatalogPage
                adverts={adverts}
                handleLoadMoreClick={handleLoadMoreClick}
                addFavorite={addFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                addFavorite={addFavorite}
                favoriteCars={favoriteCars}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
