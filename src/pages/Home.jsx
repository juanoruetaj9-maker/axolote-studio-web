import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { proyectos } from '../data/proyectos'

const ease = [0.25, 0.46, 0.45, 0.94]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease },
})

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease },
})

const servicios = [
  {
    num: '01',
    title: 'Invitaciones Web',
    detail: 'Boda · XV años · Graduación',
    desc: 'Experiencias digitales tan elegantes que tus invitados las guardan.',
    price: 'Desde $499 MXN',
    href: '/demo/invitaciones',
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
  },
  {
    num: '02',
    title: 'Landing Pages',
    detail: 'Negocios · Profesionistas · Marcas',
    desc: 'Presencia digital que inspira confianza y convierte visitas en clientes.',
    price: 'Desde $1,090 MXN',
    href: '/demo/landing-pages',
    img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
  },
  {
    num: '03',
    title: 'Branding Visual',
    detail: 'Identidad · Logos · Paletas',
    desc: 'La marca que hace que tu competencia quiera saber quién te diseñó.',
    price: 'Desde $799 MXN',
    href: '/demo/branding',
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80',
  },
]

const testimonios = [
  {
    texto: 'Quedé encantada. Mis invitados no podían creer que era tan bonita y profesional. Todo el proceso fue clarísimo.',
    nombre: 'Ana Martínez',
    rol: 'Boda en Mérida, Yucatán',
    avatar: '/imagenes/home/testimonios/ana.jpg',
  },
  {
    texto: 'Los pacientes nuevos me dicen que la página fue lo que los convenció de agendar. Valió cada peso y más.',
    nombre: 'Dr. Carlos López',
    rol: 'Clínica Dental · Villahermosa',
    avatar: '/imagenes/home/testimonios/carlos.jpg',
  },
  {
    texto: 'Con animaciones, música y todo. Todos me preguntaron quién la hizo. Sin duda lo mejor del evento.',
    nombre: 'Sofía Ramírez',
    rol: 'XV Años · Villahermosa, Tabasco',
    avatar: '/imagenes/home/testimonios/sofia.jpg',
  },
]

const ticker = ['Invitaciones Web', 'Landing Pages', 'Branding Visual', 'Diseño Editorial', 'Sureste Mexicano', 'Entrega en 5 días']

