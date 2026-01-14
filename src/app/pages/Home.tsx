import { motion, AnimatePresence } from 'motion/react';
import { GlassCard } from '@/app/components/GlassCard';
import { ShoppingCart, Star, Sparkles, X, Check, Copy, Search, Filter, Zap, Upload, Loader2, MessageCircle, Send } from 'lucide-react';
import chatgptImage from '@/assets/chatgpt.png';
import cursorImage from '@/assets/cursor-ai-logo.jpg';
import qrImage from '@/assets/qr.jpg';
import { useState, useRef } from 'react';

const products = [
  {
    id: 1,
    name: 'Antigravity IDE',
    price: '199.000đ',
    duration: '1 năm',
    rating: 4.7,
    sold: 156,
    image: 'https://codinglap.com/wp-content/uploads/2025/12/How-to-Install-Antigravity-AI-IDE-on-Windows-11-1024x576.jpg',
    features: ['Gemini Ultra', 'Integration', 'Multi-Modal'],
    gradient: 'from-blue-400 to-indigo-500',
    bestSeller: true,
  },
  {
    id: 6,
    name: 'Canva Pro',
    price: '119.000đ',
    duration: '3 năm',
    rating: 4.8,
    sold: 203,
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/c8/f3/2c/c8f32cfd-75b4-ca24-bd21-1d46fe8e39b6/icon.png/1200x630wa.png',
    features: ['HD Generation', 'Unlimited Edits', 'Style Transfer'],
    gradient: 'from-pink-400 to-rose-500',
    bestSeller: true,
  },
  {
    id: 2,
    name: 'Cursor Pro Plan (Chính chủ)',
    price: '329.000đ',
    duration: '1 tháng',
    rating: 4.8,
    sold: 264,
    image: cursorImage,
    features: ['Claude 3 Opus', 'Extended Context', 'Fast Response'],
    gradient: 'from-orange-400 to-amber-500',
    bestSeller: true,
  },
  // {
  //   id: 3,
  //   name: 'ChatGPT Plus',
  //   price: '60.000đ',
  //   duration: '1 tháng',
  //   rating: 4.9,
  //   sold: 277,
  //   image: chatgptImage,
  //   features: ['Tokens', 'Advanced Analysis', 'Priority Access'],
  //   gradient: 'from-emerald-400 to-teal-500',
  //   bestSeller: true,
  // },
  {
    id: 4,
    name: 'Cursor Pro Plan (Cấp acc)',
    price: '299.000đ',
    duration: '1 tháng',
    rating: 4.8,
    sold: 161,
    image: cursorImage,
    features: ['Claude 3 Opus', 'Extended Context', 'Fast Response'],
    gradient: 'from-orange-400 to-amber-500',
  },
  {
    id: 5,
    name: 'Cursor Pro Plus',
    price: '769.000đ',
    duration: '1 tháng',
    rating: 4.8,
    sold: 139,
    image: cursorImage,
    features: ['x3 Request', 'Extended Context', 'Fast Response'],
    gradient: 'from-orange-400 to-amber-500',
  },
];

