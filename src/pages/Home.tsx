import ArticleCard from "../components/ArticleCard";
import { ArticlePreview } from "../models/ArticlePreview";

export default function Home() {
  const articles: ArticlePreview[] = [
    new ArticlePreview(
      1,
      "Hello 1",
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      "asdf adfasdfasdf asdafsdfa sadfasdfasdfa sdf asd fasdfasdf sdaf sad fas df asdf adfasdfasdf asdafsdfasdfas  sadfasdfasdfa sdf asd fasdfasdf sdaf sad fas df sdf asd fasdfasdf sdaf sad fas df asdf adfasdfasdf asdafsdfasdfas  sadfasdfasdfa sdf asd fasdfasdf sdaf sad fas df",
    ),
    new ArticlePreview(
      2,
      "Hello 2",
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      "asdf adfasdfasdf asd",
    ),
    new ArticlePreview(
      3,
      "Hello 3",
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      "asdf adfasdfasdf asd",
    ),
    new ArticlePreview(
      4,
      "Hello 4",
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      "asdf adfasdfasdf asd",
    ),
    new ArticlePreview(
      5,
      "Hello 5",
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      "asdf adfasdfasdf asd",
    ),
  ];
  return (
    <main>
      <div className="flex h-96 w-full flex-col items-center justify-center bg-gray-200">
        <h1 className="mb-8 text-6xl font-extrabold">
          Fedezzük fel Nógrád megyét!
        </h1>
        <p className="text-lg text-gray-500">
          Történelemmel átszőtt táj, ahol a múlt és jövő találkozik.
        </p>
      </div>
      <div className="m-4 mx-auto flex max-w-screen-xl">
        <div className="grid gap-3 lg:grid-cols-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
}
