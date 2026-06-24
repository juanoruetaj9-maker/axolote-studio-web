import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { proyectos, categorias } from '../data/proyectos'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
})

export default function Portafolio() {
  const [filtro, setFiltro] = useState('Todos')

  const filtrados = filtro === 'Todos' ? proyectos : proyectos.filter((p) => p.categoria === filtro)

  return (
    <div style={{ backgroundColor: '#080808' }}>

      {/* Header */}
      <section style={{ backgroundColor: '#080808' }} className="pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...inView()}>
            <span className="text-[11px] font-semibold text-[#444] uppercase tracking-[0.22em]">Portafolio</span>
            <h1 className="font-display font-black text-white text-[clamp(2.8rem,8vw,6rem)] tracking-tight leading-none mt-3 max-w-2xl">
              Proyectos que hablan<br />por sí solos.
            </h1>
            <p className="text-[#555] text-base leading-relaxed mt-5 max-w-md">
              Cada proyecto es único. Aquí mostramos parte de lo que hemos construido para personas y negocios de toda México.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-20 z-40 border-b border-white/8 py-3" style={{ backgroundColor: '#080808' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center gap-2 overflow-x-auto">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                filtro === cat
                  ? 'bg-[#FF2D78] text-white'
                  : 'text-[#555] hover:text-white bg-transparent hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="py-10 md:py-14" style={{ backgroundColor: '#080808' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {filtrados.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display font-bold text-[#333] text-lg">Sin proyectos en esta categoría aún</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtrados.map((p, i) => (
                <motion.div key={p.id} {...inView(i * 0.05)}>
                  <Link
                    to={p.slug ? `/portafolio/${p.slug}` : '#'}
                    className="group bg-[#111] rounded-xl overflow-hidden border border-white/8 hover:border-[#FF2D78]/30 flex flex-col transition-all duration-200 cursor-pointer h-full"
                  >
                    {/* Cover */}
                    {p.imagen ? (
                      <div className="h-44 overflow-hidden relative">
                        <img
                          src={p.imagen}
                          alt={p.titulo}
                          loading="lazy"
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        />
                        <span className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm text-[10px] font-semibold px-2.5 py-1 rounded-full text-white">
                          {p.paquete}
                        </span>
                        <span className="absolute top-3 right-3 bg-[#FF2D78]/80 backdrop-blur-sm text-[10px] font-medium px-2.5 py-1 rounded-full text-white">
                          {p.categoria}
                        </span>
                      </div>
                    ) : (
                      <div className={`bg-gradient-to-br ${p.gradient} h-44 flex items-center justify-center relative`}>
                        <span className="text-5xl">{p.icon}</span>
                        <span className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm text-[10px] font-semibold px-2.5 py-1 rounded-full text-white">
                          {p.paquete}
                        </span>
                        <span className="absolute top-3 right-3 bg-[#FF2D78]/80 text-[10px] font-medium px-2.5 py-1 rounded-full text-white">
                          {p.categoria}
                        </span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-display font-bold text-white mb-1">{p.titulo}</h3>
                      <div className="flex items-center gap-1.5 mb-3">
                        <MapPin size={11} className="text-[#444]" />
                        <span className="text-xs text-[#444]">{p.ubicacion}</span>
                      </div>
                      <p className="text-sm text-[#555] leading-relaxed flex-1 mb-4">{p.descripcion}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {p.tags.map((tag) => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 bg-white/5 text-[#555] rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {p.slug && (
                        <div className="flex items-center gap-1.5 text-[#FF2D78] text-xs font-semibold group-hover:gap-2 transition-all duration-200">
                          <ExternalLink size={11} />
                          Ver proyecto completo
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FF2D78] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <p className="text-[11px] font-bold text-black/40 uppercase tracking-[0.22em] mb-2">Siguiente proyecto</p>
            <h2 className="font-display font-black text-black tracking-tight leading-none text-[clamp(3rem,9vw,7rem)]">
              ¿El tuyo?
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-black text-white font-bold rounded-xl text-sm hover:bg-[#111] transition-colors cursor-pointer"
            >
              Empezar mi proyecto <ArrowRight size={14} />
            </Link>
            <a href="https://wa.me/529932228936" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-black/20 text-black font-semibold rounded-xl text-sm hover:border-black/40 transition-colors cursor-pointer"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
