//*Componentes
import ListPosts from "../components/ListPost";
import ListCategories from "../components/ListCategorie";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategories />
      <ListPosts url={"/posts"} />
    </main>
  );
};

export default Home;
