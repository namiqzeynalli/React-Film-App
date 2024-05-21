import React, { useEffect } from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/slices/movieSlice";

const Movies = () => {
  const { movies, loading, error } = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <ul className="movies">
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">ERROR!</div>}
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <li className="movies__item" key={movie.imdbID}>
            <MovieItem movie={movie} />
          </li>
        ))
      ) : (
        <p className="movies__item">
          No results were found for your search :({" "}
        </p>
      )}
    </ul>
  );
};

export default Movies;
