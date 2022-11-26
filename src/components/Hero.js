import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import logo from "../assets/logo.svg";

const Hero = () => {
  const [data, setData] = useState([]);
  const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();

  useEffect(() => {
    async function getData() {
      /// getAccessTokenWithPopup({ scope: "read:movies" });

      const token = await getAccessTokenSilently({
        audience: "https://movie-api.theseniordev.com",
        scope: "read:movies",
        permissions: ["read:movies"],
        ignoreCache: true,
      });
      console.log(token);
      const data = await fetch("http://localhost:5001/api/movies", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const dataJson = await data.json();
      console.log(dataJson, "data json");
      setData(data);
    }
    getData();
  }, []);

  return (
    <div className="text-center hero my-5">
      <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
      <h1 className="mb-4">React.js Sample Project</h1>

      <p className="lead">
        This is a sample application that demonstrates an authentication flow
        for an SPA, using <a href="https://reactjs.org">React.js</a>
      </p>
    </div>
  );
};

export default Hero;
