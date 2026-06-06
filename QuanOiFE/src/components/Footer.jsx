import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

// Inline SVGs for brand icons (lucide-react removed brand icons in v0.400+)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);
const ZaloIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V10h2v6zm-1-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8 7h-2v-3.5c0-.83-.67-1.5-1.5-1.5S13 11.67 13 12.5V16h-2v-6h2v.93A3.48 3.48 0 0 1 15.5 10c1.93 0 3.5 1.57 3.5 3.5V16z" />
  </svg>
);

const footerLinks = {
  product: {
    title: 'Sản phẩm',
    links: ['Tính năng', 'Giải pháp AI', 'Thiết bị POS', 'Bảng giá', 'Cập nhật mới'],
  },
  support: {
    title: 'Hỗ trợ',
    links: ['Trung tâm trợ giúp', 'Hướng dẫn sử dụng', 'Video tutorial', 'Cộng đồng', 'Liên hệ'],
  },
  company: {
    title: 'Công ty',
    links: ['Về chúng tôi', 'Blog & Tin tức', 'Tuyển dụng', 'Đối tác', 'Báo chí'],
  },
  legal: {
    title: 'Pháp lý',
    links: ['Điều khoản dịch vụ', 'Chính sách bảo mật', 'Chính sách Cookie', 'Quy chế hoạt động'],
  },
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-brand-500 to-brand-600 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4"
          >
            Sẵn sàng nâng tầm nhà hàng của bạn?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-brand-100 text-lg mb-8"
          >
            Dùng thử miễn phí 7 ngày, không cần thẻ tín dụng
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.button
              id="footer-trial-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-white text-brand-600 font-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Bắt đầu miễn phí ngay
            </motion.button>
            <motion.button
              id="footer-contact-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-white/20 text-white font-bold rounded-2xl border-2 border-white/40 hover:bg-white/30 transition-all duration-200"
            >
              Gọi tư vấn miễn phí
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center">
                <span className="text-white font-black text-lg">Q</span>
              </div>
              <div>
                <span className="font-extrabold text-xl text-white leading-tight block">Quán Ơi!</span>
                <span className="text-[10px] text-brand-400 font-medium tracking-widest uppercase">Restaurant OS</span>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Nền tảng quản lý nhà hàng thông minh với trợ lý AI độc quyền.
              Được tin dùng bởi hơn 2,000+ nhà hàng trên khắp Việt Nam.
            </p>
            {/* Contact */}
            <div className="space-y-2.5 mb-6">
              <a href="tel:1900xxxx" className="flex items-center gap-2 text-sm text-stone-400 hover:text-brand-400 transition-colors">
                <Phone size={14} />
                Hotline: 1900 0000
              </a>
              <a href="mailto:support@quanoi.vn" className="flex items-center gap-2 text-sm text-stone-400 hover:text-brand-400 transition-colors">
                <Mail size={14} />
                support@quanoi.vn
              </a>
              <div className="flex items-start gap-2 text-sm text-stone-400">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Tòa nhà ABC, 123 Nguyễn Văn Linh, Q.7, TP.HCM</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: FacebookIcon, label: 'Facebook', href: '#' },
                { Icon: YoutubeIcon, label: 'YouTube', href: '#' },
                { Icon: ZaloIcon, label: 'Zalo', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-stone-800 rounded-xl flex items-center justify-center text-stone-400 hover:bg-brand-500 hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-stone-400 text-sm hover:text-brand-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-sm">
            © 2025 Quán Ơi! Technology JSC. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-1 text-stone-500 text-sm">
            <span>Thiết kế với</span>
            <span className="text-brand-500 mx-1">♥</span>
            <span>tại Việt Nam 🇻🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
