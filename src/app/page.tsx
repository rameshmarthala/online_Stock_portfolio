// src/app/page.tsx

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Welcome to My Portfolio Tracker</h1>
      <p className="text-lg mb-6 text-gray-700">
        Monitor your stock and cryptocurrency investments in one place.
      </p>
      <Link href="/portfolio">
        <p className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
          View Portfolio
        </p>
      </Link>
    </div>
  );
}
