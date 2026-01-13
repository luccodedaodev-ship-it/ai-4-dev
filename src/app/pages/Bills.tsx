import { motion, AnimatePresence } from 'motion/react';
import { GlassCard } from '@/app/components/GlassCard';
import { CheckCircle, Star, MessageCircle, ZoomIn, X } from 'lucide-react';
import { useState } from 'react';

const bills = [
  {
    id: 1,
    customer: 'Nguyễn V***',
    product: 'ChatGPT Premium',
    amount: '269.000đ',
    date: '15/01/2026',
    rating: 5,
    feedback: 'Tài khoản chạy rất mượt, giá rẻ, hỗ trợ nhiệt tình. Sẽ ủng hộ shop lâu dài!',
    proofImage: 'https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-6/613000594_1283425613620975_702140575692491393_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=669761&_nc_eui2=AeE1bRsBCCd1FOou1QglrQG3WZyUaVgKhWFZnJRpWAqFYWwVfLgQxVWLV3VX-waImfao2xuZy-rajBZeDIH4uFhQ&_nc_ohc=0eUFiLcBUYkQ7kNvwEcfFuJ&_nc_oc=AdldoqWmDJu_oMqOkNSI4EoPCUJjrwB2TRLn33bA5F28ApbjphtzvQgcbrNhJl4ZMIo&_nc_zt=23&_nc_ht=scontent.fdad4-1.fna&_nc_gid=oRuytYnYHs2weP6QpiqHhg&oh=00_AfqORqvhpI07wU9KBuk-hcQThynww_8Egfb-lHqo_rNFgA&oe=696CA03C',
  },
  {
    id: 2,
    customer: 'Trần T***',
    product: 'Midjourney Pro',
    amount: '329.000đ',
    date: '15/01/2026',
    rating: 5,
    feedback: 'Acc chất lượng, giá tốt. Shop giao hàng nhanh. Recommended!',
    proofImage: 'https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-6/611250128_1284264790203724_5437907000879530279_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=669761&_nc_eui2=AeH2HJsame84SUTodk-zMR2ElOovWxV2DIGU6i9bFXYMgZugqPsgWcSXZP1xZ8cNhuR6ZZxDH7dM0stLTegeOWqW&_nc_ohc=X1DTbgjafD0Q7kNvwGKV0xR&_nc_oc=Adn-D6IsE2C_o-2-HcqPq9BssshXezZVyu2g8pUMx02DAnYiuGnyrjX-x5u4WynSqtg&_nc_zt=23&_nc_ht=scontent.fdad4-1.fna&_nc_gid=oRuytYnYHs2weP6QpiqHhg&oh=00_Afo-lfNiXCfcDDo5dE94x0iAOzzBxAZ-6xjjFHYhRXhC5Q&oe=696C7B70',
  },
  {
    id: 3,
    customer: 'Lê M***',
    product: 'Claude Pro',
    amount: '50.000đ',
    date: '14/01/2026',
    rating: 5,
    feedback: 'Mua lần 3 rồi, vẫn ổn định như thường. Cảm ơn shop nhiều!',
    proofImage: 'https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-6/612588281_1285361220094081_4326355685600539965_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=669761&_nc_eui2=AeEcP7i82zm7L7iq6nonBffb053POi-7GhzTnc86L7saHGlAYuTZ2e3y_0sAliEm8xPnyOv5RR4dOTzKRag1UoxC&_nc_ohc=fCIM26XMsw4Q7kNvwHW6Q7i&_nc_oc=AdnaE5qefBWgIs9Uh82M9nRgD4S5NVmeXH6D966S0F-kcViz3wBSczyNG7lhX0tbjbQ&_nc_zt=23&_nc_ht=scontent.fdad4-1.fna&_nc_gid=oRuytYnYHs2weP6QpiqHhg&oh=00_AfrUuzdXrhJc6vjABhGREHZFY1-CBY3159wR_If4zQLhDQ&oe=696C76EC',
  },
  {
    id: 4,
    customer: 'Phạm H***',
    product: 'DALL-E Premium',
    amount: '49.000đ',
    date: '14/01/2026',
    rating: 5,
    feedback: 'Tài khoản chính hãng, không lỗi. Giá cả phải chăng. 10/10!',
    proofImage: 'https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-6/612309188_1285635126733357_6562652157580133605_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=669761&_nc_eui2=AeEtG44kgBSszfureEDLb3kyNsXAP2KgPs82xcA_YqA-z13bzju2TljyGPN4HNPcFuDhAIgZmnB4KTXEoanmzpr3&_nc_ohc=UTJS5UoZADUQ7kNvwEsOQKd&_nc_oc=Adm_3--XDoeTYG-bBl6ogLgPCcJa0VkDVcluBunkAgvgfGgJ3--oBEDio-F46jCp61A&_nc_zt=23&_nc_ht=scontent.fdad4-1.fna&_nc_gid=oRuytYnYHs2weP6QpiqHhg&oh=00_Afqk4WI3zhg1juUZI_tGBfC6z7RQRfy5a5F2arSn9GtoAg&oe=696C9D0C',
  },
  {
    id: 5,
    customer: 'Võ D***',
    product: 'ChatGPT Premium',
    amount: '1.980.000đ',
    date: '13/01/2026',
    rating: 5,
    feedback: 'Shop uy tín, giao hàng nhanh. Tài khoản hoạt động tốt!',
    proofImage: 'https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-6/614152414_1287161576580712_3643625921073920827_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=669761&_nc_eui2=AeHydUPtcxte3ebUm7NJZpBhYSvK25AWx19hK8rbkBbHX8S8XJSxw_UTC1YNQtvbNEo0Bi3hgCs90kpy_9tYnCGU&_nc_ohc=1wka9kpkBs4Q7kNvwHQ2hc5&_nc_oc=Adl7nYmxL88yzTDYuDL3eVyXgheHGor50Eh1wVtxzZdC-LBNSTAbYVwpK_96_jnPocI&_nc_zt=23&_nc_ht=scontent.fdad4-1.fna&_nc_gid=oRuytYnYHs2weP6QpiqHhg&oh=00_Afo1YwMUWwP8WEdAm3bVFUOpCtbiTUclKZ866vnNqpi2JA&oe=696C7D59',
  },
  {
    id: 6,
    customer: 'Hoàng K***',
    product: 'Gemini Advanced',
    amount: '50.000đ',
    date: '13/01/2026',
    rating: 5,
    feedback: 'Mình đã thử nhiều shop, đây là shop tốt nhất! Cảm ơn admin!',
    proofImage: 'https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-6/615216221_1287518639878339_2620424665124162877_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=669761&_nc_eui2=AeHq62849iE-hZFqku0U11n0PFq5BKPVeOQ8WrkEo9V45GrGFm4vle8uVIUN8PA-o-S_Pf4DVbE3U7tZ3-dlIMbJ&_nc_ohc=HjWI6qR4PY4Q7kNvwEU1VpL&_nc_oc=AdkX7FvvJj8TRTk5nm3ERav55_vSovk56UmWjxrLGZPZOCqswsXGvL-LfxaDyhavN3s&_nc_zt=23&_nc_ht=scontent.fdad4-1.fna&_nc_gid=oRuytYnYHs2weP6QpiqHhg&oh=00_AfpGyjUcMsTkXnpDC923m51IJeJxaXiQh06MF_gkestC_w&oe=696C9204',
  },
];

