import ArticleCard from "../components/ArticleCard";
import OneButtonCard from "../components/OneButtonCard";
import { ArticlePreview } from "../models/ArticlePreview";
import Contact from "./Contact";

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
      <div className="mb-4 flex h-96 w-full flex-col items-center justify-center bg-gray-200">
        <h1 className="mb-8 text-6xl font-extrabold">
          Fedezzük fel Nógrád megyét!
        </h1>
        <p className="text-lg text-gray-500">
          Történelemmel átszőtt táj, ahol a múlt és jövő találkozik.
        </p>
      </div>
      <div className="mx-auto flex max-w-screen-xl flex-col">
        <div className="mb-4">
          <h2 className="mb-4 text-2xl font-bold">Hírek</h2>
          <div className="grid gap-3 lg:grid-cols-4">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h2 className="mb-4 text-2xl font-bold">Ajánlatok</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <OneButtonCard
              title="Szállások"
              text="Válogass Nógrád megye legjobb szállásai közül. Élvezd a kedvezményeket és a kényelmet!"
              buttonText="Keress szállást most!"
              buttonPath="#"
            />
            <OneButtonCard
              title="Programok"
              text="Találd meg a tökéletes programot megyénkben!"
              buttonText="Tovább a programokhoz!"
              buttonPath="#"
            />
            <OneButtonCard
              title="Éttermek"
              text="Fedezd fel a helyi ízeket. Válogass számtalan vendéglátó hely közül!"
              buttonText="Éttermek böngészése!"
              buttonPath="#"
            />
          </div>
        </div>
        <div className="mb-4">
          <h2 className="mb-4 text-2xl font-bold">Írj nekünk</h2>
          <Contact />
        </div>
      </div>
    </main>
  );
}
