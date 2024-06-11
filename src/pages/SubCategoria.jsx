//*React
import { useParams } from "react-router-dom";

//*Componentes
import ListPosts from "../components/ListPost";

const SubCategoria = () => {
  const { subcategoria } = useParams();
  return <ListPosts url={`/posts?subcategoria=${subcategoria}`} />;
};

export default SubCategoria;
