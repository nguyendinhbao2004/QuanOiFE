import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bot, Users, BarChart3, Lightbulb, TrendingUp, Bell, ChevronRight } from 'lucide-react';

const aiFeatures = [
  {
    id: 'staff',
    icon: Users,
    color: 'from-blue-400 to-blue-600',
    bg: 'bg-blue-50',
    textColor: 'text-blue-700',
    title: 'Hỗ trợ Nhân viên',
    description:
      'AI thông minh giúp nhân viên order món cực nhanh qua App điện thoại, tự động gợi ý món ăn kèm (cross-sell/up-sell) để tăng giá trị đơn hàng.',
    highlight: 'Tăng tốc order 3x',
  },
  {
    id: 'owner',
    icon: Bell,
    color: 'from-brand-400 to-brand-600',
    bg: 'bg-brand-50',
    textColor: 'text-brand-700',
    title: 'Trợ thủ Chủ quán',
    description:
      'Hỗ trợ quản lý nhà hàng toàn diện, theo dõi và cảnh báo vận hành theo thời gian thực mà không cần có mặt tại quán.',
    highlight: 'Quản lý từ xa 24/7',
  },
  {
    id: 'profit',
    icon: TrendingUp,
    color: 'from-green-400 to-green-600',
    bg: 'bg-green-50',
    textColor: 'text-green-700',
    title: 'Tối ưu Lợi nhuận',
    description:
      'Tự động check doanh thu, tính toán sự thay đổi, phân tích món bán chạy, đưa ra "Đề xuất chiến lược" như điều chỉnh nguyên liệu, tạo combo để gia tăng lợi nhuận.',
    highlight: 'Đề xuất thông minh',
  },
];

const chatMessages = [
  { role: 'ai', text: 'Xin chào! Doanh thu hôm nay đạt 4,250,000đ 🎉', time: '09:00' },
  { role: 'user', text: 'Món nào đang bán chạy nhất?', time: '09:01' },
  {
    role: 'ai',
    text: 'Top 3 món: Cá chiên (42 phần), Salad vườn (38 phần), Súp gà (30 phần). Gợi ý tạo combo Cá chiên + Salad giảm 10%! 🍽️',
    time: '09:01',
  },
  { role: 'user', text: 'Nguyên liệu nào cần nhập thêm?', time: '09:03' },
  {
    role: 'ai',
    text: '⚠️ Cần nhập: Cá (còn 2kg), Rau xà lách (còn 0.5kg). Dự báo hết vào lúc 14:00 nếu giữ tốc độ bán hiện tại.',
    time: '09:03',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function AISection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="ai-section" ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #f97316 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ea580c 0%, transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 border border-brand-500/30 rounded-full px-4 py-2 text-sm font-semibold mb-5">
            <Bot size={15} />
            Trợ lý AI Độc quyền
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Trợ lý AI{' '}
            <span className="text-gradient">"Quán Ơi"</span>
            <br />
            Điểm khác biệt cốt lõi
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Không chỉ là phần mềm quản lý — đây là trợ lý thông minh hoạt động 24/7, 
            đồng hành cùng cả nhân viên lẫn chủ quán.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: AI Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-brand-500 rounded-3xl opacity-10 blur-3xl" />

            <div className="relative bg-stone-800 rounded-3xl overflow-hidden border border-stone-700 shadow-2xl">
              {/* App header */}
              <div className="px-5 py-4 bg-brand-500 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Trợ lý AI Quán Ơi</div>
                  <div className="text-brand-100 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Đang hoạt động
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-3 min-h-[300px]">
                {chatMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} gap-2`}
                  >
                    {msg.role === 'ai' && (
                      <div className="w-7 h-7 bg-brand-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Bot size={13} className="text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-brand-500 text-white rounded-tr-sm'
                          : 'bg-stone-700 text-stone-100 rounded-tl-sm'
                      }`}
                    >
                      {msg.text}
                      <div className={`text-[10px] mt-1 ${msg.role === 'user' ? 'text-brand-200' : 'text-stone-400'}`}>
                        {msg.time}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input bar */}
              <div className="px-5 py-4 border-t border-stone-700 flex items-center gap-3">
                <div className="flex-1 bg-stone-700 rounded-xl px-4 py-2.5 text-stone-400 text-sm">
                  Hỏi trợ lý AI...
                </div>
                <button className="w-9 h-9 bg-brand-500 rounded-xl flex items-center justify-center">
                  <ChevronRight size={16} className="text-white" />
                </button>
              </div>
            </div>

            {/* Quick actions */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['Doanh thu hôm nay?', 'Món nào đang bán chạy?', 'Tóm tắt ca làm việc'].map((q) => (
                <span
                  key={q}
                  className="bg-stone-800 border border-stone-600 text-stone-300 text-xs px-3 py-1.5 rounded-full cursor-pointer hover:border-brand-500 hover:text-brand-400 transition-colors"
                >
                  {q}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-5"
          >
            {aiFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, x: 8 }}
                  className="relative bg-stone-800 border border-stone-700 rounded-2xl p-6 cursor-default overflow-hidden group"
                  style={{
                    boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-brand-500/10 to-transparent rounded-2xl" />
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-2xl border border-brand-500/0 group-hover:border-brand-500/30 transition-all duration-500" />

                  <div className="relative flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:animate-glow-pulse`}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-white font-bold text-base">{feature.title}</h3>
                        <span className={`${feature.bg} ${feature.textColor} text-xs font-semibold px-2.5 py-1 rounded-full`}>
                          {feature.highlight}
                        </span>
                      </div>
                      <p className="text-stone-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA */}
            <motion.button
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              id="ai-section-cta-btn"
              className="w-full bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold py-4 rounded-2xl shadow-brand-lg flex items-center justify-center gap-2 mt-2"
            >
              <Lightbulb size={18} />
              Khám phá AI miễn phí ngay
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
