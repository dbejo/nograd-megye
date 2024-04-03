export default function PageWrapper({
  children,
  title,
}: {
  children: JSX.Element | JSX.Element[];
  title: string;
}) {
  return (
    <div className="pt-20">
      <div className="mx-auto flex max-w-screen-xl">
        <div className="w-full">
          <h2 className="mb-4 text-2xl font-bold">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
}