export function Home() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [formData, setFormData] = useState({
    phone: '',
    confirmPhone: '',
    email: ''
  });
  const [proofFile, setProofFile] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // REPLACE THIS WITH YOUR ACTUAL APP SCRIPT URL
  const APP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzkf_IJB4YiOtycVYFaL5t65TukaS4bkTs3eDrWgzsAyLUFZpIjfzR-wG_OZ6Vm59ppuw/exec";

  const parsePrice = (price: string) => parseInt(price.replace(/\D/g, ''));

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const price = parsePrice(product.price);

    let matchesPrice = true;
    switch (priceFilter) {
      case 'under100':
        matchesPrice = price < 100000;
        break;
      case '100to200':
        matchesPrice = price >= 100000 && price <= 200000;
        break;
      case 'over200':
        matchesPrice = price > 200000;
        break;
    }

    return matchesSearch && matchesPrice;
  });

  const handleBuy = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setProofFile(null); // Reset proof
    setFormData({ phone: '', confirmPhone: '', email: '' }); // Reset form
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setProofFile(null);
    setFormData({ phone: '', confirmPhone: '', email: '' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProofFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!formData.phone || !formData.email || !proofFile) {
      alert("Vui lòng điền đầy đủ thông tin và tải lên ảnh chuyển khoản!");
      return;
    }

    setIsSubmitting(true);

    try {
      if (!APP_SCRIPT_URL) {
        // Simulation for demo purposes if URL not set
        await new Promise(resolve => setTimeout(resolve, 2000));
        setShowSuccess(true);
      } else {
        await fetch(APP_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Important for Google Apps Script
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            product: selectedProduct?.name,
            price: selectedProduct?.price,
            ...formData,
            proofImage: proofFile
          })
        });
        setShowSuccess(true);
      }
      handleClose();
    } catch (error) {
      console.error("Error submitting:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại hoặc liên hệ Admin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Modern Hero Section */}
        <div className="relative mb-24">
          <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl opacity-50 animate-pulse delay-700" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700 text-sm font-medium">Top #1 Shop AI Uy Tín Tại Việt Nam</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
                Upgrade Workflow
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  With Super AI
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Sở hữu tài khoản Premium chính hãng (ChatGPT, Claude, Cursor...) với chi phí tiết kiệm nhất. Bảo hành trọn đời.
              </p>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-500/25 hover:bg-blue-700 transition-colors"
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Xem Sản Phẩm
                </motion.button>
                <div className="flex items-center gap-2 px-6 py-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-600">1.8k+ Devs tin dùng</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 grid grid-cols-2 gap-6 scale-90 rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out">
                <GlassCard className="p-6 bg-white/60 backdrop-blur-md">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="font-bold text-gray-900">ChatGPT Plus</h3>
                  <p className="text-sm text-gray-500">Mô hình GPT-4o mạnh mẽ nhất</p>
                </GlassCard>
                <GlassCard className="p-6 bg-white/60 backdrop-blur-md mt-12">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-bold text-gray-900">Claude 3.5 Sonnet</h3>
                  <p className="text-sm text-gray-500">Code & Logic đỉnh cao</p>
                </GlassCard>
                <GlassCard className="p-6 bg-white/60 backdrop-blur-md -mt-12">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="font-bold text-gray-900">Canva Pro</h3>
                  <p className="text-sm text-gray-500">Sáng tạo hình ảnh vô hạn</p>
                </GlassCard>
                <GlassCard className="p-6 bg-white/60 backdrop-blur-md">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <span className="text-2xl">💠</span>
                  </div>
                  <h3 className="font-bold text-gray-900">Gemini Pro</h3>
                  <p className="text-sm text-gray-500">Đa phương thức thế hệ mới</p>
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-y border-gray-100 py-8 mb-20 bg-white/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 text-gray-600 font-medium">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <div>
              <p className="text-gray-900 font-bold leading-tight">Giao Hàng Tự Động</p>
              <p className="text-xs">Nhận acc sau 30s</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-600 font-medium">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div>
              <p className="text-gray-900 font-bold leading-tight">Bảo Hành 1-1</p>
              <p className="text-xs">Cam kết uy tín 100%</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-600 font-medium">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
              <p className="text-gray-900 font-bold leading-tight">Hỗ Trợ 24/7</p>
              <p className="text-xs">Kỹ thuật viên tận tâm</p>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div id="products">
          <div className="flex flex-col md:flex-row gap-8 mb-12 items-end">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sản Phẩm Nổi Bật</h2>
              <p className="text-gray-500">Các gói tài khoản tốt nhất dành cho Developer & Designer</p>
            </div>

            <div className="flex gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
                />
              </div>
              <div className="relative min-w-[160px]">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm appearance-none cursor-pointer text-sm font-medium"
                >
                  <option value="all">Tất cả giá</option>
                  <option value="under100">Dưới 100k</option>
                  <option value="100to200">100k - 200k</option>
                  <option value="over200">Trên 200k</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <GlassCard key={product.id} delay={index * 0.1}>
                <div className="group relative">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-60" />

                    {product.bestSeller && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-orange-500/20 z-10">
                        <Zap className="w-3.5 h-3.5 fill-white" />
                        Best Seller
                      </div>
                    )}

                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-gray-900 px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      {product.rating}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-end justify-between mb-6">
                      <div>
                        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Giá bán</p>
                        <p className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          {product.price}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Thời hạn</p>
                        <div className="inline-block px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-sm font-semibold">
                          {product.duration}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6 pt-6 border-t border-gray-100">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleBuy(product)}
                      className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg transition-all bg-gradient-to-r ${product.gradient} shadow-blue-500/25 hover:shadow-blue-500/40`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Mua Ngay
                    </motion.button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 overflow-y-auto"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 px-4"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                {/* Modal Header */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Thanh Toán & Xác Nhận</h3>
                  <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="p-6 max-h-[80vh] overflow-y-auto">
                  {/* QR Code Section */}
                  <div className="text-center mb-8 bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <p className="text-sm font-medium text-blue-600 mb-4">Quét mã QR để thanh toán</p>
                    <div className="w-48 h-48 bg-white p-2 rounded-xl mx-auto shadow-sm mb-4">
                      {/* Placeholder QR */}
                      <img
                        src={qrImage}
                        alt="QR Code"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-lg font-bold text-gray-900">{selectedProduct.price}</p>
                    <p className="text-sm text-gray-500">{selectedProduct.name}</p>
                  </div>

                  {/* Customer Info Form */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Thông tin nhận tài khoản</h4>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại Zalo</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        placeholder="0987..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Xác nhận số điện thoại</label>
                      <input
                        type="tel"
                        value={formData.confirmPhone}
                        onChange={(e) => setFormData({ ...formData, confirmPhone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        placeholder="Nhập lại số điện thoại"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email nhận thông tin</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        placeholder="name@example.com"
                      />
                    </div>

                    <div className="pt-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Minh chứng thanh toán (Ảnh chụp màn hình)</label>
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-gray-300 rounded-xl p-4 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all text-center"
                      >
                        <input
                          type="file"
                          ref={fileInputRef}
                          className="hidden"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                        {proofFile ? (
                          <div className="relative">
                            <img src={proofFile} alt="Proof Preview" className="h-32 w-auto mx-auto rounded-lg object-contain" />
                            <button
                              onClick={(e) => { e.stopPropagation(); setProofFile(null); }}
                              className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2 py-2">
                            <Upload className="w-8 h-8 text-gray-400" />
                            <p className="text-sm text-gray-500">Nhấn để tải ảnh lên</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Đang xử lý...
                          </>
                        ) : (
                          <>
                            <Check className="w-5 h-5" />
                            Xác Nhận Đã Thanh Toán
                          </>
                        )}
                      </button>
                      <p className="text-xs text-center text-gray-500 mt-3">
                        Sau khi chuyển khoản, vui lòng bấm xác nhận. Hệ thống sẽ gửi tài khoản qua Zalo/Email trong vòng 15 phút.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccess && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={() => setShowSuccess(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[60] px-4"
            >
              <div className="bg-white rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden">
                {/* Confetti Background Effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-50 to-white -z-10" />

                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                  >
                    <Check className="w-10 h-10 text-green-600 stroke-[4]" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 0, scale: 2.5 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 bg-green-400 rounded-full opacity-20"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thanh Toán Thành Công!</h3>
                <p className="text-gray-600 mb-8">
                  Cảm ơn bạn đã tin tưởng. Đơn hàng đang được xử lý và sẽ gửi đến bạn trong giây lát.
                </p>

                <div className="bg-blue-50 rounded-xl p-4 mb-8 border border-blue-100">
                  <p className="text-sm font-semibold text-blue-800 mb-3 uppercase tracking-wider">Hỗ Trợ Trực Tuyến 24/7</p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">Z</div>
                      <div className="text-left">
                        <p className="text-xs text-gray-500">Zalo Support</p>
                        <p className="font-bold text-gray-900">0367545048</p>
                      </div>
                      <button
                        onClick={() => navigator.clipboard.writeText('0367545048')}
                        className="ml-auto p-2 text-gray-400 hover:text-blue-600"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white">
                        <Send className="w-4 h-4 ml-0.5" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-gray-500">Telegram</p>
                        <p className="font-bold text-gray-900">@defautmmo</p>
                      </div>
                      <button
                        onClick={() => navigator.clipboard.writeText('@defautmmo')}
                        className="ml-auto p-2 text-gray-400 hover:text-blue-600"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowSuccess(false)}
                  className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-bold hover:bg-black transition-colors"
                >
                  Đóng
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
