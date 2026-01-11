import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Beaker,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Globe,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";
import { NAV_ITEMS, IMAGES } from "../constants";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/#contact");
    } else {
      const element = document.getElementById("contact");
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background-light flex flex-col font-body text-slate-900 selection:bg-primary/20 selection:text-primary">
      {/* Navbar */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled || isMobileMenuOpen
            ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50"
            : "bg-transparent border-b border-transparent py-2"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center gap-2 sm:gap-3 group relative z-50"
            >
              <img
                src={IMAGES.logo}
                alt="Sanlia Chemi Logo"
                className="h-7 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <span
                className={`text-lg sm:text-xl font-black tracking-tight transition-colors ${
                  scrolled || isMobileMenuOpen
                    ? "text-navy-dark"
                    : "text-navy-dark"
                }`}
              >
                Sanlia Chemi<span className="text-primary">.</span>
              </span>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <div className="flex items-center gap-1 bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-gray-200/50 mr-4 shadow-sm">
                {NAV_ITEMS.map((item) =>
                  item.path === "/#contact" ? (
                    <button
                      key={item.label}
                      onClick={handleContactClick}
                      className="px-5 py-2 rounded-full text-slate-600 hover:text-primary hover:bg-white text-sm font-medium transition-all duration-300"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-primary text-white shadow-md shadow-primary/20"
                            : "text-slate-600 hover:text-primary hover:bg-white"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )
                )}
              </div>

              {/* CTA Button */}
              <button
                onClick={handleContactClick}
                className="bg-navy-dark hover:bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5"
              >
                Үнийн санал авах
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-800 p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-0 bg-white h-screen transition-transform duration-300 ease-in-out z-40 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-20 px-4 sm:px-6 pb-6 overflow-y-auto">
            <div className="space-y-1 flex-1">
              {NAV_ITEMS.map((item, idx) =>
                item.path === "/#contact" ? (
                  <button
                    key={item.label}
                    onClick={handleContactClick}
                    className="block w-full text-left px-4 py-3.5 text-xl sm:text-2xl font-bold text-slate-800 hover:text-primary hover:bg-slate-50 rounded-lg transition-all active:scale-[0.98]"
                    style={{
                      animation: isMobileMenuOpen
                        ? `fadeInUp 0.4s ease-out ${idx * 0.08}s forwards`
                        : "none",
                      opacity: 0,
                    }}
                  >
                    {item.label}
                  </button>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3.5 text-xl sm:text-2xl font-bold rounded-lg transition-all active:scale-[0.98] ${
                        isActive
                          ? "text-primary bg-primary/5"
                          : "text-slate-800 hover:text-primary hover:bg-slate-50"
                      }`
                    }
                    style={{
                      animation: isMobileMenuOpen
                        ? `fadeInUp 0.4s ease-out ${idx * 0.08}s forwards`
                        : "none",
                      opacity: 0,
                    }}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={handleContactClick}
                className="w-full bg-primary text-white py-4 rounded-xl text-base sm:text-lg font-bold shadow-xl shadow-primary/20 mb-4 active:scale-[0.98] transition-transform"
              >
                Үнийн санал авах
              </button>
              <div className="flex justify-center gap-6 text-slate-400">
                <a href="#" className="hover:text-primary transition-colors"><Linkedin size={22} /></a>
                <a href="#" className="hover:text-primary transition-colors"><Facebook size={22} /></a>
                <a href="#" className="hover:text-primary transition-colors"><Twitter size={22} /></a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-0">{children}</main>

      {/* Footer */}
      <footer className="bg-navy-dark text-slate-400 py-16 lg:py-20 relative overflow-hidden border-t border-white/5">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-[200px] -left-[200px] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 mb-12 md:mb-16">
            {/* Branding */}
            <div className="lg:col-span-4 space-y-4 md:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 text-white">
                <img
                  src={IMAGES.logo}
                  alt="Sanlia Chemi Logo"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
                <span className="text-xl sm:text-2xl font-black tracking-tight">
                  Sanlia Chemi
                </span>
              </div>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm">
                Монгол болон Төв Азийн хэмжээнд химийн бодисын түгээлтэд
                аюулгүй, үр ашигтай, шинэлэг байдлаар тэргүүлэгч түнш.
              </p>
              <div className="flex gap-3 sm:gap-4 pt-2">
                <a
                  href="#"
                  className="size-9 sm:size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
                >
                  <Facebook className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </a>
                <a
                  href="#"
                  className="size-9 sm:size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
                >
                  <Linkedin className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </a>
                <a
                  href="#"
                  className="size-9 sm:size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
                >
                  <Twitter className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-2 lg:col-start-6">
              <h3 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Холбоос</h3>
              <ul className="space-y-3 sm:space-y-4 text-sm font-medium">
                <li>
                  <NavLink
                    to="/about"
                    className="hover:text-primary transition-colors flex items-center gap-2 py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0"></span>
                    Бидний тухай
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className="hover:text-primary transition-colors flex items-center gap-2 py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0"></span>
                    Бүтээгдэхүүн
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/safety"
                    className="hover:text-primary transition-colors flex items-center gap-2 py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0"></span>
                    Аюулгүй байдал
                  </NavLink>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors flex items-center gap-2 py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0"></span>
                    Тогтвортой хөгжил
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">
                Холбоо барих
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-sm">
                <li className="flex items-start gap-3 sm:gap-4 group">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors shrink-0">
                    <Mail className="text-primary w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <span className="mt-0.5 sm:mt-1.5 group-hover:text-white transition-colors break-all">
                    info@sanliachem.mn
                  </span>
                </li>
                <li className="flex items-start gap-3 sm:gap-4 group">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors shrink-0">
                    <Phone className="text-primary w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <span className="mt-0.5 sm:mt-1.5 group-hover:text-white transition-colors">
                    +976 11 312 345
                  </span>
                </li>
                <li className="flex items-start gap-3 sm:gap-4 group">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors shrink-0">
                    <MapPin className="text-primary w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <span className="mt-0.5 sm:mt-1.5 group-hover:text-white transition-colors text-xs sm:text-sm leading-relaxed">
                    Сүхбаатар дүүрэг, 1-р хороо, Улаанбаатар, Монгол Улс
                  </span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">
                Мэдээлэл авах
              </h3>
              <p className="text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                Шинэ бүтээгдэхүүн болон саналуудын талаар мэдээлэл аваарай.
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Имэйл хаяг"
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-3 sm:pl-4 pr-10 sm:pr-12 py-2.5 sm:py-3 text-sm focus:border-primary outline-none focus:ring-1 focus:ring-primary transition-all text-white placeholder-slate-500"
                />
                <button className="absolute right-1 sm:right-1.5 top-1/2 -translate-y-1/2 bg-primary text-white p-1 sm:p-1.5 rounded-md hover:bg-primary-hover transition-colors shadow-lg active:scale-95">
                  <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs font-medium text-slate-500">
            <p className="text-center md:text-left">© 2024 Sanlia Chemi LLC. Бүх эрх хуулиар хамгаалагдсан.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              <a href="#" className="hover:text-white transition-colors">
                Нууцлалын бодлого
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Үйлчилгээний нөхцөл
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
