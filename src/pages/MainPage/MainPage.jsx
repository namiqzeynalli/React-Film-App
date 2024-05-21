import React from "react";
import "./MainPage.css";
import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import Movies from "../../components/Movies/Movies";
import Favorites from "../../components/Favorites/Favorites";
import FavoritesLink from "../../components/FavoritesLink/FavoritesLink";

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <main className="main-page__content">
        <section className="main-page__main-section">
          <div className="main-page__search-box">
            <SearchBox />
          </div>
          <div className="main-page__movies">
            <Movies />
          </div>
        </section>
        <aside className="favorites-container">
          <aside className="main-page__favorites">
            <Favorites />
          </aside>
          <aside className="main-page__favoriteslink">
            <FavoritesLink />
          </aside>
        </aside>
      </main>
    </div>
  );
};

export default MainPage;
