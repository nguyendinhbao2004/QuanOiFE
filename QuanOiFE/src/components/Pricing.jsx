import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Zap, ArrowRight, ShieldCheck, Clock, Headphones, TrendingUp } from 'lucide-react';

const features = [
  { text: 'Hệ thống bán hàng (POS) & Quản lý sơ đồ bàn' },
  { text: 'Menu điện tử & Khách tự gọi món qua mã QR' },
  { text: 'Trợ lý AI phân tích doanh thu & hỗ trợ vận hành' },
  { text: 'Hệ thống hiển thị Bếp/Bar (Màn hình KDS)' },
  { text: 'Quản lý & Phân quyền nhân viên không giới hạn' },
  { text: 'Hệ thống báo cáo tài chính, lỗ lãi & chốt ca' },
  { text: 'Quản lý kho & Thiết lập định mức nguyên vật liệu' },
  { text: 'Hỗ trợ nhiều phương thức thanh toán' },
  { text: 'Quản lý khách hàng (CRM), tích điểm & khuyến mãi' },
  { text: 'Hỗ trợ kỹ thuật ưu tiên 24/7' },
  { text: 'Tùy chỉnh thương hiệu' },
  { text: 'Không giới hạn nhân viên' },
];

const highlights = [
  { icon: ShieldCheck, label: 'Bảo mật SSL', color: 'text-emerald-500' },
  { icon: Clock, label: 'Uptime 99.9%', color: 'text-blue-500' },
  { icon: Headphones, label: 'Hỗ trợ 24/7', color: 'text-violet-500' },
  { icon: TrendingUp, label: 'Tăng 35% doanh thu', color: 'text-brand-500' },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Zap size={15} />
            Bảng giá dịch vụ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 mb-3">
            Một gói —{' '}
            <span className="text-gradient">Trọn vẹn tất cả</span>
          </h2>
          <p className="text-stone-500 text-base max-w-xl mx-auto">
            Không gói cơ bản, không tính năng bị khoá. Một mức giá duy nhất cho toàn bộ nền tảng.
          </p>
        </motion.div>

        {/* Main card: 2-column layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative bg-white rounded-3xl shadow-[0_8px_60px_rgba(0,0,0,0.1)] border border-stone-100 overflow-hidden"
        >
          {/* Top badge */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600" />

          <div className="grid lg:grid-cols-2 min-h-[480px]">
            {/* LEFT — Price panel */}
            <div className="relative bg-gradient-to-br from-brand-500 to-brand-700 p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/5 rounded-full" />

              <div className="relative z-10">
                {/* Plan name */}
                <div className="inline-flex items-center gap-2 bg-white/20 text-white rounded-full px-3 py-1.5 text-xs font-bold mb-6 tracking-wider uppercase">
                  <Zap size={12} />
                  Gói Doanh Nghiệp
                </div>

                {/* Price */}
                <div className="mb-2">
                  <div className="flex items-end gap-2">
                    <span className="text-5xl lg:text-6xl font-black text-white leading-none">399k</span>
                    <span className="text-brand-200 text-base pb-1 font-medium">/tháng</span>
                  </div>
                  <p className="text-brand-100 text-sm mt-2">Hoặc <strong className="text-white">3,990,000đ</strong>/năm — tiết kiệm 2 tháng</p>
                </div>

                {/* Trial note */}
                <div className="inline-flex items-center gap-1.5 bg-white/15 text-white text-sm font-semibold rounded-xl px-4 py-2 mt-4">
                  <Clock size={14} />
                  Dùng thử miễn phí 7 ngày
                </div>
              </div>

              {/* Highlights */}
              <div className="relative z-10 grid grid-cols-2 gap-3 mt-8">
                {highlights.map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2.5">
                    <Icon size={15} className="text-white flex-shrink-0" />
                    <span className="text-white text-xs font-semibold">{label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="relative z-10 mt-6 space-y-3">
                <motion.button
                  id="pricing-main-btn"
                  whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 bg-white text-brand-600 font-black text-base rounded-2xl flex items-center justify-center gap-2 shadow-lg"
                >
                  Mua gói ngay
                  <ArrowRight size={18} />
                </motion.button>
                <button
                  id="pricing-trial-btn"
                  className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-2xl border border-white/30 transition-all"
                >
                  Dùng thử 7 ngày miễn phí
                </button>
              </div>
            </div>

            {/* RIGHT — Features panel */}
            <div className="p-8 lg:p-10 flex flex-col justify-center bg-white">
              <p className="text-stone-500 text-sm font-semibold uppercase tracking-wider mb-5">
                Bao gồm tất cả tính năng
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {features.map((feature, i) => (
                  <motion.li
                    key={feature.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                    className="flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-brand-600" strokeWidth={3} />
                    </span>
                    <span className="text-stone-700 text-sm leading-snug">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-stone-100 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={16} className="text-green-600" />
                </div>
                <p className="text-stone-500 text-xs leading-relaxed">
                  Thanh toán an toàn. Không phí ẩn. Huỷ bất kỳ lúc nào.
                  Hỗ trợ onboarding & cài đặt miễn phí.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
