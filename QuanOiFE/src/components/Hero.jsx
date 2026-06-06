import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, TrendingUp, Users, Zap } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  }),
};

const stats = [
  { icon: Users, value: '2,000+', label: 'Nhà hàng tin dùng' },
  { icon: TrendingUp, value: '35%', label: 'Tăng doanh thu TB' },
  { icon: Zap, value: '99.9%', label: 'Uptime đảm bảo' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-orange-50 pt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-orange-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-brand-400 rounded-full animate-float opacity-60" />
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-brand-300 rounded-full animate-float-delay opacity-40" />
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-orange-300 rounded-full animate-float opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-2 text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
              Nền tảng Quản lý Nhà hàng #1 Việt Nam
            </motion.div>

            {/* H1 */}
            <motion.h1
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-stone-900 leading-[1.1] tracking-tight mb-6"
            >
              Giải pháp Quản lý{' '}
              <span className="text-gradient">Nhà hàng Toàn diện</span>{' '}
              & Tối ưu với{' '}
              <span className="relative inline-block">
                <span className="text-gradient">Trợ lý AI</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C50 2 100 7 200 4"
                    stroke="#F97316"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>{' '}
              Độc Quyền
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-lg text-stone-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Đơn giản, dễ thao tác. Quản lý bán hàng, gọi món bằng QR, tính tiền thông minh.
              Đặc biệt trang bị{' '}
              <strong className="text-brand-600">AI giúp nhân viên order nhanh</strong> và hỗ
              trợ chủ quán tối đa hóa lợi nhuận.{' '}
              <span className="text-brand-500 font-semibold">Chi phí cực kỳ phù hợp.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10"
            >
              <motion.button
                id="hero-trial-btn"
                whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(249,115,22,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold text-base rounded-2xl shadow-brand transition-all duration-200"
              >
                <Zap size={18} className="group-hover:animate-spin" />
                Trải nghiệm AI miễn phí
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                id="hero-pricing-btn"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center justify-center gap-2 px-7 py-4 bg-white text-stone-700 font-bold text-base rounded-2xl border-2 border-stone-200 hover:border-brand-300 hover:text-brand-600 transition-all duration-200 shadow-card"
              >
                <Play size={16} className="text-brand-500 group-hover:scale-110 transition-transform" />
                Xem bảng giá
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center">
                    <Icon size={15} className="text-brand-600" />
                  </div>
                  <div>
                    <div className="font-extrabold text-stone-900 text-sm leading-tight">{value}</div>
                    <div className="text-xs text-stone-500 leading-tight">{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Mockup images */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-[540px]"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-brand-300 rounded-3xl opacity-20 blur-3xl scale-90" />

              {/* POS Web (Desktop) Mockup */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-100"
                style={{ boxShadow: '0 24px 80px rgba(0,0,0,0.15)' }}
              >
                {/* Browser bar */}
                <div className="bg-stone-800 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-stone-700 rounded text-stone-400 text-xs px-3 py-1 mx-2">
                    pos.quanoi.vn
                  </div>
                </div>
                <img
                  src="/api/placeholder/560/340"
                  alt="POS Thu Ngân Web Interface - Quán Ơi!"
                  className="w-full block"
                  style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #fff 100%)' }}
                />
                {/* POS UI overlay */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 pointer-events-none">
                  {['Tại chỗ', 'Mang về', 'Đơn Online'].map((t, i) => (
                    <div
                      key={t}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                        i === 0
                          ? 'bg-brand-500 text-white shadow-brand'
                          : 'bg-stone-700 text-stone-200'
                      }`}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Mobile App Mockup */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4.5, delay: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-4 lg:-right-10 w-[140px] sm:w-[160px] bg-white rounded-[24px] shadow-2xl overflow-hidden border-4 border-white z-20"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.18)' }}
              >
                {/* Phone notch */}
                <div className="bg-stone-900 h-6 flex items-center justify-center">
                  <div className="w-16 h-2 bg-stone-800 rounded-full" />
                </div>
                <img
                  src="/api/placeholder/160/280"
                  alt="Quán Ơi! Mobile App Dashboard"
                  className="w-full block"
                />
              </motion.div>

              {/* Floating badge: AI */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 lg:-left-8 bg-white rounded-2xl px-3 py-2 shadow-card border border-brand-100 flex items-center gap-2 z-20"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center">
                  <Zap size={14} className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-800">AI đề xuất</div>
                  <div className="text-[10px] text-brand-500 font-medium">+12% doanh thu</div>
                </div>
              </motion.div>

              {/* Floating badge: Order */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 -right-2 lg:-right-12 bg-white rounded-2xl px-3 py-2 shadow-card border border-green-100 flex items-center gap-2 z-20"
              >
                <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center">
                  <Star size={14} className="text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-800">Bàn A2</div>
                  <div className="text-[10px] text-green-600 font-medium">Order thành công</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-stone-400"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Cuộn xuống</span>
        <div className="w-5 h-8 border-2 border-stone-300 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-stone-400 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
