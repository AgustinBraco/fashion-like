import Item from "../item/item.jsx";
import { Link } from "react-router-dom";

// Router
import { useParams } from "react-router-dom";

function Feed() {
  const filtersAplicated = useParams();

  console.log("Non", filtersAplicated);
  console.log("Id", filtersAplicated.id);

  return (
    <main>
      <div>
        <Link to={"/"}>FILTERS</Link>
      </div>
      <div>
        <Item filtersAplicated={filtersAplicated} />
      </div>
    </main>
  )
};

export default Feed;