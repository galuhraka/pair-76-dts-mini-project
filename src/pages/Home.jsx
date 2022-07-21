import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';

const Home = ({movie, nowPlaying, topRated, upComing, handleToDetail}) => {
  return (
    <>
      <Main movie={movie} handleToDetail={handleToDetail}/>
      <Row title={"Now Playing"} movie={nowPlaying} handleToDetail={handleToDetail} />
      <Row title={"Top Rated"} movie={topRated} handleToDetail={handleToDetail} />
      <Row title={"Up Coming"} movie={upComing} handleToDetail={handleToDetail} />
    </>
  )
}

export default Home;