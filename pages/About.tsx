import React from 'react';
import { History, Eye, Flag, ShieldCheck, HeartHandshake, TrendingUp, CheckCircle2, Globe, Beaker, Factory, Sprout, Truck, ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full overflow-hidden">
        {/* Header */}
        <section className="relative w-full h-[50vh] min-h-[400px] bg-navy-dark overflow-hidden flex items-center justify-center pt-20">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 grayscale mix-blend-overlay"
              style={{ backgroundImage: `url("${IMAGES.hero_molecule}")` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy-dark/80 to-navy-dark"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 to-transparent opacity-50"></div>
            
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <Reveal>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">Бидний тухай</h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-2xl mx-auto">
                        Химийн бодисын худалдаа, ханган нийлүүлэлт, аюулгүй ажиллагааны сургалтыг мэргэжлийн түвшинд явуулдаг тэргүүлэгч компани.
                    </p>
                </Reveal>
            </div>
        </section>

        {/* Overview */}
        <section className="py-20 lg:py-32 bg-white relative">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div>
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-primary w-fit mb-8 border border-blue-100">
                                <History size={16} />
                                <span className="text-xs font-bold uppercase tracking-wide">Компанийн тойм</span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-8 leading-[1.1]">Санлиа хими ХХК</h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-medium">
                                <p>
                                    Санлиа хими ХХК нь 2013 онд үүсгэн байгуулагдсан. Үйлдвэрлэлийн зориулалттай техникийн болон химийн төрөл бүрийн бодис импортлох, худалдах тусгай зөвшөөрлийн хүрээнд үйл ажиллагаа эрхэлдэг компани юм.
                                </p>
                                <p>
                                    Бид химийн бодисыг "аюулгүй" импортлох, худалдах, хуульд заасан болоод нийгмийн өмнө хүлээсэн үүргээ чанд сахин биелүүлж, осол авааргүй амжилттай ажиллахыг эрхэм зорилгоо болгодог. Өнөөгийн байдлаар 400 гаруй нэр төрлийн химийн бүтээгдэхүүнийг найдвартайгаар нийлүүлж байна.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <div className="grid grid-cols-2 gap-12 mt-12 border-t border-slate-100 pt-12">
                                <div>
                                    <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">2013</p>
                                    <p className="text-sm font-bold text-navy-dark mt-2 uppercase tracking-wider">Үүсгэн байгуулагдсан</p>
                                </div>
                                <div>
                                    <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-500">400+</p>
                                    <p className="text-sm font-bold text-navy-dark mt-2 uppercase tracking-wider">Нэр төрлийн бүтээгдэхүүн</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    
                    <Reveal direction="left" delay={0.2}>
                        <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-navy-dark/20 group">
                            <div className="absolute inset-0 bg-navy-dark/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                            <div 
                            className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-[1.5s]"
                            style={{ backgroundImage: `url("${IMAGES.polymer}")` }}
                            ></div>
                            <div className="absolute bottom-8 left-8 right-8 z-20">
                                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                                    <p className="text-navy-dark font-bold italic text-lg">"Аюулгүй орчин - Бидний ирээдүй"</p>
                                    <p className="text-slate-500 text-sm mt-2">- Бидний уриа</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>

        {/* Vision Mission */}
        <section className="py-24 bg-background-light border-y border-slate-200">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <Reveal>
                        <div className="bg-white p-10 lg:p-14 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 group h-full">
                            <div className="size-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <Eye size={40} />
                            </div>
                            <h3 className="text-3xl font-bold text-navy-dark mb-6">Алсын хараа</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Бид салбартаа хямд үнийг тогтооно.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="bg-white p-10 lg:p-14 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-2 group h-full">
                            <div className="size-20 bg-accent/5 rounded-2xl flex items-center justify-center mb-8 text-accent group-hover:bg-accent group-hover:text-navy-dark transition-colors duration-300">
                                <Flag size={40} />
                            </div>
                            <h3 className="text-3xl font-bold text-navy-dark mb-6">Эрхэм зорилго</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Химийн бодисын худалдаа, ханган нийлүүлэлт, аюулгүй ажиллагааны сургалт, сурталчилгааг мэргэжлийн, ёс зүйтэй боловсон хүчнээр мэргэжлийн түвшинд явуулдаг байгаль орчинд ээлтэй тэргүүлэгч компани юм.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>

        {/* Values - Dark */}
        <section className="w-full bg-navy-dark text-white py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Бидний үнэт зүйлс</h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">Хариуцлагатай бизнес,<br />Итгэлтэй түншлэл</h3>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                   {[
                       { icon: CheckCircle2, title: 'Чанар', desc: 'Химийн бодисыг хүлээлгэн өгөхдөө яаж харьцах талаар зааварчилгаа өгч, чанарыг нь хангаж өгдөг.' },
                       { icon: ShieldCheck, title: 'Аюулгүй байдал', desc: 'Химийн бодисыг "аюулгүй" импортлох, худалдах, хуульд заасан үүргээ биелүүлдэг.' },
                       { icon: TrendingUp, title: 'Уян хатан', desc: 'Бид гэрээний дагуу химийн бодис нийлүүлэх төлбөрийн уян хатан үйлчилгээг үзүүлж байна.' },
                       { icon: HeartHandshake, title: 'Мэргэжлийн баг', desc: 'Салбартаа 13+ жил ажилласан туршлагатай мэргэжлийн боловсон хүчинтэй.' }
                   ].map((item, i) => (
                       <Reveal key={i} delay={i * 0.1}>
                           <div className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 h-full">
                               <div className="size-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-navy-dark transition-colors duration-300">
                                   <item.icon className="text-accent group-hover:text-navy-dark transition-colors" size={32} />
                               </div>
                               <h4 className="text-xl font-bold mb-4 text-white group-hover:text-accent transition-colors">{item.title}</h4>
                               <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">{item.desc}</p>
                           </div>
                       </Reveal>
                   ))}
                </div>
            </div>
        </section>

        {/* Partners */}
        <section className="py-24 bg-white">
             <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-navy-dark">Түншлэгч байгууллагууд</h2>
                        <p className="text-slate-500 mt-4 text-lg">Бид дотоодын олон аж ахуй нэгж байгууллагуудтай хамтран ажилладаг</p>
                    </div>
                </Reveal>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex justify-center"><p className="font-bold text-xl">БАЯН АЙРАГ</p></div>
                    <div className="flex justify-center"><p className="font-bold text-xl">Akaliko</p></div>
                    <div className="flex justify-center"><p className="font-bold text-xl">APU DAIRY</p></div>
                    <div className="flex justify-center"><p className="font-bold text-xl">MindTech</p></div>
                    <div className="flex justify-center"><p className="font-bold text-xl">GOBI</p></div>
                    <div className="flex justify-center"><p className="font-bold text-xl">SNOW FIELDS</p></div>
                </div>
             </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-background-light py-20 pb-32">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="bg-gradient-to-r from-navy-dark to-primary rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 relative">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="absolute right-0 top-0 h-full w-2/3 bg-white/5 skew-x-12 translate-x-1/4"></div>
                        
                        <div className="relative z-10 p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-10">
                            <div className="text-white max-w-2xl text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Хамтран ажиллахад бэлэн үү?</h2>
                                <p className="text-blue-100 text-xl font-medium">
                                    Таны бизнесийн амжилтын төлөө бид найдвартай химийн ханган нийлүүлэлтийг хариуцан ажиллах болно.
                                </p>
                            </div>
                            <button 
                                onClick={() => navigate('/#contact')}
                                className="whitespace-nowrap bg-white text-navy-dark px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all shadow-xl hover:shadow-white/20 hover:scale-105 flex items-center gap-3"
                            >
                                Холбоо барих
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    </div>
  );
};

export default About;