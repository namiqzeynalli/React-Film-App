import React from "react";
import "./Favorites.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FavoritesLink = () => {
  const navigate = useNavigate();
  const { lists } = useSelector((state) => state.sendList);
  return (
    <div className="favorites-link-container">
      <p>Favorite List Links</p>
      {lists.map((item) => {
        return (
          <ul key={item.id}>
            <li
              onClick={() => {
                return navigate(`/list/${item.id}`);
              }}
            >
              {item.title}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default FavoritesLink;
