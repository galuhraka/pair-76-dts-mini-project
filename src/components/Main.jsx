import React from "react";
import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import './Main.css'

const Main = ({ movie, handleToDetail }) => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <Box sx={{height:{xs:'100%', md:'90vh'}}}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        axis={"horizontal"}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        {movie.map((item) => (
          <Box
            sx={{ width: "100%", backgroundColor: "#141414", height:'90vh' }}
            key={item.id}
            onClick={() => handleToDetail(item.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt="main"
              style={{ objectFit: "cover", width: "100vw" }}
              className='md:h-full'
            />
            <Box
              sx={{
                position: "absolute",
                top: { xs: 100, lg: 300 },
                paddingLeft: { xs: "20px", md: "50px" },
                width: { xs: "80%", md: "60%" },
                textAlign: "start",
                color: "white",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "2rem" },
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.5rem", md: "1rem" },
                }}
              >
                Released : {item.release_date}
              </Typography>
              <Typography
              className="banner__description"
                sx={{
                  fontSize: { xs: "0.5rem", md: "1rem" },
                }}
              >
              {truncate(item?.overview, 150)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Main;
