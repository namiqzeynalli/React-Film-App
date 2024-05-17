import React from "react";
import "./MovieItem.css";
import { useDispatch } from "react-redux";
import { addList } from "../../store/slices/favoritesSlice";

const MovieItem = ({movie}) => {
  const dispatch = useDispatch()
  const { Title, Year, Poster,imdbID } = movie;
  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={Poster} alt={Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button type="button" className="movie-item__add-button" onClick={()=>{
          return dispatch(addList({title: Title, year: Year, poster: Poster, id: imdbID}))
        }}>
          Add to list
        </button>
      </div>
    </article>
  );
};

export default MovieItem;
