import React, { useState, useEffect, useMemo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ChevronRight, Home, Factory, LayoutGrid, ChevronLeft, ArrowRight, Send, Search, Filter, X, Eye } from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../constants';
import { Reveal } from '../components/Reveal';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ProductModal } from '../components/ProductModal';
import { Product } from '../types';

const Products: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
    
    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // Collect all unique tags from products
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        PRODUCTS.forEach(p => p.tags.forEach(t => tags.add(t)));
        return Array.from(tags).sort();
    }, []);

    useEffect(() => {
        // Simulate data fetching
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  product.description.toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            
            const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => product.tags.includes(tag));

            return matchesSearch && matchesCategory && matchesTags;
        });
    }, [searchQuery, selectedCategories, selectedTags]);

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev => 
            prev.includes(category) 
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const toggleTag = (tag: string) => {
        setSelectedTags(prev => 
            prev.includes(tag) 
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedCategories([]);
        setSelectedTags([]);
    };

    const openQuickView = (e: React.MouseEvent, product: Product) => {
        e.stopPropagation(); // Prevent navigation to details page if card has onClick
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
    <div className="bg-background-light flex flex-col min-h-screen pt-20">
      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Header */}
      <div className="bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <nav aria-label="Breadcrumb" className="flex mb-6">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <NavLink to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary transition-colors">
                  <Home size={16} className="mr-2" />
                  Нүүр
                </NavLink>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight size={16} className="text-slate-400 mx-1" />
                  <span className="text-sm font-medium text-navy-dark">Бүтээгдэхүүний каталог</span>
                </div>
              </li>
            </ol>
          </nav>
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-black text-navy-dark mb-4 tracking-tight">Бүтээгдэхүүний каталог</h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Бид уул уурхай, хүнс, барилга, хөдөө аж ахуйн салбарын олон улсын стандартад нийцсэн өндөр чанарын химийн бодисыг нийлүүлж байна.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 w-full flex-grow">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          
          {/* Sidebar */}
          <aside className={`fixed inset-y-0 left-0 z-50 w-full max-w-sm bg-white p-4 sm:p-6 shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:w-72 lg:max-w-none lg:p-0 lg:shadow-none lg:bg-transparent ${isMobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="lg:sticky lg:top-28 space-y-4 sm:space-y-6 h-full overflow-y-auto lg:h-auto lg:overflow-visible pb-20 lg:pb-0">
              <div className="flex justify-between items-center lg:hidden mb-4 sm:mb-6">
                 <h2 className="text-lg sm:text-xl font-bold text-navy-dark">Шүүлтүүр</h2>
                 <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full active:scale-95 transition-transform">
                    <X size={22} className="sm:w-6 sm:h-6" />
                 </button>
              </div>

              {/* Search */}
              <div className="relative">
                <input 
                    type="text" 
                    placeholder="Хайх..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm sm:text-base"
                />
                <Search className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy-dark active:scale-95">
                        <X size={14} />
                    </button>
                )}
              </div>
              
              <div className="flex justify-between items-center">
                 <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide">Идэвхтэй шүүлтүүрүүд</span>
                 {(selectedCategories.length > 0 || selectedTags.length > 0 || searchQuery) && (
                    <button onClick={clearAllFilters} className="text-[10px] sm:text-xs font-bold text-primary hover:text-primary-hover hover:underline active:scale-95">
                        Цэвэрлэх
                    </button>
                 )}
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-base font-bold text-navy-dark mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                  <Factory size={18} className="text-primary" />
                  Ангилал
                </h3>
                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                  {PRODUCT_CATEGORIES.map((category) => (
                    <label key={category} className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center mt-0.5">
                        <input 
                            type="checkbox" 
                            checked={selectedCategories.includes(category)}
                            onChange={() => toggleCategory(category)}
                            className="peer w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary/20 transition-all cursor-pointer appearance-none checked:bg-primary checked:border-primary border-2 shrink-0" 
                        />
                        <svg className="absolute w-3.5 h-3.5 text-white left-0.5 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className={`text-sm font-medium transition-colors ${selectedCategories.includes(category) ? 'text-primary font-bold' : 'text-slate-600 group-hover:text-primary'}`}>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-base font-bold text-navy-dark mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                  <LayoutGrid size={18} className="text-primary" />
                  Төрөл
                </h3>
                <div className="space-y-3">
                  {allTags.map((tag) => (
                    <label key={tag} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input 
                            type="checkbox"
                            checked={selectedTags.includes(tag)}
                            onChange={() => toggleTag(tag)}
                            className="peer w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary/20 transition-all cursor-pointer appearance-none checked:bg-primary checked:border-primary border-2" 
                        />
                        <svg className="absolute w-3.5 h-3.5 text-white left-0.5 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className={`text-sm font-medium transition-colors ${selectedTags.includes(tag) ? 'text-primary font-bold' : 'text-slate-600 group-hover:text-primary'}`}>{tag}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          
          {/* Mobile Overlay */}
          {isMobileFiltersOpen && (
             <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileFiltersOpen(false)}></div>
          )}

          {/* Main Grid */}
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-xl border border-gray-200 shadow-sm sticky top-16 sm:top-20 z-30">
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <button 
                    onClick={() => setIsMobileFiltersOpen(true)}
                    className="lg:hidden p-2 bg-slate-100 rounded-lg text-slate-600 hover:text-primary hover:bg-slate-200 transition-colors active:scale-95"
                  >
                      <Filter size={18} className="sm:w-5 sm:h-5" />
                  </button>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium whitespace-nowrap">
                      <span className="font-bold text-navy-dark">{filteredProducts.length}</span> бүтээгдэхүүн
                  </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
                <span className="text-xs sm:text-sm text-slate-500 font-medium hidden sm:inline">Эрэмбэлэх:</span>
                <select className="border-none bg-slate-50 rounded-lg text-xs sm:text-sm text-slate-700 py-2 pl-3 pr-7 sm:pr-8 focus:ring-2 focus:ring-primary/20 font-bold cursor-pointer w-full sm:w-auto">
                  <option>Шинэ нь эхэндээ</option>
                  <option>А-Я</option>
                  <option>Я-А</option>
                </select>
              </div>
            </div>

            {isLoading ? (
                <div className="w-full py-20 flex flex-col items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-sm h-96">
                    <LoadingSpinner size={50} />
                    <p className="text-slate-400 text-sm font-medium mt-4 animate-pulse">Бүтээгдэхүүнийг ачаалж байна...</p>
                </div>
            ) : filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product, index) => (
                    <Reveal key={product.id} delay={index * 0.05}>
                        <div 
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col hover:-translate-y-2 h-full relative cursor-pointer"
                            onClick={(e) => openQuickView(e, product)}
                        >
                        <div className="relative h-64 overflow-hidden bg-slate-100">
                            <div className="absolute top-4 left-4 z-10 max-w-[85%]">
                                <span className="inline-block bg-navy-dark/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1.5 rounded-md uppercase tracking-wide shadow-sm truncate max-w-full">
                                    {product.category}
                                </span>
                            </div>
                            <div 
                            className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            style={{ 
                                backgroundImage: `url("${product.image}")`,
                                filter: product.id === '5' ? 'hue-rotate(45deg)' : product.id === '6' ? 'contrast(1.2)' : 'none'
                            }}
                            ></div>
                            <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/20 transition-colors duration-300"></div>
                            
                            {/* Hover Overlay Button */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <button 
                                    onClick={(e) => openQuickView(e, product)}
                                    className="bg-white text-navy-dark p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary hover:text-white"
                                    title="Quick View"
                                >
                                    <Eye size={24} />
                                </button>
                            </div>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                            <h3 className="text-lg font-bold text-navy-dark mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                            <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
                            <div className="mt-auto pt-4 border-t border-slate-100">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {product.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="px-2 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-200">{tag}</span> 
                                ))}
                                {product.tags.length > 3 && (
                                    <span className="px-2 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold rounded border border-slate-200">+{product.tags.length - 3}</span>
                                )}
                            </div>
                            <button 
                                className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 font-bold text-sm hover:bg-navy-dark hover:border-navy-dark hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
                                onClick={(e) => openQuickView(e, product)}
                            >
                                Дэлгэрэнгүй
                                <ArrowRight size={16} />
                            </button>
                            </div>
                        </div>
                        </div>
                    </Reveal>
                ))}
                </div>
            ) : (
                <div className="w-full py-20 flex flex-col items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <Search className="text-slate-300 mb-4" size={48} />
                    <h3 className="text-xl font-bold text-navy-dark mb-2">Бүтээгдэхүүн олдсонгүй</h3>
                    <p className="text-slate-500 text-center max-w-md mb-6">Та хайлтын нөхцөлөө өөрчилж үзнэ үү эсвэл шүүлтүүрээ цэвэрлэнэ үү.</p>
                    <button onClick={clearAllFilters} className="px-6 py-2 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20 hover:bg-primary-hover transition-colors">
                        Шүүлтүүр цэвэрлэх
                    </button>
                </div>
            )}

            {/* Pagination - Hide if no products or loading */}
            {!isLoading && filteredProducts.length > 0 && (
                <div className="flex justify-center mt-12">
                <nav className="flex items-center gap-2 p-1 bg-white rounded-xl shadow-sm border border-gray-200">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-50 hover:text-navy-dark transition-colors disabled:opacity-50" disabled>
                    <ChevronLeft size={20} />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-md shadow-primary/20">1</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-50 hover:text-navy-dark transition-colors disabled:opacity-50" disabled>
                    <ChevronRight size={20} />
                    </button>
                </nav>
                </div>
            )}
          </main>
        </div>
      </div>
      
      {/* Special Order CTA */}
      <section className="w-full bg-navy-dark py-16 lg:py-24 relative overflow-hidden mt-12">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                <div className="text-left max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Тусгай захиалга өгөх үү?</h2>
                    <p className="text-slate-300 text-lg leading-relaxed">Хэрэв танд жагсаалтад байхгүй химийн бодисын хэрэгцээ байгаа бол бидэнд хандана уу. Бид олон улсын сүлжээгээрээ дамжуулан нийлүүлэх боломжтой.</p>
                </div>
                <button 
                onClick={() => navigate('/#contact')}
                className="bg-accent hover:bg-emerald-400 text-navy-dark px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-accent/20 flex items-center gap-3 whitespace-nowrap hover:scale-105"
                >
                    Захиалга өгөх
                    <Send size={20} />
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Products;