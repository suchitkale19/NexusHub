import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../DataContext";

function DetailsPage() {
  const { setMovie } = useContext(DataContext);
  const title = useParams();
  setMovie(title);

  return <div></div>;
}

export default DetailsPage;
