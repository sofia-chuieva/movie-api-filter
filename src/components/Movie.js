import React from "react";

const Movie = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        alt="img"
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
      />
    </div>
  );
};

export default Movie;
