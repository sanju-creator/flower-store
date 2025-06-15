// export default App;
import React, { useEffect, useState } from 'react';
import DashboardLayout from './layouts/DashboardLayout';

const S3_BUCKET_URL = 'https://freshpetals.s3.us-east-1.amazonaws.com/'; // Replace with your real bucket URL

const flowers = [
  "1000001081.jpg",
  "1000001398.jpg",
  "1000001491.jpg",
  "1000002358.jpg",
];

const WHATSAPP_NUMBER = '919999999999'; // Replace with your WhatsApp number

function App() {
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState(flowers);

  useEffect(() => {
    setFiltered(
      flowers.filter((img) =>
        img.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">🌸 Flower Store</h1>

        <div className="max-w-md mb-6">
          <input
            className="border p-2 w-full rounded"
            placeholder="Search flowers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((filename, idx) => {
            const flowerName = filename.replace(/\.[^/.]+$/, '');
            const waMessage = encodeURIComponent(`Hello! I want to buy ${flowerName}.`);
            return (
              <div key={idx} className="rounded-2xl shadow-lg overflow-hidden border">
                <img
                  src={`${S3_BUCKET_URL}${filename}`}
                  alt={flowerName}
                  className="w-full h-64 object-cover"
                />
                <div className="text-center font-medium capitalize p-2">
                  {flowerName}
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-white bg-green-500 hover:bg-green-600 p-2"
                >
                  💬 Buy on WhatsApp
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;
