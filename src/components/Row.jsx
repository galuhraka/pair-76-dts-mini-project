import React from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Row = ({ title, movie, handleToDetail }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "absolute", right: 10 }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "absolute", left: 10, zIndex: 1 }}
        onClick={onClick}
      />
    );
  }

  const setting = {
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div style={{ backgroundColor: "#141414" }}>
      <Typography
        sx={{
          color: "white",
          fontSize: {
            xs: "1rem",
            md: "2rem",
            textAlign: "start",
            marginLeft: "10px",
            marginTop: "10px",
          },
        }}
      >
        {title}
      </Typography>
      <Slider {...setting}>
        {movie.map((item) => (
          <Box
            key={item.id}
            border={"solid 10px"}
            position={"relative"}
            onClick={() => handleToDetail(item.id)}
          >
            <img
              style={{ width: "100%" }}
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt={item.title}
            />
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.6)",
                top: 0,
                position: "absolute",
                color: "white",
                opacity: 0,
                alignContent: "center",
                "&:hover": { opacity: 100 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.7rem", md: "2rem" },
                  marginTop: { xs: "auto", md: "20px" },
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default Row;
