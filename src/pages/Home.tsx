import { Link } from "react-router-dom";
import Films from "./Films";
import TvShows from "./TvShows";

const Home = () => {
  return (
    <>
      <div className="mb-24 flex flex-col items-center">
        <Films showPagination={false} showSearch={false} />
        <Link to={"/films"} className="btn btn-lg btn-secondary mb-4">
          View All Films
        </Link>
      </div>
      <div className="mb-24 flex flex-col items-center">
        <TvShows showPagination={false} showSearch={false} />
        <Link to={"/tv-shows"} className="btn btn-lg btn-primary mb-4">
          View All TV Shows
        </Link>
      </div>
    </>
  );
};

export default Home;
