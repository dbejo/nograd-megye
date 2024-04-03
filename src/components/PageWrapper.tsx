export default function PageWrapper({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className="pt-20">
      <div className="mx-auto flex max-w-screen-xl">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
