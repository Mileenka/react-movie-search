import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./MoviesContainer.css";
import Movie from "./Movie";
import axios from "axios";
import Loading from "./Loading";

const MoviesContainer = ({ value }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=${
            import.meta.env.VITE_API_KEY
          }&s=${value}&page=1`,
        );

        if (response.status === 200) {
          if (response.data.Search) {
            setError("");
            setMovies(response.data.Search);
          } else {
            setError(response.data.Error);
          }
        } else {
          throw new Error(
            `Failed to fetch movie Data with status : ${response.status}`,
          );
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [value]);

  return (
    <div className="movies-container">
      {loading && <Loading />}
      {error && <p className="error">{error}</p>}
      {!error &&
        movies.map((movie, index) => <Movie key={index} movie={movie} />)}
    </div>
  );
};

MoviesContainer.propTypes = {
  value: PropTypes.string,
};

export default MoviesContainer;
