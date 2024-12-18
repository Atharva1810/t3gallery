import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col gap-2">
          <img src={image.url} alt="image" />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}
export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <p className="h-full w-full text-center text-2xl">
          Please sign in to view your images
        </p>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
