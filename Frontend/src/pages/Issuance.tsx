import React, { useState } from 'react';
import { Clock, Search, BookOpen, User, Calendar } from 'lucide-react';

interface Issuance {
  id: string;
  bookTitle: string;
  memberName: string;
  issueDate: string;
  dueDate: string;
  status: 'active' | 'returned';
  coverUrl: string;
}

const dummyIssuances: Issuance[] = [
  {
    id: '1',
    bookTitle: 'The Great Gatsby',
    memberName: 'John Doe',
    issueDate: '2024-02-15',
    dueDate: '2024-03-15',
    status: 'active',
    coverUrl:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    id: '2',
    bookTitle: '1984',
    memberName: 'Jane Smith',
    issueDate: '2024-01-10',
    dueDate: '2024-02-10',
    status: 'returned',
    coverUrl:
      'https://images.unsplash.com/photo-1570197571497-1f9754e40f2f?auto=format&fit=crop&q=80&w=100&h=100',
  },
];

export default function Issuance() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Book Issuance</h1>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center">
          <BookOpen className="h-5 w-5 mr-2" />
          Issue New Book
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search issuances..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select className="border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2">
              <option value="all">All Issuances</option>
              <option value="active">Active</option>
              <option value="returned">Returned</option>
            </select>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700">
          {dummyIssuances
            .filter((issuance) =>
              issuance.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((issuance) => (
              <div
                key={issuance.id}
                className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 last:border-0"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={issuance.coverUrl}
                    alt={issuance.bookTitle}
                    className="h-16 w-12 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {issuance.bookTitle}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {issuance.memberName}
                    </p>
                    <div className="flex items-center space-x-4 mt-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Issued: {issuance.issueDate}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Due: {issuance.dueDate}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      issuance.status === 'active'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {issuance.status === 'active' ? 'Active' : 'Returned'}
                  </span>
                  {issuance.status === 'active' && (
                    <button className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
                      Return
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
