import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X, Zap, Crown, Star, ArrowRight } from 'lucide-react';

const plans = [
  {
    id: 'basic',
    name: 'Cơ bản',
    subtitle: 'Dành cho quán nhỏ',
    icon: Star,
    price: '199,000',
    period: '/tháng',
    color: 'from-stone-400 to-stone-600',
    borderColor: 'border-stone-200',
    popular: false,
    features: [
      { text: 'Quản lý 1 chi nhánh', included: true },
      { text: 'Tối đa 3 nhân viên', included: true },
      { text: 'Quản lý menu & sơ đồ bàn', included: true },
      { text: 'POS thu ngân cơ bản', included: true },
      { text: 'QR gọi món', included: true },
      { text: 'Báo cáo cơ bản (ngày/tuần)', included: true },
      { text: 'Trợ lý AI Quán Ơi', included: false },
      { text: 'Quản lý kho & nguyên liệu', included: false },
      { text: 'Phân tích AI nâng cao', included: false },
      { text: 'Hỗ trợ ưu tiên 24/7', included: false },
    ],
    cta: 'Bắt đầu miễn phí',
    ctaStyle: 'bg-stone-700 hover:bg-stone-800 text-white',
    note: 'Dùng thử 14 ngày miễn phí',
  },
  {
    id: 'pro',
    name: 'Chuyên nghiệp',
    subtitle: 'Bán chạy nhất',
    icon: Zap,
    price: '499,000',
    period: '/tháng',
    color: 'from-brand-400 to-brand-600',
    borderColor: 'border-brand-400',
    popular: true,
    features: [
      { text: 'Quản lý 1 chi nhánh', included: true },
      { text: 'Không giới hạn nhân viên', included: true },
      { text: 'Quản lý menu & sơ đồ bàn', included: true },
      { text: 'POS thu ngân đầy đủ', included: true },
      { text: 'QR gọi món', included: true },
      { text: 'Báo cáo chi tiết (mọi chu kỳ)', included: true },
      { text: 'Trợ lý AI Quán Ơi', included: true },
      { text: 'Quản lý kho & nguyên liệu', included: true },
      { text: 'Phân tích AI nâng cao', included: false },
      { text: 'Hỗ trợ ưu tiên 24/7', included: true },
    ],
    cta: 'Chọn gói này',
    ctaStyle: 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-brand',
    note: 'Tiết kiệm 2 tháng khi trả năm',
  },
  {
    id: 'enterprise',
    name: 'Doanh nghiệp',
    subtitle: 'Chuỗi nhà hàng',
    icon: Crown,
    price: '1,299,000',
    period: '/tháng',
    color: 'from-violet-400 to-violet-600',
    borderColor: 'border-violet-200',
    popular: false,
    features: [
      { text: 'Không giới hạn chi nhánh', included: true },
      { text: 'Không giới hạn nhân viên', included: true },
      { text: 'Quản lý menu & sơ đồ bàn', included: true },
      { text: 'POS thu ngân đầy đủ', included: true },
      { text: 'QR gọi món', included: true },
      { text: 'Báo cáo tổng hợp chuỗi', included: true },
      { text: 'Trợ lý AI Quán Ơi', included: true },
      { text: 'Quản lý kho & nguyên liệu', included: true },
      { text: 'Phân tích AI nâng cao', included: true },
      { text: 'Hỗ trợ ưu tiên 24/7', included: true },
    ],
    cta: 'Liên hệ tư vấn',
    ctaStyle: 'bg-violet-600 hover:bg-violet-700 text-white',
    note: 'Tư vấn & demo riêng',
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-2 text-sm font-semibold mb-5">
            <Crown size={15} />
            Bảng giá dịch vụ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 mb-4">
            Giá cả{' '}
            <span className="text-gradient">minh bạch & hợp lý</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Bắt đầu miễn phí, nâng cấp khi cần. Không phí ẩn, không ràng buộc hợp đồng dài hạn.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative bg-white rounded-3xl border-2 ${plan.borderColor} shadow-card flex flex-col overflow-hidden ${
                  plan.popular ? 'ring-2 ring-brand-400 ring-offset-2' : ''
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-xs font-bold text-center py-2 tracking-widest uppercase">
                    ⭐ Được chọn nhiều nhất
                  </div>
                )}

                <div className={`p-7 ${plan.popular ? 'pt-10' : ''}`}>
                  {/* Icon + name */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-md`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-stone-900 font-black text-lg leading-tight">{plan.name}</h3>
                      <p className="text-stone-500 text-xs font-medium">{plan.subtitle}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-black text-stone-900">{plan.price}</span>
                      <span className="text-stone-500 text-sm pb-1">{plan.period}</span>
                    </div>
                    <p className="text-stone-400 text-xs mt-1">{plan.note}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-7">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-2.5">
                        {feature.included ? (
                          <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={11} className="text-green-600 font-bold" strokeWidth={3} />
                          </span>
                        ) : (
                          <span className="w-5 h-5 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <X size={11} className="text-stone-400" />
                          </span>
                        )}
                        <span className={`text-sm ${feature.included ? 'text-stone-700' : 'text-stone-400'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-7 pb-7 mt-auto">
                  <motion.button
                    id={`pricing-${plan.id}-btn`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-3.5 font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all duration-200 ${plan.ctaStyle}`}
                  >
                    {plan.cta}
                    <ArrowRight size={15} />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center text-stone-500 text-sm mt-10"
        >
          Tất cả các gói đều bao gồm{' '}
          <strong className="text-stone-700">hỗ trợ onboarding miễn phí</strong> và{' '}
          <strong className="text-stone-700">bảo mật SSL</strong>. Thanh toán hàng tháng hoặc hàng năm.
        </motion.p>
      </div>
    </section>
  );
}
