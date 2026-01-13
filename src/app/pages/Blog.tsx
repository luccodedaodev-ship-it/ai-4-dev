import { motion } from 'motion/react';
import { GlassCard } from '@/app/components/GlassCard';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Hướng Dẫn Sử Dụng ChatGPT Hiệu Quả',
    excerpt: 'Tìm hiểu các tips và tricks để tận dụng tối đa sức mạnh của ChatGPT trong công việc và học tập...',
    author: 'Admin',
    date: '15/01/2026',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    category: 'Tutorial',
  },

  {
    id: 4,
    title: 'AI Trong Thiết Kế Đồ Họa: Xu Hướng 2026',
    excerpt: 'Tổng quan về các công cụ AI đang thay đổi ngành thiết kế đồ họa và cách ứng dụng vào thực tế...',
    author: 'Admin',
    date: '12/01/2026',
    image: 'https://images.unsplash.com/photo-1655720033654-a4239dd42d10?w=600&h=400&fit=crop',
    category: 'Trend',
  },
  {
    id: 5,
    title: 'Bảo Mật Tài Khoản AI: Những Điều Cần Biết',
    excerpt: 'Hướng dẫn cách bảo vệ tài khoản AI của bạn khỏi các mối đe dọa bảo mật và sử dụng an toàn...',
    author: 'Admin',
    date: '11/01/2026',
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600&h=400&fit=crop',
    category: 'Security',
  },
  {
    id: 6,
    title: 'Top 10 Prompt Hay Cho ChatGPT',
    excerpt: 'Bộ sưu tập các prompt hữu ích giúp bạn khai thác tối đa khả năng của ChatGPT trong mọi tình huống...',
    author: 'Admin',
    date: '10/01/2026',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop',
    category: 'Tips',
  },
];

export function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Bài Viết & Tin Tức
          </h1>
          <p className="text-gray-600 text-lg">
            Cập nhật kiến thức và tin tức mới nhất về thế giới AI
          </p>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <GlassCard key={post.id} delay={index * 0.1}>
              <div className="overflow-hidden">
                {/* Post Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-5 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Post Meta */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        <span className="font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{post.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 hover:border-gray-300 transition-all group"
                  >
                    Đọc Thêm
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
