import React, { useState } from "react";
import "./Favorites.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll, deleteList } from "../../store/slices/favoritesSlice";
import { sendList } from "../../store/slices/sendFavoriteSlice";

const Favorites = () => {
  const [inputState, setInputState] = useState("New list");
  const { favorites } = useSelector((state) => state.favorite);

  const handleSendList = () => {
    if (favorites.length > 0) {
      return dispatch(
        sendList({
          title: inputState,
          movies: favorites?.map((favorite) => {
            return favorite.id;
          }),
        }),
        dispatch(deleteAll()),
        setInputState("New list")
      );
    }
  };

  const dispatch = useDispatch();

  return (
    <div className="favorites">
      <input
        placeholder="New list"
        className="favorites__name"
        value={inputState}
        onChange={(e) => {
          return setInputState(e.target.value);
        }}
      />
      <ul className="favorites__list">
        {favorites.map((item) => {
          return (
            <li className="favoriteLi" key={item.id}>
              <p>
                {item.title} ({item.year})
              </p>{" "}
              <button onClick={() => dispatch(deleteList(item.id))}>x</button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="favorites__save"
        onClick={handleSendList}
      >
        Save list
      </button>
    </div>
  );
};

export default Favorites;
