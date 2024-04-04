import { ArticlePreview } from "../models/ArticlePreview";

export default function ArticleCard({ article }: { article: ArticlePreview }) {
  return (
    <a href="#" className="overflow-hidden rounded shadow-lg">
      <img src={article.image} className="h-52 w-full object-cover" />
      <div className="px-6 py-4">
        <h3 className="mb-2 text-xl font-bold">{article.title}</h3>
        <p className="text-base text-gray-700">{article.text}</p>
      </div>
    </a>
  );
}
