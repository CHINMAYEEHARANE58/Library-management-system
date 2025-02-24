import React, { useState } from 'react';
import { Book, Users, Clock, AlertCircle } from 'lucide-react';
import StatCard from '../components/StatCard';

interface PendingReturn {
  id: string;
  bookTitle: string;
  memberName: string;
  dueDate: string;
  coverUrl: string;
}

const dummyPendingReturns: PendingReturn[] = [
  {
    id: '1',
    bookTitle: 'The Great Gatsby',
    memberName: 'John Doe',
    dueDate: '2024-03-15',
    coverUrl:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    id: '2',
    bookTitle: '1984',
    memberName: 'Jane Smith',
    dueDate: '2024-02-10',
    coverUrl:
      'https://images.unsplash.com/photo-1570197571497-1f9754e40f2f?auto=format&fit=crop&q=80&w=100&h=100',
  },
];

export default function Dashboard() {
  const [error, setError] = useState('');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
          Issue New Book
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Books" value="2,543" icon={Book} color="bg-blue-500" />
        <StatCard title="Active Members" value="891" icon={Users} color="bg-green-500" />
        <StatCard title="Books Issued" value="156" icon={Clock} color="bg-amber-500" />
        <StatCard title="Overdue Returns" value="23" icon={AlertCircle} color="bg-red-500" />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            Pending Returns
          </h2>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700">
          {error && <div>Error: {error}</div>}
          {dummyPendingReturns.length > 0 ? (
            dummyPendingReturns.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 last:border-0"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.coverUrl}
                    alt={item.bookTitle}
                    className="h-16 w-12 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                      {item.bookTitle}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.memberName}
                    </p>
                    <p className="text-sm text-red-600 dark:text-red-400 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      Due: {item.dueDate}
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
                  Return
                </button>
              </div>
            ))
          ) : (
            <div className="p-6">No pending returns.</div>
          )}
        </div>
      </div>
    </div>
  );
}
