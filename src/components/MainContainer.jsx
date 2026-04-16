
import { useSelector } from "react-redux";
import HeadTitle from "./HeadTitle";
import HeadVideo from "./HeadVideo";
import HeadShimmer from "./HeadShimmer";

const MainContainer = () => {
  const movie = useSelector((store) => store.movies.dhurandhar);
  if (!movie) return <HeadShimmer/>;
  const { id, original_title, overview } = movie[0];
  return (
    <div className="">
      <HeadTitle title={original_title} overview={overview} />
      <HeadVideo id={id}/>
    </div>  
  );
};

export default MainContainer;
