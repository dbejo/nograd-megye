export default function OneButtonCard({
  title,
  text,
  buttonText,
  buttonPath,
}: {
  title: string;
  text: string;
  buttonText: string;
  buttonPath: string;
}) {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded border border-gray-200 shadow-lg">
      <div className="px-6 py-4">
        <h2 className="mb-2 text-center text-xl font-bold">{title}</h2>
        <p>{text}</p>
      </div>
      <div className="flex justify-center px-6 py-4">
        <a href={buttonPath}>
          <button className="rounded bg-green-700 px-4 py-2 font-bold text-white hover:bg-green-800">
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
}
