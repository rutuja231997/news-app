import { useState } from "react";
import { NewsArticles } from "../types";
import NewsCard from "./NewsCard";
import { Close } from "../icons/icons";

interface ArticlesProps {
  articles: NewsArticles[];
}

const NewsList = ({ articles }: ArticlesProps) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticles | null>(
    null
  );

  const handleCardClick = (article: NewsArticles) => {
    console.log("Selected Article:", article);
    setSelectedArticle(article); // Set the selected article to display the preview
  };

  return (
    <div className="flex flex-col justify-center items-center mt-24">
      {/* News List */}
      <div
        className={`transition-all duration-300 overflow-y-auto border-r border-gray-300 p-4 ${
          selectedArticle ? "hidden md:block md:w-1/2" : "w-full"
        }`}
      >
        {articles.map((article) => (
          <NewsCard
            key={`${article.url}-${article.publishedAt}`} // Unique key
            urlToImage={article.urlToImage}
            title={article.title}
            description={article.description}
            author={article.author}
            publishedAt={article.publishedAt}
            source={article.source}
            url={article.url}
            content={article.content}
            onClick={() => handleCardClick(article)} // Handle card click
          />
        ))}
      </div>

      {/* News Preview */}
      {selectedArticle && (
        <div
          className={`fixed inset-0 flex flex-col md:flex-row items-center bg-white z-50 transition-transform duration-300`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 bg-[#fff] py-2 px-2 rounded shadow-md z-10"
            onClick={() => setSelectedArticle(null)} // Close preview
          >
            <Close height="18" width="18" />
          </button>

          {/* On Small Screens: Fullscreen Preview */}
          <div className="w-full h-full overflow-y-auto p-6 md:hidden">
            <h2 className="headline mt-6 font-bold mb-4">
              {selectedArticle.title}
            </h2>
            <img
              src={selectedArticle.urlToImage}
              alt={selectedArticle.title}
              className="w-full h-72 object-cover rounded-lg mb-4"
            />
            <p className="text-[#44444d] text-lg font-medium font_name">
              {selectedArticle.content}
            </p>
            <p className="text-[#44444d] font-light font_name mt-4">
              <span>Author: {selectedArticle.author || "Unknown"}</span> |{" "}
              <span>Source: {selectedArticle.source.name}</span> |{" "}
              <span>
                Published:{" "}
                {new Date(selectedArticle.publishedAt).toLocaleString()}
              </span>
            </p>
          </div>

          {/* On Larger Screens: Split Layout */}
          <div className="hidden md:flex md:flex-col w-1/2 h-full overflow-y-auto border-r border-gray-300 p-4">
            {articles.map((article) => (
              <NewsCard
                key={`${article.url}-${article.publishedAt}`} // Unique key
                urlToImage={article.urlToImage}
                title={article.title}
                description={article.description}
                author={article.author}
                publishedAt={article.publishedAt}
                source={article.source}
                url={article.url}
                content={article.content}
                onClick={() => handleCardClick(article)} // Handle card click
              />
            ))}
          </div>

          <div className="hidden md:flex md:flex-col w-1/2 h-full p-6 justify-evenly">
            <h2 className="headline mt-6 font-bold mb-4">
              {selectedArticle.title}
            </h2>
            <img
              src={selectedArticle.urlToImage}
              alt={selectedArticle.title}
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
            <p className="text-[#44444d] text-lg font-medium font_name">
              {selectedArticle.content}
            </p>
            <p className="text-[#44444d] font-light font_name mt-4">
              <span>Author: {selectedArticle.author || "Unknown"}</span> |{" "}
              <span>Source: {selectedArticle.source.name}</span> |{" "}
              <span>
                Published:{" "}
                {new Date(selectedArticle.publishedAt).toLocaleString()}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsList;
