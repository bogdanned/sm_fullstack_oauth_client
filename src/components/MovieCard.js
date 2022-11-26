import React from "react";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="card" style={{ width: "9rem" }}>
      <img
        className="card-img-top"
        src={movie.poster_path}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.tagline}</p>
        <a href="#" className="btn btn-primary">
          See More
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
