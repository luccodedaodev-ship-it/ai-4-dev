import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingBag, Wallet, FileText, Receipt, User } from 'lucide-react';

export function Header() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Gian Hàng', icon: ShoppingBag },
    { path: '/deposit', label: 'Nạp Tiền', icon: Wallet },
    { path: '/blog', label: 'Bài Viết', icon: FileText },
    { path: '/bills', label: 'Bill Uy Tín', icon: Receipt },
    { path: '/profile', label: 'Giới Thiệu', icon: User },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-base">AI</span>
              </div>
              <span className="text-gray-900 font-semibold text-lg">AI4DEV</span>
            </motion.div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${isActive
                      ? 'bg-gray-100 text-blue-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden md:block font-medium">{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
