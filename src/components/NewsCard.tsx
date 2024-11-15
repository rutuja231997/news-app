interface SourceProps {
  id: string;
  name: string;
}

interface NewsCardProps {
  source: SourceProps;
  url: string;
  urlToImage: string;
  author: string;
  title?: string;
  description?: string;
  publishedAt: string;
  content: string;
  onClick: () => void;
}

const NewsCard = ({
  source,
  urlToImage,
  author,
  title,
  publishedAt,
  content,
  onClick,
}: NewsCardProps) => {
  return (
    <div
      className="box cursor-pointer flex flex-col md:flex-row"
      onClick={onClick}
    >
      {/* News Image */}
      <div className="image flex-shrink-0">
        <img
          src={urlToImage}
          alt="Unavailable"
          className="w-full h-48 md:h-64 rounded-md object-cover"
        />
      </div>

      {/* News Content */}
      <div className="flex flex-col justify-between mt-4 md:mt-0 md:ml-4 w-full">
        {/* Title */}
        <div>
          <h2 className="headline mb-2 text-lg md:text-xl">
            {title || "No title available"}
          </h2>
          {/* Details */}
          <div className="details mb-2 text-gray-500 space-x-1">
            <span className="font-bold text-sm">short</span>
            <p className="text-xs">
              by {author || "Unknown"} /{" "}
              {new Date(publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Content */}
        <p className="content text-wrap mb-2 text-gray-700 text-sm md:text-base">
          {content || "No content available."}
        </p>

        {/* Source */}
        <div className="source_name">
          <p className="text-gray-500 text-xs md:text-sm">
            Read more at <span className="font-medium">{source.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
