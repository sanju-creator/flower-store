import { useEffect, useState } from "react";

const S3_BUCKET_URL = "https://freshpetals.s3.us-east-1.amazonaws.com/"; 

const flowers = [
  "1000001081.jpg ",
  "1000001083.jpg",
  "1000001491.jpg",
  "1000002418.jpg",
  // Add more image names if needed
];

function App() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(flowers);

  useEffect(() => {
    setFiltered(
      flowers.filter((img) =>
        img.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">🌸 Fresh Petals</h1>

      <div className="max-w-md mx-auto mb-6">
        <input
          className="border p-2 w-full rounded"
          placeholder="Search flowers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((filename, idx) => (
          <div key={idx} className="rounded-2xl shadow-lg overflow-hidden">
            <img
              src={`${S3_BUCKET_URL}${filename}`}
              alt={filename}
              className="w-full h-64 object-cover"
            />
            <div className="text-center font-medium capitalize p-2">
              {filename.replace(/\.[^/.]+$/, "")}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-sm text-gray-500">© 2025 Fresh Petals</p>
      </div>
    </div>
  );
}

export default App;
