import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Settings, ShoppingCart, ChefHat, CreditCard, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Settings,
    color: 'from-violet-400 to-violet-600',
    bgLight: 'bg-violet-50',
    borderColor: 'border-violet-200',
    dotColor: 'bg-violet-500',
    label: 'Trước giờ mở cửa',
    title: 'Setup & Cấu hình',
    description:
      'Cấu hình menu theo ngày/tuần, định mức nguyên liệu tồn kho, phân quyền nhân viên theo vai trò. Hệ thống sẵn sàng trong vài phút.',
    tags: ['Menu', 'Kho hàng', 'Phân quyền'],
  },
  {
    number: '02',
    icon: ShoppingCart,
    color: 'from-brand-400 to-brand-600',
    bgLight: 'bg-brand-50',
    borderColor: 'border-brand-200',
    dotColor: 'bg-brand-500',
    label: 'Khách vào quán',
    title: 'Order linh hoạt',
    description:
      'Nhân viên order nhanh qua App, khách tự gọi món bằng QR Code, hoặc thu ngân nhập trực tiếp trên POS. AI gợi ý món thêm tự động.',
    tags: ['POS', 'App nhân viên', 'QR Order'],
  },
  {
    number: '03',
    icon: ChefHat,
    color: 'from-amber-400 to-amber-600',
    bgLight: 'bg-amber-50',
    borderColor: 'border-amber-200',
    dotColor: 'bg-amber-500',
    label: 'Bếp & Chế biến',
    title: 'Xử lý Order Bếp',
    description:
      'Lệnh order tự động đẩy xuống KDS (Kitchen Display System) hoặc máy in bếp. Theo dõi tiến độ chế biến, cảnh báo nếu trễ quá quy định.',
    tags: ['KDS', 'Máy in bếp', 'Thời gian'],
  },
  {
    number: '04',
    icon: CreditCard,
    color: 'from-emerald-400 to-emerald-600',
    bgLight: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    dotColor: 'bg-emerald-500',
    label: 'Thanh toán',
    title: 'Thanh toán Thông minh',
    description:
      'Áp dụng khuyến mãi, voucher, combo tự động. Hỗ trợ tiền mặt, chuyển khoản, ví điện tử. In hóa đơn chính xác, nhanh chóng.',
    tags: ['Đa p/thức', 'Voucher', 'In bill'],
  },
  {
    number: '05',
    icon: BarChart3,
    color: 'from-blue-400 to-blue-600',
    bgLight: 'bg-blue-50',
    borderColor: 'border-blue-200',
    dotColor: 'bg-blue-500',
    label: 'Cuối ngày',
    title: 'Báo cáo & Quản trị',
    description:
      'Báo cáo doanh thu chi tiết, hiệu suất nhân viên, kiểm soát thất thoát. AI tự phân tích và đưa ra đề xuất tối ưu cho ngày hôm sau.',
    tags: ['Doanh thu', 'Hiệu suất', 'AI phân tích'],
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-2 text-sm font-semibold mb-5">
            <BarChart3 size={15} />
            Quy trình vận hành
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 mb-4">
            5 Bước vận hành{' '}
            <span className="text-gradient">Chuẩn & Trơn tru</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Từ lúc chuẩn bị đến khi đóng cửa — mọi quy trình đều được tối ưu để tiết kiệm thời gian và tăng hiệu suất.
          </p>
        </motion.div>

        {/* Desktop: Horizontal timeline connector */}
        <div className="hidden lg:flex items-start gap-4 mb-12 relative">
          <div className="absolute top-8 left-[calc(10%+24px)] right-[calc(10%+24px)] h-0.5 bg-gradient-to-r from-violet-200 via-brand-200 via-amber-200 via-emerald-200 to-blue-200" />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex-1 flex flex-col items-center text-center"
              >
                {/* Step dot + icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-4 relative z-10`}>
                  <Icon size={26} className="text-white" />
                </div>
                <span className="text-[11px] font-bold text-stone-400 tracking-widest uppercase mb-1">{step.label}</span>
                <h3 className="text-stone-900 font-bold text-base mb-2 leading-tight">{step.title}</h3>
                <p className="text-stone-500 text-xs leading-relaxed px-1 mb-3">{step.description}</p>
                <div className="flex flex-wrap justify-center gap-1">
                  {step.tags.map((tag) => (
                    <span key={tag} className="bg-stone-100 text-stone-600 text-[10px] font-semibold px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-200 via-brand-200 to-blue-200" />
          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className={`absolute -left-8 top-2 w-5 h-5 rounded-full ${step.dotColor} border-4 border-white shadow z-10`} />
                  <div className={`${step.bgLight} border ${step.borderColor} rounded-2xl p-5`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                        <Icon size={17} className="text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">{step.label}</div>
                        <div className="text-stone-900 font-bold text-base leading-tight">{step.title}</div>
                      </div>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed mb-3">{step.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {step.tags.map((tag) => (
                        <span key={tag} className="bg-white text-stone-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-stone-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-stone-600 mb-4 text-base">
            Sẵn sàng nâng cấp cách vận hành nhà hàng của bạn?
          </p>
          <motion.button
            id="how-it-works-cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold rounded-2xl shadow-brand-lg"
          >
            Bắt đầu miễn phí 14 ngày
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
