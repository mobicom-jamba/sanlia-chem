import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PlayCircle, BarChart3, Globe, ShieldCheck, HeartHandshake, ArrowUpRight, MapPin, Send, Droplets, FlaskConical, Microscope, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS, IMAGES } from '../constants';
import { Reveal } from '../components/Reveal';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate items to show based on screen size
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(4);
      } else if (window.innerWidth >= 640) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const displayedProducts = PRODUCTS.slice(0, 8);
  
  // Auto-play functionality with 2 second interval
  useEffect(() => {
    const totalSlides = Math.max(1, Math.ceil(displayedProducts.length / itemsToShow));
    
    if (!isPaused && totalSlides > 1) {
      autoPlayIntervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = prev + 1;
          return next >= totalSlides ? 0 : next;
        });
      }, 2000); // 2 seconds (2000ms)
    }

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
    };
  }, [isPaused, itemsToShow, displayedProducts.length]);

  const pauseAutoPlay = () => {
    setIsPaused(true);
    // Resume auto-play after 8 seconds of inactivity
    setTimeout(() => {
      setIsPaused(false);
    }, 8000);
  };
  
  const nextSlide = () => {
    pauseAutoPlay();
    const totalSlides = Math.max(1, Math.ceil(displayedProducts.length / itemsToShow));
    setCurrentIndex((prev) => {
      const next = prev + 1;
      return next >= totalSlides ? 0 : next;
    });
  };

  const prevSlide = () => {
    pauseAutoPlay();
    const totalSlides = Math.max(1, Math.ceil(displayedProducts.length / itemsToShow));
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1;
      return prevIndex < 0 ? totalSlides - 1 : prevIndex;
    });
  };

  const goToSlide = (index: number) => {
    pauseAutoPlay();
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex items-center bg-background-light overflow-hidden pt-20">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="flex flex-col gap-6 sm:gap-8 max-w-2xl">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-blue-100 shadow-sm text-primary w-fit hover:shadow-md transition-shadow cursor-default">
                    <ShieldCheck size={16} className="sm:w-[18px] sm:h-[18px] animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide">MNS 6458:2014 Стандарт</span>
                </div>
              </Reveal>
              
              <Reveal delay={0.1}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy-dark leading-[1.05] tracking-tight">
                    Химийн нийлүүлэлтийн <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">тэргүүлэгч түнш</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg font-medium">
                    Монголын үйлдвэрлэлд олон улсын стандарт, аюулгүй хангамж
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-2">
                    <button 
                    onClick={() => navigate('/products')}
                    className="group bg-navy-dark hover:bg-primary text-white h-12 sm:h-14 px-6 sm:px-8 rounded-full text-sm sm:text-base font-bold transition-all duration-300 shadow-xl shadow-navy-dark/20 hover:shadow-primary/30 flex items-center justify-center gap-2 hover:-translate-y-1 active:scale-95"
                    >
                    Каталог үзэх
                    <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                    onClick={() => navigate('/about')}
                    className="group bg-white border border-slate-200 hover:border-primary/30 text-slate-700 hover:text-primary h-12 sm:h-14 px-6 sm:px-8 rounded-full text-sm sm:text-base font-bold transition-all duration-300 shadow-sm hover:shadow-lg flex items-center justify-center gap-3 hover:-translate-y-1 active:scale-95"
                    >
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                        <PlayCircle size={20} className="sm:w-6 sm:h-6 relative z-10" />
                    </div>
                    Бидний тухай
                    </button>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex items-center gap-4 sm:gap-8 pt-4 border-t border-slate-200/60">
                    <div>
                        <p className="text-2xl sm:text-3xl font-bold text-navy-dark">13+</p>
                        <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Жилийн туршлага</p>
                    </div>
                    <div className="w-px h-8 sm:h-10 bg-slate-200"></div>
                    <div>
                        <p className="text-2xl sm:text-3xl font-bold text-navy-dark">400+</p>
                        <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Нэр төрлийн бүтээгдэхүүн</p>
                    </div>
                </div>
              </Reveal>
            </div>

            {/* Visual */}
            <Reveal direction="left" delay={0.2}>
                <div className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[650px] w-full rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 group select-none mt-8 lg:mt-0 bg-gradient-to-br from-primary/5 via-background-light to-accent/5">
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-gradient-shift"></div>
                    
                    {/* Glow Effects */}
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    
                    {/* Image Container with Transparency Support */}
                    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 lg:p-12 z-10">
                        <div 
                            className="w-full h-full bg-contain bg-center bg-no-repeat transition-all duration-[2s] ease-out group-hover:scale-105 group-hover:brightness-110"
                            style={{ backgroundImage: `url("${IMAGES.home_banner}")` }}
                        ></div>
                    </div>
                    
                    {/* Subtle Gradient Overlay for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 via-transparent to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 z-10 pointer-events-none"></div>
                    
                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 z-10 pointer-events-none"></div>
                    
                    {/* Floating Cards with Enhanced Design */}
                    <div className="absolute top-4 right-4 sm:top-10 sm:right-8 z-30 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/30 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl shadow-primary/20 animate-bounce duration-[3000ms] hidden sm:block group-hover:shadow-primary/40 transition-shadow">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-50"></div>
                            <FlaskConical size={24} className="sm:w-8 sm:h-8 text-accent relative z-10 drop-shadow-lg" />
                        </div>
                    </div>

                    {/* Enhanced Stats Card */}
                    <div className="absolute bottom-4 left-4 sm:bottom-12 sm:left-8 z-30 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl border border-white/60 p-3 sm:p-5 rounded-xl sm:rounded-2xl max-w-[200px] sm:max-w-[240px] shadow-2xl shadow-primary/10 hover:shadow-primary/20 hover:scale-105 transition-all duration-300 group/card">
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 rounded-xl opacity-0 group-hover/card:opacity-20 transition-opacity duration-300 blur-xl"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-2 sm:p-2.5 rounded-lg sm:rounded-xl text-primary shadow-sm shadow-primary/20">
                                <BarChart3 size={16} className="sm:w-5 sm:h-5" />
                            </div>
                            <span className="text-navy-dark text-[10px] sm:text-xs font-bold uppercase">Чанар</span>
                            </div>
                            <div className="flex items-end gap-2 mb-1">
                                <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-black text-2xl sm:text-3xl">100%</p>
                            </div>
                            <p className="text-slate-500 text-[10px] sm:text-xs font-medium leading-tight">Стандартын шаардлага хангасан бүтээгдэхүүн</p>
                        </div>
                    </div>
                    
                    {/* Decorative Corner Accents */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-br-[2rem] z-0"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/10 to-transparent rounded-tl-[2rem] z-0"></div>
                </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-navy-dark text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
            <Reveal>
                <div className="max-w-xl">
                    <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                        <span className="w-8 h-px bg-accent"></span>
                        Бидний давуу тал
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                        Найдвартай нийлүүлэлт,<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Мэргэжлийн баг.</span>
                    </h3>
                </div>
            </Reveal>
            <Reveal delay={0.2}>
                <p className="text-slate-400 max-w-sm text-base leading-relaxed border-l border-white/10 pl-6">
                    Салбартаа 13+ жил ажилласан туршлагатай мэргэжлийн боловсон хүчинтэй, химийн бодисыг стандартын дагуу нийлүүлдэг.
                </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: Globe, title: 'Чанарын баталгаа', desc: 'Химийн бодисыг хүлээлгэн өгөхдөө яаж харьцах талаар зааварчилгаа өгч, чанарыг нь хангаж өгдөг.', color: 'text-blue-400' },
                { icon: Microscope, title: 'Уян хатан нөхцөл', desc: 'Бид гэрээний дагуу химийн бодис нийлүүлэх төлбөрийн уян хатан үйлчилгээг үзүүлж байна.', color: 'text-accent' },
                { icon: ShieldCheck, title: 'Аюулгүй байдал', desc: 'Химийн бодисын хадгалалт, тээвэрлэлтийн аюулгүй байдлын стандартыг бүрэн хангасан.', color: 'text-purple-400' },
            ].map((item, i) => (
                <Reveal key={i} delay={i * 0.15}>
                    <div className="group h-full p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 relative overflow-hidden">
                        <div className={`absolute top-0 right-0 p-32 bg-${item.color === 'text-blue-400' ? 'blue-500' : item.color === 'text-accent' ? 'emerald-500' : 'purple-500'}/10 blur-[60px] rounded-full -mr-16 -mt-16 pointer-events-none group-hover:bg-opacity-20 transition-all`}></div>
                        
                        <div className="relative z-10">
                            <div className="size-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/20 border border-white/5">
                                <item.icon className={`${item.color}`} size={30} />
                            </div>
                            <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">{item.desc}</p>
                            
                            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-sm font-bold text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                Дэлгэрэнгүй <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions / Products Preview */}
      <section className="w-full bg-background-light py-24 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <Reveal>
                <h2 className="text-4xl lg:text-5xl font-bold text-navy-dark">Онцлох<br/>Бүтээгдэхүүнүүд</h2>
            </Reveal>
            <Reveal delay={0.1}>
                <div className="flex gap-4 items-center">
                    <button 
                        onClick={() => navigate('/products')}
                        className="flex items-center gap-2 text-navy-dark font-bold hover:text-primary transition-colors group"
                    >
                        Бүх бүтээгдэхүүнийг үзэх
                        <span className="bg-white p-2 rounded-full border border-gray-200 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                            <ArrowRight size={20} />
                        </span>
                    </button>
                </div>
            </Reveal>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 sm:p-3 shadow-lg border border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 group disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 sm:p-3 shadow-lg border border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 group disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Slider Wrapper */}
            <div 
              ref={containerRef}
              className="overflow-hidden relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div 
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6 lg:gap-8"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
                }}
              >
                {displayedProducts.map((product, i) => (
                  <div
                    key={product.id}
                    className="flex-shrink-0"
                    style={{ 
                      width: itemsToShow === 4 
                        ? 'calc(25% - 18px)' 
                        : itemsToShow === 2 
                          ? 'calc(50% - 12px)' 
                          : '100%',
                      minWidth: 0 
                    }}
                  >
                    <Reveal delay={i * 0.05}>
                      <div 
                        className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer border border-slate-100 hover:border-primary/20 flex flex-col h-full" 
                        onClick={() => navigate('/products')}
                      >
                        <div className="h-64 w-full bg-slate-200 overflow-hidden relative">
                          <div className="absolute inset-0 bg-navy-dark/10 group-hover:bg-transparent transition-colors z-10"></div>
                          <div className="absolute top-4 left-4 z-20 flex gap-2 max-w-[80%]">
                            <span className="bg-white/90 backdrop-blur-md text-navy-dark text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-sm truncate">
                              {product.category}
                            </span>
                          </div>
                          <div 
                            className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            style={{ backgroundImage: `url("${product.image}")` }}
                          ></div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-bold text-navy-dark group-hover:text-primary transition-colors">{product.name}</h3>
                            <ArrowUpRight size={20} className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                          </div>
                          <p className="text-sm text-slate-500 mb-5 line-clamp-2 leading-relaxed">{product.description}</p>
                          <div className="mt-auto flex flex-wrap gap-2">
                            {product.tags.slice(0, 3).map(tag => (
                              <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-md border border-slate-100 group-hover:border-primary/20 group-hover:text-primary group-hover:bg-primary/5 transition-all">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.max(1, Math.ceil(displayedProducts.length / itemsToShow)) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-white relative">
        <div className="grid lg:grid-cols-2 min-h-[600px] sm:min-h-[700px]">
          <div className="relative w-full h-[350px] sm:h-[400px] lg:h-auto bg-slate-100 overflow-hidden order-2 lg:order-1">
             <div className="absolute inset-0 bg-navy-dark/80 z-10"></div>
             <div 
                className="w-full h-full bg-cover bg-center opacity-60 scale-105"
                style={{ backgroundImage: `url("${IMAGES.map_bg}")` }}
             ></div>
             
             {/* Map Decoration */}
             <div className="absolute inset-0 z-20 flex items-center justify-center p-4 sm:p-8">
               <div className="w-full max-w-md">
                   <Reveal>
                        <div className="bg-white/10 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl">
                            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="bg-primary p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg shadow-primary/30 text-white shrink-0">
                                    <MapPin size={20} className="sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-white text-base sm:text-lg">Төв оффис</p>
                                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">Улаанбаатар, Баянзүрх дүүрэг,<br/>18-р хороо, 13-р хороолол,<br/>Манлайбаатар Дамдинсүрэнгийн гудамж,<br/>Мичид центр 19/1, 6 давхар, офис 603</p>
                                </div>
                            </div>
                            <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-white/10">
                                <div className="flex items-center gap-2 sm:gap-3 text-slate-300">
                                    <div className="size-2 rounded-full bg-accent shrink-0"></div>
                                    <span className="text-xs sm:text-sm">Даваа - Баасан: 09:00 - 18:00</span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3 text-slate-300">
                                    <div className="size-2 rounded-full bg-red-400 shrink-0"></div>
                                    <span className="text-xs sm:text-sm">Бямба - Ням: Амарна</span>
                                </div>
                            </div>
                        </div>
                   </Reveal>
               </div>
             </div>
          </div>
          
          <div className="p-6 sm:p-8 lg:p-24 flex flex-col justify-center bg-white relative order-1 lg:order-2">
            <Reveal direction="right">
                <div className="mb-6 sm:mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark mb-3 sm:mb-4">Бидэнтэй холбогдох</h2>
                <p className="text-slate-500 text-base sm:text-lg leading-relaxed">Тодорхой химийн бодисын шаардлага байна уу? Маягтыг бөглөнө үү, манай баг 24 цагийн дотор тантай холбогдох болно.</p>
                </div>
                
                <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2 group">
                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wide group-focus-within:text-primary transition-colors">Овог Нэр</label>
                    <input type="text" placeholder="Таны нэр" className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-slate-50 hover:bg-white focus:bg-white text-sm sm:text-base" />
                    </div>
                    <div className="space-y-2 group">
                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wide group-focus-within:text-primary transition-colors">Имэйл Хаяг</label>
                    <input type="email" placeholder="ner@company.com" className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-slate-50 hover:bg-white focus:bg-white text-sm sm:text-base" />
                    </div>
                </div>
                
                <div className="space-y-2 group">
                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wide group-focus-within:text-primary transition-colors">Сонирхож буй бүтээгдэхүүн</label>
                    <div className="relative">
                        <select className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-slate-50 hover:bg-white focus:bg-white text-slate-700 appearance-none cursor-pointer text-sm sm:text-base">
                        <option>Бүтээгдэхүүний ангилал сонгох</option>
                        <option>Уул уурхайн химийн бодис</option>
                        <option>Хүнсний нэмэлтүүд</option>
                        <option>Барилгын материал</option>
                        <option>Бусад</option>
                        </select>
                        <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <ArrowRight size={14} className="sm:w-4 sm:h-4 rotate-90" />
                        </div>
                    </div>
                </div>

                <div className="space-y-2 group">
                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wide group-focus-within:text-primary transition-colors">Зурвас</label>
                    <textarea rows={4} placeholder="Шаардлага болон тоо хэмжээний талаар бичнэ үү..." className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-slate-50 hover:bg-white focus:bg-white resize-none text-sm sm:text-base"></textarea>
                </div>

                <button type="submit" className="w-full bg-navy-dark hover:bg-primary text-white font-bold py-3.5 sm:py-4 rounded-xl transition-all duration-300 shadow-xl shadow-navy-dark/20 hover:shadow-primary/30 flex justify-center items-center gap-3 group hover:-translate-y-1 active:scale-95 text-sm sm:text-base">
                    <span>Илгээх</span>
                    <Send size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;