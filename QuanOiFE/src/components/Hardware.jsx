import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Printer, ChefHat, DollarSign, ChevronLeft, ChevronRight, ShoppingCart, Star, Package } from 'lucide-react';

const products = [
  {
    id: 'pos-main',
    icon: Monitor,
    color: 'from-brand-400 to-brand-600',
    name: 'Máy POS Thu ngân Pro',
    model: 'QuanOi POS-15',
    price: '4,500,000',
    originalPrice: '5,200,000',
    badge: 'Bán chạy',
    badgeColor: 'bg-brand-500',
    rating: 4.9,
    reviews: 128,
    specs: ['Màn hình cảm ứng 15"', 'CPU Intel i5', 'RAM 8GB', 'Tích hợp phần mềm'],
    imgBg: 'from-brand-50 to-orange-50',
  },
  {
    id: 'printer-bill',
    icon: Printer,
    color: 'from-blue-400 to-blue-600',
    name: 'Máy in hóa đơn Bill',
    model: 'QuanOi P-80',
    price: '1,200,000',
    originalPrice: '1,500,000',
    badge: 'Mới',
    badgeColor: 'bg-blue-500',
    rating: 4.8,
    reviews: 64,
    specs: ['Khổ giấy 80mm', 'Tốc độ 250mm/s', 'Kết nối USB/LAN', 'Tuổi thọ cao'],
    imgBg: 'from-blue-50 to-sky-50',
  },
  {
    id: 'printer-kitchen',
    icon: ChefHat,
    color: 'from-amber-400 to-amber-600',
    name: 'Máy in bếp KDS',
    model: 'QuanOi K-58',
    price: '990,000',
    originalPrice: '1,200,000',
    badge: 'Phổ biến',
    badgeColor: 'bg-amber-500',
    rating: 4.7,
    reviews: 89,
    specs: ['Khổ giấy 58mm', 'Chịu nhiệt tốt', 'Âm thanh báo hiệu', 'Kết nối WiFi'],
    imgBg: 'from-amber-50 to-yellow-50',
  },
  {
    id: 'cash-drawer',
    icon: DollarSign,
    color: 'from-emerald-400 to-emerald-600',
    name: 'Ngăn kéo đựng tiền',
    model: 'QuanOi CD-400',
    price: '580,000',
    originalPrice: '720,000',
    badge: 'Tiết kiệm',
    badgeColor: 'bg-emerald-500',
    rating: 4.6,
    reviews: 42,
    specs: ['5 ngăn tiền mặt', 'Khoá bảo mật', 'Kết nối máy in', 'Chất liệu thép'],
    imgBg: 'from-emerald-50 to-green-50',
  },
  {
    id: 'qr-scanner',
    icon: Package,
    color: 'from-violet-400 to-violet-600',
    name: 'Máy quét mã QR/Barcode',
    model: 'QuanOi SC-100',
    price: '450,000',
    originalPrice: '600,000',
    badge: 'Mới',
    badgeColor: 'bg-violet-500',
    rating: 4.8,
    reviews: 35,
    specs: ['Quét 1D/2D/QR', 'Kết nối USB', 'Tốc độ cao', 'Thiết kế bền bỉ'],
    imgBg: 'from-violet-50 to-purple-50',
  },
];

export default function Hardware() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCount = 3;
  const maxIndex = products.length - visibleCount;

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () => setActiveIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section id="hardware" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <Monitor size={15} />
              Thiết bị phần cứng
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mb-3">
              Bộ thiết bị POS{' '}
              <span className="text-gradient">chuyên nghiệp</span>
            </h2>
            <p className="text-stone-500 text-base max-w-xl">
              Phần cứng được chọn lọc kỹ lưỡng, tương thích hoàn toàn với phần mềm Quán Ơi!. 
              Hỗ trợ lắp đặt và bảo hành toàn quốc.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              id="hardware-prev-btn"
              onClick={prev}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-xl border-2 border-stone-200 flex items-center justify-center hover:border-brand-400 hover:text-brand-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              id="hardware-next-btn"
              onClick={next}
              disabled={activeIndex >= maxIndex}
              className="w-10 h-10 rounded-xl border-2 border-stone-200 flex items-center justify-center hover:border-brand-400 hover:text-brand-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${activeIndex * (100 / visibleCount)}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="flex gap-6"
            style={{ width: `${(products.length / visibleCount) * 100}%` }}
          >
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl border border-stone-100 shadow-card overflow-hidden group flex-shrink-0 transition-all duration-300"
                  style={{ width: `calc(${100 / products.length * visibleCount}% - ${(visibleCount - 1) * 24 / visibleCount}px)` }}
                >
                  {/* Product image area */}
                  <div className={`bg-gradient-to-br ${product.imgBg} p-8 flex items-center justify-center min-h-[180px] relative`}>
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg`}>
                      <Icon size={36} className="text-white" />
                    </div>
                    {/* Badge */}
                    <span className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <p className="text-xs text-stone-400 font-medium">{product.model}</p>
                        <h3 className="text-stone-900 font-bold text-base leading-tight">{product.name}</h3>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            size={12}
                            className={j < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-stone-200'}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-stone-500 ml-1">({product.reviews})</span>
                    </div>

                    {/* Specs */}
                    <ul className="space-y-1 mb-4">
                      {product.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-1.5 text-xs text-stone-600">
                          <span className="w-1.5 h-1.5 bg-brand-400 rounded-full" />
                          {spec}
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <p className="text-stone-400 text-xs line-through">{product.originalPrice}đ</p>
                        <p className="text-brand-600 font-black text-xl">{product.price}đ</p>
                      </div>
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-lg">
                        -{Math.round((1 - parseInt(product.price.replace(/,/g, '')) / parseInt(product.originalPrice.replace(/,/g, ''))) * 100)}%
                      </span>
                    </div>

                    {/* CTA */}
                    <motion.button
                      id={`hardware-buy-${product.id}-btn`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-brand"
                    >
                      <ShoppingCart size={15} />
                      Mua ngay
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-8 bg-brand-500' : 'w-2 bg-stone-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
