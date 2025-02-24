import React, { useState } from 'react';
import { Users, Plus, Search, Mail } from 'lucide-react';

interface Member {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  booksIssued: number;
  avatar: string;
}

const dummyMembers: Member[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    joinDate: '2024-01-15',
    booksIssued: 2,
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    joinDate: '2024-02-20',
    booksIssued: 1,
    avatar:
      'https://images.unsplash.com/photo-1502764613149-7f1d229e2300?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80',
  },
];

export default function Members() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Members</h1>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Add New Member
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search members..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select className="border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2">
              <option value="all">All Members</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700">
          {dummyMembers
            .filter((member) =>
              member.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 last:border-0"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      {member.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Joined: {member.joinDate}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Books Issued: {member.booksIssued}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">
                      Edit
                    </button>
                    <button className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium">
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