export default function Home() {
  return (
    <div style={{ backgroundColor: '#080808' }}>

      {/* ─── HERO ─── */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-between">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex-1 flex flex-col justify-center py-10">

          {/* Eyebrow */}
          <motion.div {...fade(0)} className="flex items-center gap-3 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2D78]" />
            <span className="text-[11px] font-semibold text-[#555] uppercase tracking-[0.22em]">
              Estudio Creativo · Sureste Mexicano
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-10 md:mb-14">
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="font-display font-black text-white tracking-tighter leading-[0.93] text-[clamp(3.8rem,12vw,9.5rem)]"
            >
              Diseño que<br />
              no se{' '}
              <em className="not-italic text-[#FF2D78]">olvida.</em>
            </motion.h1>
          </div>

          {/* Sub + CTAs */}
          <motion.div {...fade(0.35)} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <p className="text-[#666] text-base leading-relaxed max-w-xs">
              Invitaciones web, landing pages y branding para negocios y eventos en México.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/portafolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FF2D78] text-black font-bold rounded-xl text-sm hover:bg-[#E0155F] transition-colors duration-200 cursor-pointer"
              >
                Ver trabajo <ArrowRight size={14} />
              </Link>
              <Link to="/contacto"
                className="text-sm font-medium text-[#555] hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Cotizar →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats bar */}
        <motion.div {...fade(0.55)}
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full pb-10 md:pb-14"
        >
          <div className="border-t border-white/8 pt-7 flex flex-wrap gap-8 md:gap-14">
            {[
              ['30+', 'Proyectos entregados'],
              ['98%', 'Satisfacción'],
              ['< 48h', 'Primera respuesta'],
              ['100%', 'México remoto'],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="text-2xl font-bold text-white font-display leading-none">{v}</p>
                <p className="text-[11px] text-[#444] mt-1 uppercase tracking-wider">{l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── TICKER ─── */}
      <div className="bg-[#FF2D78] py-3 overflow-hidden select-none">
        <div className="animate-marquee">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-5 text-[11px] font-black text-black uppercase tracking-[0.2em]">
              {item}
              <span className="text-black/30 text-lg leading-none">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── SERVICIOS ─── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#080808' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <span className="text-[11px] font-semibold text-[#444] uppercase tracking-[0.22em]">Qué hacemos</span>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl tracking-tight mt-2">Servicios</h2>
            </div>
            <Link to="/servicios"
              className="hidden md:flex items-center gap-1.5 text-[11px] font-semibold text-[#444] uppercase tracking-widest hover:text-[#FF2D78] transition-colors duration-200 cursor-pointer"
            >
              Ver precios <ArrowRight size={12} />
            </Link>
          </div>

          <div className="divide-y divide-white/8">
            {servicios.map((s, i) => (
              <motion.div key={s.num} {...inView(i * 0.06)}>
                <Link to={s.href}
                  className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-8 md:py-10 hover:bg-white/3 -mx-5 px-5 rounded-xl transition-colors duration-200 cursor-pointer"
                >
                  {/* Number */}
                  <span className="font-display font-black text-[#FF2D78] text-sm shrink-0 w-8">{s.num}</span>

                  {/* Title + detail */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-black text-3xl md:text-4xl text-white group-hover:text-[#FF2D78] transition-colors duration-200 tracking-tight leading-none mb-2">
                      {s.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#444] uppercase tracking-[0.15em]">{s.detail}</p>
                  </div>

                  {/* Desc + price (hidden on mobile) */}
                  <div className="hidden lg:block w-72 shrink-0">
                    <p className="text-sm text-[#666] leading-relaxed">{s.desc}</p>
                    <p className="text-xs text-[#444] mt-2 font-semibold">{s.price}</p>
                  </div>

                  {/* Image + arrow */}
                  <div className="flex items-center gap-5 shrink-0">
                    <div className="w-20 h-14 rounded-lg overflow-hidden opacity-40 group-hover:opacity-100 transition-opacity duration-400">
                      <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <ArrowUpRight size={20} className="text-[#333] group-hover:text-[#FF2D78] transition-colors duration-200 shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRABAJO / PORTAFOLIO ─── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <span className="text-[11px] font-semibold text-[#444] uppercase tracking-[0.22em]">Proyectos</span>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl tracking-tight mt-2">Trabajo reciente</h2>
            </div>
            <Link to="/portafolio"
              className="hidden md:flex items-center gap-1.5 text-[11px] font-semibold text-[#444] uppercase tracking-widest hover:text-[#FF2D78] transition-colors duration-200 cursor-pointer"
            >
              Ver todo <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {proyectos.map((p, i) => (
              <motion.div key={p.id} {...inView(i * 0.07)}>
                <Link
                  to={p.slug ? `/portafolio/${p.slug}` : '/portafolio'}
                  className="group flex flex-col overflow-hidden rounded-xl bg-[#111] border border-white/6 hover:border-[#FF2D78]/30 transition-all duration-300 cursor-pointer h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    {p.imagen ? (
                      <img
                        src={p.imagen}
                        alt={p.titulo}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                    ) : (
                      <div className={`bg-gradient-to-br ${p.gradient} w-full h-full flex items-center justify-center`}>
                        <span className="text-5xl">{p.icon}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex items-start justify-between gap-2 flex-1">
                    <div>
                      <span className="text-[10px] font-bold text-[#444] uppercase tracking-widest">{p.categoria}</span>
                      <h3 className="font-display font-bold text-white text-sm mt-0.5">{p.titulo}</h3>
                      <p className="text-[10px] text-[#444] mt-0.5">{p.ubicacion}</p>
                    </div>
                    <ArrowUpRight size={14} className="text-[#333] group-hover:text-[#FF2D78] transition-colors duration-200 shrink-0 mt-0.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATEMENT (contraste claro) ─── */}
      <section className="py-24 md:py-36 bg-[#F5F5F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...inView()}>
            <span className="text-[11px] font-bold text-[#999] uppercase tracking-[0.22em]">Por qué elegirnos</span>
            <h2 className="font-display font-black text-[#080808] text-[clamp(2rem,5.5vw,4.5rem)] tracking-tight leading-tight mt-4 max-w-4xl">
              Un estudio que hace que tu competencia quiera saber quién te diseñó.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-16 md:mt-20 divide-y md:divide-y-0 md:divide-x divide-[#E0E0DC]">
            {[
              { num: '01', head: 'Claridad total', body: 'Precio fijo, tiempo de entrega definido, sin tecnicismos. Sabes exactamente qué estás comprando.' },
              { num: '02', head: 'Diseño real', body: 'No somos una fábrica de páginas. Cada proyecto recibe atención visual y criterio de estudio.' },
              { num: '03', head: 'Acompañamiento', body: 'Contigo de principio a fin. Nunca te quedas sin respuesta ni con dudas sin resolver.' },
            ].map((item) => (
              <motion.div key={item.num} {...inView(0.08)}
                className="py-10 md:px-10 first:pl-0 last:pr-0"
              >
                <span className="font-display font-black text-4xl text-[#E8E8E4] leading-none block mb-4">{item.num}</span>
                <h3 className="font-display font-bold text-[#080808] text-xl mb-2">{item.head}</h3>
                <p className="text-sm text-[#777] leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIOS ─── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#080808' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="mb-12 md:mb-16">
            <span className="text-[11px] font-semibold text-[#444] uppercase tracking-[0.22em]">Testimonios</span>
            <h2 className="font-display font-black text-white text-4xl md:text-5xl tracking-tight mt-2">
              Lo que dicen.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonios.map((t, i) => (
              <motion.div key={i} {...inView(i * 0.08)}
                className="flex flex-col p-7 rounded-xl border border-white/8 bg-[#0D0D0D] hover:border-[#FF2D78]/20 transition-all duration-200"
              >
                <span className="font-display font-black text-[#FF2D78] text-5xl leading-none mb-5 select-none">"</span>
                <p className="text-[#999] text-sm leading-relaxed flex-1">"{t.texto}"</p>
                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/8">
                  <img src={t.avatar} alt={t.nombre}
                    className="w-10 h-10 rounded-full object-cover shrink-0 grayscale"
                  />
                  <div>
                    <p className="font-semibold text-white text-sm">{t.nombre}</p>
                    <p className="text-[11px] text-[#444] mt-0.5">{t.rol}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL (LIMA SÓLIDO) ─── */}
      <section className="bg-[#FF2D78] py-24 md:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...inView()}>
            <span className="text-[11px] font-bold text-black/40 uppercase tracking-[0.22em]">Siguiente paso</span>
            <h2 className="font-display font-black text-black tracking-tighter leading-none mt-4 mb-12
                           text-[clamp(4.5rem,14vw,11rem)]">
              ¿Empezamos?
            </h2>
          </motion.div>

          <motion.div {...inView(0.15)} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-xl text-sm hover:bg-[#111] transition-colors duration-200 cursor-pointer"
            >
              Cotizar mi proyecto <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/529932228936?text=Hola%20Axolote%20Studio%2C%20quiero%20cotizar."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-black/20 text-black font-semibold rounded-xl text-sm hover:border-black/40 transition-colors duration-200 cursor-pointer"
            >
              WhatsApp directo
            </a>
          </motion.div>

          <div className="mt-16 pt-8 border-t border-black/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-black/40 font-semibold uppercase tracking-widest">
            <span>hola@axolotestudio.mx</span>
            <span>Sureste de México · Servicio 100% remoto</span>
          </div>
        </div>
      </section>

    </div>
  )
}
