import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MovieListContainer from "./MovieListContainer";

import logo from "../assets/logo.svg";

const Hero = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="text-center hero my-5">
      <h1 className="mb-4">Movie App Demo</h1>

      <div className="container">
        {isAuthenticated ? (
          <MovieListContainer></MovieListContainer>
        ) : (
          <div className="alert alert-primary" role="alert">
            Authenticate so you can see the movies.
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
