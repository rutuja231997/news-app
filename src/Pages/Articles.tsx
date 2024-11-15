import Header from "../components/Header";
import NewsList from "../components/NewsList";
import { useNewsCategory } from "../hooks/news";
import Footer from "../components/Footer";

const Articles = () => {
  const { articles, setCategory, loading } = useNewsCategory();

  return (
    <div className="h-screen flex flex-col">
      <Header setCategory={setCategory} />

      <section className="flex-1">
        {loading ? <p>Loading...</p> : <NewsList articles={articles} />}
      </section>

      <Footer />
    </div>
  );
};

export default Articles;
