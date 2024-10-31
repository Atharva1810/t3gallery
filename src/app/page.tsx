import Link from "next/link";

export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/S23XiUkZcldXK6hc8FU4uDXEVBCqZygKvLsJdRT9rHW5Iect",
    "https://utfs.io/f/S23XiUkZcldXOEUEmUIQpwEeIjMFVoD5AnR3tiNlU46SGmgT",
    "https://utfs.io/f/S23XiUkZcldXaodvsDYuxVoHFJURsOSzCdagnGWkI8hQE2lj",
    "https://utfs.io/f/S23XiUkZcldXrahLTp9m1ADR3sEfbGj4XQHSIPw82UkTLJv6",
    "https://utfs.io/f/S23XiUkZcldXUMew4H9jV02JgEZPskmNuboqSvcQnTw7Aj1B",
  ];

  const mockImages = mockUrls.map((url, index) => {
    return { id: index + 1, url };
  });
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
