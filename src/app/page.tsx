import { db } from "~/server/db";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col gap-2">
            <img src={image.url} alt="image" />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
