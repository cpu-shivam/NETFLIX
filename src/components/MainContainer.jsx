import React from "react";
import { useSelector } from "react-redux";
import HeadTitle from "./HeadTitle";
import HeadVideo from "./HeadVideo";

const MainContainer = () => {
  const movie = useSelector((store) => store.movies.dhurandhar);
  if (!movie) return;
  console.log(movie)
  const { id, original_title, overview } = movie[0];
  return (
    <div>
      <HeadTitle title={original_title} overview={overview} />
      <HeadVideo id={id}/>
    </div>  
  );
};

export default MainContainer;
