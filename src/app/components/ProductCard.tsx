import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';
import GlassCard from './GlassCard';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  stock: number;
  rating: number;
  delay?: number;
}

export default function ProductCard({ 
  name, 
  description, 
  price, 
  stock, 
  rating,
  delay = 0 
}: ProductCardProps) {
  return (
    <GlassCard delay={delay}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
          <div className="flex items-center space-x-1 bg-yellow-500/20 px-2 py-1 rounded-lg">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold">{rating}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Giá:</span>
            <span className="text-2xl font-bold text-cyan-400">
              {price.toLocaleString('vi-VN')}đ
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">Còn lại:</span>
            <span className={`font-semibold ${stock > 10 ? 'text-green-400' : 'text-orange-400'}`}>
              {stock} tài khoản
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-xl flex items-center justify-center space-x-2 transition-all"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="font-semibold">Mua Ngay</span>
          </motion.button>
        </div>
      </div>
    </GlassCard>
  );
}
