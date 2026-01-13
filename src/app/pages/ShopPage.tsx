import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';
import { Sparkles } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'ChatGPT Premium',
    description: 'Tài khoản ChatGPT Plus với GPT-4 không giới hạn',
    price: 150000,
    stock: 25,
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Midjourney Pro',
    description: 'Tài khoản Midjourney Pro - tạo hình ảnh AI chuyên nghiệp',
    price: 200000,
    stock: 15,
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Claude AI',
    description: 'Tài khoản Claude Pro với khả năng phân tích mạnh mẽ',
    price: 180000,
    stock: 30,
    rating: 4.9,
  },
  {
    id: 4,
    name: 'GitHub Copilot',
    description: 'Tài khoản GitHub Copilot - trợ lý lập trình AI',
    price: 120000,
    stock: 40,
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Jasper AI',
    description: 'Tài khoản Jasper AI - viết nội dung marketing chuyên nghiệp',
    price: 220000,
    stock: 8,
    rating: 4.6,
  },
  {
    id: 6,
    name: 'Copy.ai Premium',
    description: 'Tài khoản Copy.ai Premium - tạo nội dung tự động',
    price: 100000,
    stock: 50,
    rating: 4.5,
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-6 py-3 rounded-full mb-4 border border-cyan-500/30"
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Premium AI Accounts</span>
          </motion.div>
          
          <h1 className="text-5xl font-bold text-white mb-4">
            Gian Hàng{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tài Khoản AI
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cung cấp các tài khoản AI premium uy tín, giá tốt nhất thị trường
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              delay={index * 0.1}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