const stats = [
  { label: 'Tổng Đơn Hàng', value: '2214' },
  { label: 'Khách Hàng', value: '1853' },
  { label: 'Đánh Giá 5 Sao', value: '95%' },
  { label: 'Tỷ Lệ Hài Lòng', value: '92%' },
];

export function Bills() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            Bill Chứng Minh Uy Tín
          </h1>
          <p className="text-gray-600 text-lg">
            Những đánh giá chân thực từ khách hàng đã mua tài khoản
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <div className="p-6 text-center">
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                  className="text-3xl font-bold text-gray-900 mb-2"
                >
                  {stat.value}
                </motion.p>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Bills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bills.map((bill, index) => (
            <GlassCard key={bill.id} delay={index * 0.1}>
              <div className="p-6">
                {/* Customer Info */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center border-2 border-white shadow-sm">
                    <span className="text-white text-lg font-bold">
                      {bill.customer.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-semibold">{bill.customer}</h3>
                    <p className="text-gray-500 text-sm font-medium">{bill.date}</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 text-green-700 border border-green-200">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-xs font-semibold">Đã mua</span>
                  </div>
                </div>

                {/* Purchase Info */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-200 mb-5">
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-0.5">Sản phẩm</p>
                    <p className="text-gray-900 font-semibold">{bill.product}</p>
                  </div>
                  <p className="text-blue-600 font-bold">{bill.amount}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(bill.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Feedback */}
                <div className="flex gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100 mb-4">
                  <MessageCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">
                    "{bill.feedback}"
                  </p>
                </div>

                {/* Proof Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedImage(bill.proofImage)}
                  className="relative rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={bill.proofImage}
                    alt="Proof"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
                  </div>
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
                    Ảnh thực tế
                  </div>
                </motion.div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <GlassCard>
            <div className="p-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-green-500/30">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                100% Uy Tín
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Chúng tôi cam kết cung cấp tài khoản chính hãng, có bảo hành và hỗ trợ 24/7.
                Mọi giao dịch đều được bảo mật và xác minh kỹ lưỡng.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] bg-transparent rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage}
                alt="Proof Full Size"
                className="w-full h-full object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
