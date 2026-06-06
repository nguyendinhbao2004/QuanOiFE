import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  LayoutGrid,
  UtensilsCrossed,
  QrCode,
  BarChart2,
  Bell,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const features = [
  {
    id: 'table',
    icon: LayoutGrid,
    color: 'from-violet-400 to-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    title: 'Quản lý Sơ đồ Bàn',
    description:
      'Thiết lập sơ đồ bàn linh hoạt theo từng khu vực. Theo dõi trạng thái bàn trống/đang phục vụ theo thời gian thực.',
  },
  {
    id: 'menu',
    icon: UtensilsCrossed,
    color: 'from-brand-400 to-brand-600',
    bg: 'bg-brand-50',
    border: 'border-brand-100',
    title: 'Quản lý Món & Menu',
    description:
      'Tạo và cập nhật menu dễ dàng, phân loại món ăn, thêm ảnh, giá bán và mô tả chi tiết. Đồng bộ ngay lập tức.',
  },
  {
    id: 'qr',
    icon: QrCode,
    color: 'from-emerald-400 to-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    title: 'Gọi món bằng QR',
    description:
      'Khách tự quét QR, chọn món và gửi order. Tăng trải nghiệm, giảm sai sót, nhân viên tập trung phục vụ.',
  },
  {
    id: 'revenue',
    icon: BarChart2,
    color: 'from-blue-400 to-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    title: 'Doanh thu & Báo cáo',
    description:
      'Dashboard trực quan theo ngày/tuần/tháng. Phân tích theo ca, theo nhân viên, theo món. Xuất báo cáo PDF.',
  },
  {
    id: 'reminder',
    icon: Bell,
    color: 'from-amber-400 to-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    title: 'Nhắc nhở Món ăn',
    description:
      'Hệ thống tự động nhắc nhở khi món chưa được phục vụ quá thời gian quy định. Đảm bảo trải nghiệm tốt nhất.',
  },
  {
    id: 'staff',
    icon: ShieldCheck,
    color: 'from-rose-400 to-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    title: 'Quản lý Nhân sự',
    description:
      'Phân quyền chi tiết: thu ngân, phục vụ, pha chế, quản lý. Ca làm việc, chấm công, hiệu suất từng nhân viên.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true, margin: '-80px' });

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          ref={ref}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-2 text-sm font-semibold mb-5">
            <LayoutGrid size={15} />
            Tính năng vận hành
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 mb-4">
            Mọi thứ bạn cần để{' '}
            <span className="text-gradient">vận hành hoàn hảo</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Từ quản lý bàn đến báo cáo cuối ngày — tất cả trong một nền tảng duy nhất, 
            dễ sử dụng và cực kỳ hiệu quả.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
                className={`bg-white rounded-2xl border ${feature.border} p-6 shadow-card cursor-default transition-all duration-300 group`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-stone-900 font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{feature.description}</p>
                <div className="flex items-center gap-1 text-brand-500 text-sm font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Tìm hiểu thêm <ArrowRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Screenshot showcase */}
        <div ref={imgRef} className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-sm font-semibold">
              Dashboard Tổng quan
            </div>
            <h3 className="text-2xl lg:text-3xl font-black text-stone-900">
              Cái nhìn toàn cảnh về{' '}
              <span className="text-gradient">nhà hàng của bạn</span>
            </h3>
            <p className="text-stone-500 leading-relaxed">
              Dashboard trực quan hiển thị mọi chỉ số quan trọng: doanh thu, số đơn, bàn đang phục vụ, 
              món bán chạy — tất cả cập nhật theo thời gian thực.
            </p>
            <ul className="space-y-2">
              {[
                'Doanh thu theo ngày/tuần/tháng',
                'Biểu đồ phân tích xu hướng',
                'Top món bán chạy',
                'Hiệu suất từng ca làm việc',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-stone-700 text-sm">
                  <span className="w-5 h-5 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-brand-500 rounded-full" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Dashboard card */}
            <div className="col-span-2 bg-gradient-to-br from-brand-50 to-white rounded-2xl p-3 border border-brand-100 shadow-card overflow-hidden">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="bg-brand-500 rounded-xl p-4 mb-4">
                  <p className="text-brand-100 text-xs font-medium mb-1">Doanh thu hôm nay</p>
                  <p className="text-white text-2xl font-black">4,250,000 đ</p>
                  <p className="text-brand-200 text-xs mt-1">↑ +18% so với hôm qua</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Báo cáo', color: 'bg-blue-100', text: 'text-blue-600' },
                    { label: 'Thực đơn', color: 'bg-orange-100', text: 'text-orange-600' },
                    { label: 'Sơ đồ bàn', color: 'bg-green-100', text: 'text-green-600' },
                  ].map((item) => (
                    <div key={item.label} className={`${item.color} rounded-xl p-3 text-center`}>
                      <p className={`${item.text} text-xs font-bold`}>{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Staff card */}
            <div className="col-span-2 bg-white rounded-2xl p-4 border border-stone-100 shadow-card">
              <div className="flex items-center justify-between mb-3">
                <p className="text-stone-800 font-bold text-sm">Quản lý nhân viên</p>
                <span className="bg-brand-500 text-white text-xs px-2 py-1 rounded-lg font-semibold">+ Thêm</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { name: 'Thanh Hà', role: 'Thu ngân', color: 'bg-orange-100 text-orange-700' },
                  { name: 'Minh Tuấn', role: 'Phục vụ', color: 'bg-blue-100 text-blue-700' },
                  { name: 'Ngọc Ánh', role: 'Pha chế', color: 'bg-yellow-100 text-yellow-700' },
                ].map((staff) => (
                  <div key={staff.name} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-200 to-brand-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{staff.name[0]}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-stone-800 text-xs font-semibold leading-tight">{staff.name}</p>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${staff.color}`}>
                      {staff.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
