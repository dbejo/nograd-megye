function GalleryItem({ imgPath, imgAlt }: { imgPath: string; imgAlt: string }) {
  return (
    <>
      <img
        className="h-72 w-full cursor-pointer rounded object-cover transition hover:opacity-75"
        src={imgPath}
        alt={imgAlt}
      />
    </>
  );
}

export default function Gallery() {
  return (
    <main>
      <div className="grid grid-cols-4 gap-4">
        <GalleryItem
          imgPath="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          imgAlt="Gecko"
        />
        <GalleryItem
          imgPath="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          imgAlt="Gecko"
        />
        <GalleryItem
          imgPath="https://www.adobe.com/products/media_14562ad96c12a2f3030725ae81bd3ede1c68cb783.jpeg?width=750&format=jpeg&optimize=medium"
          imgAlt="Dog"
        />
        <GalleryItem
          imgPath="https://www.adobe.com/products/media_14562ad96c12a2f3030725ae81bd3ede1c68cb783.jpeg?width=750&format=jpeg&optimize=medium"
          imgAlt="Dog"
        />
        <GalleryItem
          imgPath="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          imgAlt="Gecko"
        />
        <GalleryItem
          imgPath="https://www.adobe.com/products/media_14562ad96c12a2f3030725ae81bd3ede1c68cb783.jpeg?width=750&format=jpeg&optimize=medium"
          imgAlt="Dog"
        />
      </div>
    </main>
  );
}
