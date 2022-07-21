import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";

const Detail = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  let { movieId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=c50395b089c7e92ffe23317e6b402d11&language=en-US`
      )
      .then((response) => {
        console.log(response.data)
        setMovieDetail(response.data);
      });
  }, [movieId]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#141414",
          height: { xs: "100%", md: "90vh" },
        }}
        key={movieDetail.id}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
          alt="main"
          style={{ objectFit: "cover", width: "100vw" }}
          className="md:h-full"
        />
        <Box
          sx={{
            position: "absolute",
            top: { xs: 120, md: 210 },
            paddingLeft: { xs: "20px", md: "50px" },
            width: { xs: "80%", md: "60%" },
            textAlign: "start",
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2.5rem" },
            }}
          >
            {movieDetail.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
          >
            {movieDetail.tagline}
          </Typography>
          <button className="border md:w-48 md:h-12 md:text-2xl px-2 text-black bg-white rounded mt-4 mr-4">
            <PlayArrow />
            Play
          </button>
          <button className=" text-white mt-2">
            <InfoIcon fontSize="small" />
          </button>
        </Box>
      </Box>
      <Box
        sx={{
          margin: "20px",
          color: "white",
          marginBottom: "20px",
          paddingBottom: "10px",
          borderBottom: "solid 5px gray",
          textAlign: "justify",
          fontSize: { xs: "1rem", md: "2.8rem" },
        }}
      >
        <Typography>Release Date : {movieDetail.release_date}</Typography>
        <Typography>Popularity : {movieDetail.popularity}</Typography>
        <Typography>Description : <br/> {movieDetail.overview}</Typography>
      </Box>
    </>
  );
};

export default Detail;
