import React from 'react';
import { Link, Outlet, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Users,
  Home,
  LogOut,
  BookMarked,
  Moon,
  Sun,
} from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

const navItems = [
  { path: '/', icon: Home, label: 'Dashboard' },
  { path: '/books', icon: BookOpen, label: 'Books' },
  { path: '/members', icon: Users, label: 'Members' },
  { path: '/issuance', icon: BookMarked, label: 'Issuance' },
];

export default function Layout() {
  const { isAuthenticated, logout } = useAuthStore();
  const [isDark, setIsDark] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg">
          <div className="h-full px-3 py-4 flex flex-col">
            <div className="flex items-center mb-8 px-2">
              <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-3 text-xl font-bold text-gray-800 dark:text-white">
                Library MS
              </span>
            </div>
            
            <nav className="flex-1 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-2 py-2 text-sm font-medium rounded-lg ${
                      isActive
                        ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-white'
                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
              <button
                onClick={() => setIsDark(!isDark)}
                className="flex w-full items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 mr-3" />
                ) : (
                  <Moon className="h-5 w-5 mr-3" />
                )}
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
              
              <button
                onClick={logout}
                className="flex w-full items-center px-2 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
              >
                <LogOut className="h-5 w-5 mr-3" />
                Logout
              </button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="p-8"
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
}