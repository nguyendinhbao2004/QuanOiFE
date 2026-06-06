import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Tính năng', href: '#features' },
  { label: 'Giải pháp AI', href: '#ai-section' },
  { label: 'Bảng giá', href: '#pricing' },
  { label: 'Thiết bị POS', href: '#hardware' },
  { label: 'Liên hệ', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group" id="header-logo">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-brand group-hover:shadow-brand-lg transition-shadow duration-300">
                <span className="text-white font-black text-lg leading-none">Q</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-stone-900 leading-tight">Quán Ơi!</span>
                <span className="text-[10px] text-brand-500 font-medium tracking-widest uppercase -mt-0.5">Restaurant OS</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-brand-500 hover:bg-brand-50 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                id="header-login-btn"
                className="px-5 py-2.5 text-sm font-semibold text-brand-600 border-2 border-brand-500 rounded-xl hover:bg-brand-50 transition-all duration-200"
              >
                Đăng nhập
              </button>
              <motion.button
                id="header-trial-btn"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-200"
              >
                Dùng thử miễn phí
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-btn"
              className="lg:hidden p-2 rounded-lg text-stone-600 hover:bg-brand-50 hover:text-brand-500 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/98 backdrop-blur-md shadow-xl border-t border-stone-100 lg:hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-base font-medium text-stone-700 hover:text-brand-500 hover:bg-brand-50 rounded-xl transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-stone-100">
                <button className="w-full px-5 py-3 text-sm font-semibold text-brand-600 border-2 border-brand-500 rounded-xl hover:bg-brand-50 transition-all duration-200">
                  Đăng nhập
                </button>
                <button className="w-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl shadow-brand">
                  Dùng thử miễn phí
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
