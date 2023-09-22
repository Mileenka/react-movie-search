import PropTypes from "prop-types";
import { useState } from "react";

import { ImHeart } from "react-icons/im";
import images from "../assets/404.jpg";
import "./Movie.css";

const Movie = ({ movie }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <div className={`movie ${liked ? "yes" : "no"}`}>
      <div className="movie-title">
        <p className="movie-title">
          {movie.Year} {movie.Title}
        </p>
        <div className="icon-box" onClick={toggleLike}>
          <ImHeart className={`ImHeartIcon ${liked ? "liked" : "unlike"}`} />
        </div>
      </div>
      <img
        className="movie-img"
        src={movie.Poster === "N/A" ? images : movie.Poster}
        alt={movie.Title}
      />
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
