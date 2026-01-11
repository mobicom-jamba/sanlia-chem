import React, { useEffect } from 'react';
import { X, Tag, FileText, CheckCircle } from 'lucide-react';
import { Product } from '../types';
import { useNavigate } from 'react-router-dom';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
          onClose();
      }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-navy-dark/60 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-2xl sm:rounded-[2rem] shadow-2xl w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 bg-white/80 sm:bg-white/50 backdrop-blur-md rounded-full hover:bg-white text-navy-dark transition-all shadow-sm group active:scale-95"
        >
          <X size={20} className="sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-slate-100 relative min-h-[250px] sm:min-h-[300px] md:min-h-full group overflow-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url("${product.image}")` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent opacity-60"></div>
            
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 hidden md:block">
                <p className="text-xs sm:text-sm font-medium border-l-2 border-primary pl-3">Зургийг томруулахын тулд хулганыг гүйлгэнэ үү</p>
            </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col overflow-y-auto bg-white relative max-h-[60vh] sm:max-h-none md:max-h-[90vh]">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
                 <span className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider ${
                    product.category === 'Уул уурхай' ? 'bg-navy-dark text-white' :
                    product.category === 'Хүнс' ? 'bg-accent text-navy-dark' :
                    'bg-blue-100 text-primary'
                 }`}>
                    {product.category}
                </span>
                {product.isNew && (
                    <span className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-200">
                        <CheckCircle size={10} className="sm:w-3 sm:h-3" /> Шинэ
                    </span>
                )}
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy-dark mb-4 sm:mb-6 leading-tight">{product.name}</h2>
            
            <div className="prose prose-slate text-slate-600 mb-6 sm:mb-8 flex-grow">
                <p className="text-base sm:text-lg leading-relaxed font-medium">{product.description}</p>
                <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100">
                    <p className="text-[10px] sm:text-xs text-slate-500 mb-2 sm:mb-3 font-bold uppercase tracking-widest">Онцлог шинжүүд:</p>
                    <ul className="text-xs sm:text-sm space-y-2 sm:space-y-3">
                         <li className="flex items-center gap-2 sm:gap-3">
                            <div className="size-1.5 sm:size-2 rounded-full bg-primary shadow-sm shadow-primary/50 shrink-0"></div>
                            <span className="font-medium text-slate-700">Олон улсын стандартад нийцсэн чанар</span>
                         </li>
                         <li className="flex items-center gap-2 sm:gap-3">
                            <div className="size-1.5 sm:size-2 rounded-full bg-primary shadow-sm shadow-primary/50 shrink-0"></div>
                            <span className="font-medium text-slate-700">Байгаль орчинд ээлтэй, аюулгүй савлагаа</span>
                         </li>
                         <li className="flex items-center gap-2 sm:gap-3">
                            <div className="size-1.5 sm:size-2 rounded-full bg-primary shadow-sm shadow-primary/50 shrink-0"></div>
                            <span className="font-medium text-slate-700">Мэргэжлийн зааварчилгаа, зөвлөгөө</span>
                         </li>
                    </ul>
                </div>
            </div>

            <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-6 border-t border-slate-100 mt-auto">
                <div>
                    <h4 className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide mb-2 sm:mb-3">
                        <Tag size={12} className="sm:w-3.5 sm:h-3.5" />
                        Түлхүүр үгс:
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {product.tags.map(tag => (
                            <span key={tag} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white hover:bg-primary/5 border border-slate-200 hover:border-primary/20 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-bold text-slate-600 hover:text-primary transition-all cursor-default select-none">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button 
                        onClick={() => {
                            onClose();
                            navigate('/#contact');
                        }}
                        className="flex-1 bg-navy-dark hover:bg-primary text-white font-bold py-3.5 sm:py-4 rounded-xl transition-all shadow-xl shadow-navy-dark/20 hover:shadow-primary/30 flex items-center justify-center gap-2 transform active:scale-95 group text-sm sm:text-base"
                    >
                        <FileText size={18} className="sm:w-5 sm:h-5 group-hover:animate-pulse" />
                        Үнийн санал авах
                    </button>
                    <button 
                         onClick={onClose}
                         className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 hover:text-navy-dark transition-colors active:scale-95 text-sm sm:text-base"
                    >
                        Хаах
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};