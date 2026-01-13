import { motion } from 'motion/react';
import { Wallet, Copy, CheckCircle, CreditCard, Building } from 'lucide-react';
import { GlassCard } from '@/app/components/GlassCard';
import { useState } from 'react';

const depositMethods = [
  {
    id: 'bank',
    name: 'Chuyển Khoản Ngân Hàng',
    icon: Building,
    info: {
      bank: 'Techcombank',
      accountNumber: '19075781452018',
      accountName: 'TRAN PHUC LUC',
      content: 'NAPTIEN [SĐT]',
    },
  },
  {
    id: 'momo',
    name: 'Ví MoMo',
    icon: Wallet,
    info: {
      phone: '0367545048',
      name: 'TRAN PHUC LUC',
      content: 'NAPTIEN [SĐT]',
    },
  },
  {
    id: 'card',
    name: 'Thẻ Cào',
    icon: CreditCard,
    info: {
      note: 'Nạp thẻ cào tự động, phí 20%',
      types: 'Viettel, Mobifone, Vinaphone',
    },
  },
];

export function Deposit() {
  const [copiedField, setCopiedField] = useState<string>('');

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-6 py-3 rounded-full mb-4 border border-green-500/30"
          >
            <Wallet className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">Nạp Tiền Nhanh Chóng</span>
          </motion.div>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Nạp Tiền{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Vào Tài Khoản
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            Chọn phương thức nạp tiền phù hợp với bạn
          </p>
        </div>

        <div className="space-y-6">
          {depositMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <GlassCard key={method.id} delay={index * 0.1}>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{method.name}</h3>
                  </div>

                  <div className="space-y-3">
                    {method.id === 'bank' && (
                      <>
                        <InfoRow
                          label="Ngân hàng"
                          value={method.info.bank!}
                          onCopy={() => copyToClipboard(method.info.bank!, `${method.id}-bank`)}
                          copied={copiedField === `${method.id}-bank`}
                        />
                        <InfoRow
                          label="Số tài khoản"
                          value={method.info.accountNumber!}
                          onCopy={() => copyToClipboard(method.info.accountNumber!, `${method.id}-account`)}
                          copied={copiedField === `${method.id}-account`}
                        />
                        <InfoRow
                          label="Chủ tài khoản"
                          value={method.info.accountName!}
                          onCopy={() => copyToClipboard(method.info.accountName!, `${method.id}-name`)}
                          copied={copiedField === `${method.id}-name`}
                        />
                        <InfoRow
                          label="Nội dung"
                          value={method.info.content!}
                          onCopy={() => copyToClipboard(method.info.content!, `${method.id}-content`)}
                          copied={copiedField === `${method.id}-content`}
                          highlight
                        />
                      </>
                    )}

                    {method.id === 'momo' && (
                      <>
                        <InfoRow
                          label="Số điện thoại"
                          value={method.info.phone!}
                          onCopy={() => copyToClipboard(method.info.phone!, `${method.id}-phone`)}
                          copied={copiedField === `${method.id}-phone`}
                        />
                        <InfoRow
                          label="Tên"
                          value={method.info.name!}
                          onCopy={() => copyToClipboard(method.info.name!, `${method.id}-name`)}
                          copied={copiedField === `${method.id}-name`}
                        />
                        <InfoRow
                          label="Nội dung"
                          value={method.info.content!}
                          onCopy={() => copyToClipboard(method.info.content!, `${method.id}-content`)}
                          copied={copiedField === `${method.id}-content`}
                          highlight
                        />
                      </>
                    )}

                    {method.id === 'card' && (
                      <>
                        <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                          <p className="text-orange-400">{method.info.note}</p>
                        </div>
                        <InfoRow
                          label="Loại thẻ hỗ trợ"
                          value={method.info.types!}
                        />
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 rounded-xl font-semibold transition-all"
                        >
                          Nạp Thẻ Cào
                        </motion.button>
                      </>
                    )}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

interface InfoRowProps {
  label: string;
  value: string;
  onCopy?: () => void;
  copied?: boolean;
  highlight?: boolean;
}

function InfoRow({ label, value, onCopy, copied, highlight }: InfoRowProps) {
  return (
    <div className={`p-4 rounded-xl flex justify-between items-center ${highlight ? 'bg-cyan-500/10 border border-cyan-500/30' : 'bg-gray-50 border border-gray-200'
      }`}>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className={`text-lg font-semibold ${highlight ? 'text-cyan-600' : 'text-gray-900'}`}>
          {value}
        </p>
      </div>
      {onCopy && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onCopy}
          className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          {copied ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <Copy className="w-5 h-5 text-gray-400" />
          )}
        </motion.button>
      )}
    </div>
  );
}
