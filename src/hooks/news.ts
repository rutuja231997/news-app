import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";
import axios from "axios";
import { NewsArticles } from "../types";

interface NewsArticleResponse {
  articles: NewsArticles[];
  totalResults: number;
}

export const useNewsCategory = (
  initialPage: number = 1,
  initialLimit: number = 20
) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<NewsArticles[]>([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [category, setCategory] = useState<string>("business");
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<NewsArticleResponse>(
          `${BACKEND_URL}?category=${category}&apiKey=${process.env.api_key}`,
          { params: { category, page, pageSize: limit } }
        );
        const { articles, totalResults } = response.data;
        setArticles(articles);
        setTotalArticles(totalResults);
      } catch (error) {
        console.log("error while fetching news", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [page, limit, category]);

  return {
    loading,
    articles,
    page,
    limit,
    setLimit,
    setPage,
    totalArticles,
    setCategory,
  };
};
