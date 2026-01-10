import React from 'react';
import { Shield, ArrowRight, GraduationCap, Cross, Archive, Truck, Warehouse, ShieldCheck, Clock, Leaf, MessageSquare, Phone } from 'lucide-react';
import { IMAGES } from '../constants';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

const Safety: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full overflow-hidden">
        {/* Hero */}
        <section className="relative w-full min-h-[60vh] flex items-center bg-navy-dark text-white overflow-hidden py-24 pt-32">
             <div 
                className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
                style={{ backgroundImage: `url("${IMAGES.map_bg}")` }}
             ></div>
             <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/95 to-navy-dark/60 z-10"></div>
             
             <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                 <Reveal>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent w-fit mx-auto mb-8">
                        <Shield size={18} />
                        <span className="text-xs font-bold uppercase tracking-wide">Аюулгүй байдал нэгдүгээрт</span>
                    </div>
                 </Reveal>
                 <Reveal delay={0.1}>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-[1.1]">
                        Бүтээгдэхүүн<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">Үйлчилгээ</span>
                    </h1>
                 </Reveal>
                 <Reveal delay={0.2}>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                        Бид 350 гаруй төрлийн химийн бодисыг тусгай зөвшөөрлийн хүрээнд борлуулдаг ба нийлүүлэлтийн өмнө сургалт сурталчилгаа хийж, аюулгүй ажиллагааны зааварчилгаа өгдөг.
                    </p>
                 </Reveal>
                 <Reveal delay={0.3}>
                    <div className="mt-10">
                        <button 
                            onClick={() => navigate('/#contact')}
                            className="bg-accent hover:bg-emerald-400 text-navy-dark h-14 px-10 rounded-full text-base font-bold transition-all shadow-xl shadow-accent/20 flex items-center gap-2 mx-auto hover:scale-105"
                        >
                            Зөвлөгөө авах
                            <ArrowRight size={20} />
                        </button>
                    </div>
                 </Reveal>
             </div>
        </section>

        {/* Training Section */}
        <section className="relative w-full bg-background-light overflow-hidden py-24">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
                    <div className="w-full lg:w-1/2 space-y-10 order-2 lg:order-1">
                        <Reveal>
                            <div>
                                <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Сургалт ба Хөгжил</h2>
                                <h3 className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6">
                                    Борлуулалт ба нийлүүлэлтийн өмнөх сургалт
                                </h3>
                                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                    Манай компани нь нийлүүлэлтийн өмнө бүтээгдэхүүний талаар сургалт сурталчилгаа хийж, аюулгүй ажиллагааны зааварчилгааг өгдөг.
                                </p>
                            </div>
                        </Reveal>

                        <div className="space-y-6">
                            {[
                                { icon: GraduationCap, color: 'text-primary bg-blue-100', title: 'Сургалт сурталчилгаа', desc: 'Бүтээгдэхүүний талаар дэлгэрэнгүй мэдээлэл болон сургалт.' },
                                { icon: Cross, color: 'text-green-600 bg-green-100', title: 'Аюулгүй ажиллагаа', desc: 'Аюулгүй ажиллагааны зааварчилгааг мэргэжлийн түвшинд өгөх.' },
                                { icon: Archive, color: 'text-orange-600 bg-orange-100', title: 'Сав баглаа боодол устгал', desc: 'Ашигласан сав, баглаа боодлыг устгах үйлчилгээгээр ханган ажиллана.' }
                            ].map((item, i) => (
                                <Reveal key={i} delay={i * 0.15}>
                                    <div className="flex gap-6 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-x-[-10px]">
                                        <div className={`${item.color} p-4 rounded-xl h-fit shrink-0`}>
                                            <item.icon size={28} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-navy-dark text-xl mb-2">{item.title}</h4>
                                            <p className="text-slate-500 text-base leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
                         <Reveal direction="left" delay={0.2}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-12">
                                    <div className="h-[240px] w-full rounded-3xl overflow-hidden shadow-lg bg-slate-200 group">
                                        <div 
                                        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                        style={{ backgroundImage: `url("${IMAGES.hero_molecule}")` }}
                                        ></div>
                                    </div>
                                    <div className="h-[200px] w-full rounded-3xl overflow-hidden shadow-lg bg-slate-200 group">
                                        <div 
                                        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                        style={{ backgroundImage: `url("${IMAGES.ibc_tote}")` }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-[200px] w-full rounded-3xl overflow-hidden shadow-lg bg-slate-200 group">
                                        <div 
                                        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                        style={{ backgroundImage: `url("${IMAGES.white_bags}")` }}
                                        ></div>
                                    </div>
                                    <div className="h-[240px] w-full rounded-3xl overflow-hidden shadow-lg bg-slate-200 group">
                                        <div 
                                        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                        style={{ backgroundImage: `url("${IMAGES.polymer}")` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                         </Reveal>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl text-center border border-slate-100 max-w-xs animate-float">
                            <GraduationCap size={48} className="text-primary mb-3 mx-auto" />
                            <h3 className="text-4xl font-black text-navy-dark">350+</h3>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mt-1">Төрлийн бодис</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Logistics */}
        <section className="w-full bg-white py-24 border-t border-slate-100">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Логистик ба Агуулах</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6">
                            Стандартын шаардлага хангасан<br/>тээвэрлэлт, хадгалалт
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Химийн хорт болон аюултай бодис тээвэрлэх тусгай зөвшөөрөл бүхий тээврийн хэрэгслээр үйлчилж, стандартын агуулахад хадгалдаг.
                        </p>
                    </div>
                </Reveal>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <Reveal delay={0.1}>
                        <div className="group relative overflow-hidden rounded-[2.5rem] bg-navy-dark text-white shadow-2xl h-[450px] cursor-pointer">
                            <div 
                            className="absolute inset-0 opacity-60 group-hover:opacity-70 transition-all duration-700 bg-cover bg-center group-hover:scale-105"
                            style={{ backgroundImage: `url("${IMAGES.map_bg}")` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent"></div>
                            <div className="relative h-full flex flex-col justify-end p-10 lg:p-12">
                                <div className="mb-6 bg-primary p-4 rounded-2xl w-fit shadow-lg shadow-primary/30">
                                    <Truck size={32} className="text-white" />
                                </div>
                                <h4 className="text-3xl font-bold mb-4">Тусгай зөвшөөрөлтэй тээвэр</h4>
                                <p className="text-slate-300 text-base leading-relaxed mb-6 max-w-md">
                                    Химийн хорт болон аюултай бодис тээвэрлэх тусгай зөвшөөрөл бүхий том болон жижиг оврын ачааны машинаар улс, хот хоорондын тээвэрлэлт хийнэ.
                                </p>
                                <div className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                                    Дэлгэрэнгүй үзэх <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="group relative overflow-hidden rounded-[2.5rem] bg-navy-dark text-white shadow-2xl h-[450px] cursor-pointer">
                            <div 
                            className="absolute inset-0 opacity-60 group-hover:opacity-70 transition-all duration-700 bg-cover bg-center group-hover:scale-105"
                            style={{ backgroundImage: `url("${IMAGES.polymer}")` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent"></div>
                            <div className="relative h-full flex flex-col justify-end p-10 lg:p-12">
                                <div className="mb-6 bg-accent p-4 rounded-2xl w-fit shadow-lg shadow-accent/30">
                                    <Warehouse size={32} className="text-navy-dark" />
                                </div>
                                <h4 className="text-3xl font-bold mb-4">MNS 6458:2014 Стандарт</h4>
                                <p className="text-slate-300 text-base leading-relaxed mb-6 max-w-md">
                                    Стандартын шаардлага хангасан химийн бодисын агуулахыг 2015 онд ашиглалтад оруулсан. Бүх төрлийн химийн бодис хадгалах, бүртгэх үйлчилгээтэй.
                                </p>
                                <div className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                                    Дэлгэрэнгүй үзэх <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                   {[
                       { icon: ShieldCheck, title: 'Агуулахын үйлчилгээ', desc: 'Хадгалалтын хугацаан дахь агуулахын барааны бүртгэл, хадгалалтын үеийн үйлчилгээ.' },
                       { icon: Clock, title: 'Хүргэлт', desc: 'Хүргэлтийн үйлчилгээг түргэн шуурхай, найдвартай үзүүлнэ.' },
                       { icon: Leaf, title: 'Устгал', desc: 'Харилцагчдаа нийлүүлсэн химийн бодисын ашигласан сав, баглаа боодлыг устгах үйлчилгээ.' },
                   ].map((item, i) => (
                       <Reveal key={i} delay={0.3 + (i * 0.1)}>
                            <div className="bg-background-light p-8 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                                <div className="flex items-center gap-4 mb-4">
                                    <item.icon size={36} className="text-slate-400 group-hover:text-primary transition-colors" />
                                    <h5 className="font-bold text-navy-dark text-lg">{item.title}</h5>
                                </div>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                       </Reveal>
                   ))}
                </div>
            </div>
        </section>

        {/* CTA Bottom */}
        <section className="w-full bg-navy-dark text-white py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <Reveal>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">Аюулгүй байдлын шийдэл<br/>хайж байна уу?</h2>
                    <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-12 font-light">
                        Манай мэргэжилтнүүдтэй холбогдож, танай байгууллагад тохирсон аюулгүй ажиллагааны сургалт болон логистикийн төлөвлөгөөг гаргаарай.
                    </p>
                </Reveal>
                <Reveal delay={0.2}>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button 
                        onClick={() => navigate('/#contact')}
                        className="bg-accent hover:bg-emerald-400 text-navy-dark h-16 px-12 rounded-full text-lg font-bold transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-3 hover:-translate-y-1"
                        >
                            Зөвлөгөө авах
                            <MessageSquare size={22} />
                        </button>
                        <button 
                        onClick={() => navigate('/#contact')}
                        className="bg-white/5 border border-white/10 hover:bg-white/10 text-white h-16 px-12 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-3 hover:-translate-y-1"
                        >
                            Холбоо барих
                            <Phone size={22} />
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    </div>
  );
};

export default Safety;