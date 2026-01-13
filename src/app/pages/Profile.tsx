import { motion } from 'motion/react';
import { Shield, Users, Clock, Award, Star, CheckCircle } from 'lucide-react';
import { GlassCard } from '@/app/components/GlassCard';

export function Profile() {
    const stats = [
        { label: 'Khách Hàng', value: '1800+', icon: Users, color: 'text-blue-500' },
        { label: 'Kinh Nghiệm', value: '3 Năm', icon: Clock, color: 'text-green-500' },
        { label: 'Đánh Giá 5*', value: '99%', icon: Star, color: 'text-yellow-500' },
        { label: 'Bảo Hành', value: '24/7', icon: Shield, color: 'text-purple-500' },
    ];

    const commitments = [
        {
            title: 'Bảo Hành Trọn Đời',
            description: 'Cam kết bảo hành 1 đổi 1 trong suốt thời gian sử dụng tài khoản.',
            icon: Shield,
        },
        {
            title: 'Hỗ Trợ Nhanh Chóng',
            description: 'Đội ngũ support online 24/7, xử lý mọi vấn đề trong 15 phút.',
            icon: Clock,
        },
        {
            title: 'Tài Khoản Chất Lượng',
            description: '100% tài khoản chính chủ, private, không share, độ ổn định cao.',
            icon: Award,
        },
        {
            title: 'Giá Cả Cạnh Tranh',
            description: 'Mức giá tốt nhất thị trường đi kèm chất lượng dịch vụ vượt trội.',
            icon: CheckCircle,
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-20 px-6">
            <div className="mx-auto max-w-4xl">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
                    >
                        <Shield className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-700 text-sm font-medium">Uy Tín Tạo Nên Thương Hiệu</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Về Đội Ngũ
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ml-3">
                            AI4DEV
                        </span>
                    </h1>

                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Chúng tôi tự hào là đơn vị cung cấp các giải pháp tài khoản AI hàng đầu tại Việt Nam,
                        mang đến cho cộng đồng Developer và Creator những công cụ mạnh mẽ nhất.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {stats.map((stat, index) => (
                        <GlassCard key={index} delay={index * 0.1}>
                            <div className="p-6 text-center">
                                <div className={`w-12 h-12 mx-auto rounded-full bg-gray-50 flex items-center justify-center mb-3 ${stat.color}`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                            </div>
                        </GlassCard>
                    ))}
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Sứ Mệnh</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            AI4DEV ra đời với sứ mệnh phổ cập công nghệ AI đến với mọi người dùng Việt Nam với chi phí hợp lý nhất.
                            Chúng tôi hiểu rằng việc tiếp cận các công cụ như GPT-4, Claude 3 hay Midjourney đôi khi gặp trở ngại
                            về thanh toán quốc tế và chi phí cao.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Vì vậy, chúng tôi cung cấp giải pháp tài khoản Shared và Private chất lượng cao, giúp bạn tiết kiệm
                            tới 70% chi phí mà vẫn trải nghiệm đầy đủ tính năng.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col justify-center space-y-4"
                    >
                        {commitments.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Contact Section */}
                <GlassCard>
                    <div className="p-8 text-center bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Cần Hỗ Trợ Tư Vấn?</h2>
                        <p className="text-gray-600 mb-6">Đội ngũ chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc của bạn</p>
                        <a
                            href="https://www.facebook.com/phuclucc/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                        >
                            Liên Hệ Ngay
                        </a>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
}
