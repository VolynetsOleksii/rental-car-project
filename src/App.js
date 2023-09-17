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
  const [favorites, setFavorites] = useState([]);
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    setFavoriteCars(JSON.parse(localStorage.getItem("favoriteCars")));
  }, []);
  
  useEffect(() => {
    (async () => {
      const data = await fetchAdverts(page);
      if (page === 1) setAdverts(data);
      if (page > 1) setAdverts((prev) => [...prev, ...data]);
    })();
  }, [page]);

  const handleLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const favoriteList = adverts.filter((advert) =>
      favorites.includes(advert.id)
    );
    setFavoriteCars(favoriteList);
    localStorage.setItem("favoriteCars", JSON.stringify(favoriteList));
  }, [favorites, adverts]);

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
