export interface NewsArticles {
  source: Source;
  url: string;
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id: string;
  name: string;
}

export interface Icon {
  height?: string;
  width?: string;
  fill?: string;
  className?: string;
}
