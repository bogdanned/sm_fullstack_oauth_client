import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import MovieCard from "./MovieCard";

const MovieListContainer = () => {
  const [movieList, setMovieList] = useState([]);
  const { getAccessTokenSilently } = useAuth0();
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const token = await getAccessTokenSilently({
          audience: "https://movie-api.theseniordev.com",
          scope: "read:movies",
          permissions: ["read:movies"],
          ignoreCache: true,
        });
        console.log("token", token);
        const data = await fetch("http://localhost:3000/api/movies", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const dataJson = await data.json();
        console.log(dataJson, "data json");
        setMovieList(dataJson);
        setError("");
      } catch (error) {
        setError(error.message);
      }
    }
    getData();
  }, []);

  return (
    <div className="container">
      {movieList.map((movie) => (
        <MovieCard movie={movie} key={movie.id}></MovieCard>
      ))}
      {!error && movieList.length === 0 && (
        <div className="alert alert-danger" role="alert">
          There are no movies to be fetched.
          <br></br>Make sure you add some.
        </div>
      )}
      {error.length > 0 && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default MovieListContainer;
