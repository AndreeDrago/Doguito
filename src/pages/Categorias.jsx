//*Estilos
import "../assets/css/blog.css";

//*API
import { buscar } from "../api/API";

//*Componentes
import ListCategories from "../components/ListCategorie";
import ListPost from "../components/ListPost";

//*Page
import SubCategoria from "./SubCategoria";

//*React
import { useState, useEffect } from "react";
import {
  useParams,
  Routes,
  Route,
  Link,
  useResolvedPath,
} from "react-router-dom";

const Categoria = () => {
  const [subcategorias, setSubcategorias] = useState([]);

  const { id } = useParams();

  const url = useResolvedPath("").pathname;

  useEffect(() => {
    buscar(`/categorias?id=${id}`, (response) => {
      setSubcategorias(response[0].subcategorias);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="title-page">Pet Noticias</h2>
      </div>
      <ListCategories />
      <ul className="category-list container flex">
        {subcategorias.map((subcategoria) => (
          <li
            className={`category-list__category category-list__category--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/" element={<ListPost url={`/posts?categoria=${id}`} />} />
        <Route path="/:subcategoria" element={<SubCategoria />} />
      </Routes>
    </>
  );
};

export default Categoria;
