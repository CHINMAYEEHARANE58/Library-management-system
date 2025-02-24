import React, { useState } from 'react';
import { Book as BookIcon, Plus, Search } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  isbn: string;
  available: boolean;
  coverUrl: string;
}

const dummyBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publisher: 'Scribner',
    isbn: '9780743273565',
    available: true,
    coverUrl:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    publisher: 'Secker & Warburg',
    isbn: '9780451524935',
    available: false,
    coverUrl:
      'https://images.unsplash.com/photo-1570197571497-1f9754e40f2f?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    id: '3',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publisher: 'J.B. Lippincott & Co.',
    isbn: '9780061120084',
    available: true,
    coverUrl:
      'https://images.unsplash.com/photo-1553729784-e91953dec042?auto=format&fit=crop&q=80&w=100&h=100',
  },
];

export default function Books() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Books</h1>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Add New Book
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search books..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select className="border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2">
            <option value="all">All Books</option>
            <option value="available">Available</option>
            <option value="borrowed">Borrowed</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyBooks
            .filter((book) =>
              book.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((book) => (
              <div
                key={book.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex space-x-4"
              >
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="h-32 w-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {book.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {book.publisher}
                  </p>
                  <div className="mt-2">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        book.available
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}
                    >
                      {book.available ? 'Available' : 'Borrowed'}
                    </span>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm font-medium">
                      Edit
                    </button>
                    <button className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm font-medium">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
