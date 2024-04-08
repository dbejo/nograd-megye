import ArticleCard from "../components/ArticleCard";
import OneButtonCard from "../components/OneButtonCard";
import { ArticlePreview } from "../models/ArticlePreview";
import Contact from "./Contact";

export default function Home() {
  const articles: ArticlePreview[] = [
    new ArticlePreview(
      1,
      "Balassagyarmati bölcsődét választottak a legjobbnak 2023-ban",
      "https://jatekvaroscsana.hu/KEP/jatekvaros_logo.png",
      "2023-ban az év családi bölcsődéje a Játékváros Családi Bölcsőde Hálózat lett",
    ),
    new ArticlePreview(
      2,
      "A helyi identitást erősítették a drégelypalánkiak a palóc tavaszköszöntőn",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KKptlNvnB8ESzfhKNOsaCsEGw9CO-4zFPqgS1P5MUQ&amp;s",
      "Hagyományteremtő jelleggel rendezték meg a Palóc Falusi Tavaszköszöntő című rendezvényt szombaton Drégelypalánkon",
    ),
    new ArticlePreview(
      3,
      "Ingyenes bőrgyógyászati szűrésre lehet jelentkezni Bátonyterenyén",
      "https://medicover.hu/wp-content/uploads/2022/02/borgyogyasz-borgyogyaszat.jpg",
      "Szakrendelés formájában valósul meg az ingyenes bőrgyógyászati szűrés Bátonyterenyén, amelyhez telefonos időpontkérés szükséges",
    ),
    new ArticlePreview(
      4,
      "Felfüggesztették a vízi turizmust az Ipolyon",
      "https://turizmus.com/html/data/cikk/118/8090/cikk_1188090/ipolytura2_custom_700x660.jpg",
      "Balassagyarmat önkormányzata a közösségi oldalán ismertette, hogy felfüggesztették a vízi turizmust az Ipolyon",
    ),
    new ArticlePreview(
      5,
      "Új utak épülnek és az óvodát is felújítják Rimócon",
      "https://www.aduvizig.hu/also-duna-volgyi/pimg/imageFile?path=/arvizvedelem-vizkarelharitas/kepek/arvizvedelem.jpg1",
      "Új utak épülnek, korszerűsítik az óvodát és a villámárvizek elleni védekezést is fejlesztik Rimócon",
    ),
  ];
  return (
    <main>
      <div className="hero-image mb-4 flex h-96 w-full flex-col items-center justify-center text-white">
        <h1 className="mb-8 text-6xl font-extrabold">Nógrád megye</h1>
        <p className="text-lg text-gray-100">
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
