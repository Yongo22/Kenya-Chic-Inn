'use client';
import { useState } from 'react';

const ROOMS = [
  { name: 'Executive Suite', price: 150 },
  { name: 'Deluxe Garden', price: 120 },
];

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePay = async (room, price) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({ amount: price, roomType: room }),
      });

      if (!res.ok) {
        throw new Error('Payment request failed');
      }

      const data = await res.json();
      if (!data.url) {
        throw new Error('Invalid payment response');
      }

      window.location.href = data.url;
    } catch (err) {
      setError('Failed to process payment. Please try again.');
      console.error('Payment error:', err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="p-6 border-b flex justify-between items-center bg-white sticky top-0 z-50">
        <h1 className="font-bold tracking-tighter text-xl">KENYA CHIC INN</h1>
        <button className="bg-black text-white px-6 py-2 text-xs font-bold uppercase">Menu</button>
      </nav>

      <header className="h-[60vh] relative flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hotel"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h2 className="text-5xl font-serif mb-4 italic">Nairobi Boutique Luxury</h2>
          <p className="tracking-widest uppercase text-sm">Save 15% with Crypto Payments</p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto py-16 px-6">
        {error && <div className="mb-6 alert-error">{error}</div>}

        <div className="grid gap-8 md:grid-cols-2">
          {ROOMS.map((room) => (
            <div
              key={room.name}
              className="bg-white p-6 border shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-serif mb-2">{room.name}</h3>
              <p className="text-gray-500 mb-6">${room.price} / Night</p>
              <button
                onClick={() => handlePay(room.name, room.price)}
                disabled={loading}
                className="btn-chic w-full"
              >
                {loading ? 'Processing...' : 'Book with Crypto'}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

