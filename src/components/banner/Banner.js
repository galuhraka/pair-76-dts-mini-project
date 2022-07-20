import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../helper/axios/Axios";
import requests from "../../helper/request/Request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchPopular);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log("banner", movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h5>Released: {movie?.first_air_date || movie?.release_date}</h5>
        <h2 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h2>
        <div className="banner_buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
      </div>

      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
