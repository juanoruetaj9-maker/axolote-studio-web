import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, ExternalLink } from 'lucide-react'
import { proyectos, categorias } from '../data/proyectos'

export default function Portafolio() {
  const [filtro, setFiltro] = useState('Todos')

  const filtrados =
    filtro === 'Todos' ? proyectos : proyectos.filter((p) => p.categoria === filtro)

  return (
    <div>
      {/* Header */}
      <section className="bg-sand py-14 md:py-20 border-b border-sand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-light text-brand px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
            Portafolio
          </span>
          <h1 className="section-heading text-3xl md:text-5xl text-gray-950 mb-4">
            Proyectos que hablan por sí solos
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Cada proyecto es único. Aquí mostramos parte de lo que hemos construido para personas y negocios de toda México.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                filtro === cat
                  ? 'bg-brand text-white shadow-sm'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtrados.map((p) => (
              <Link
                key={p.id}
                to={p.slug ? `/portafolio/${p.slug}` : '#'}
                className="card-hover group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col"
              >
                {/* Cover — foto real si existe, fallback a gradiente */}
                {p.imagen ? (
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={p.imagen}
                      alt={p.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-full text-gray-700">
                      {p.paquete}
                    </span>
                    <span className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full text-white">
                      {p.categoria}
                    </span>
                  </div>
                ) : (
                  <div
                    className={`bg-gradient-to-br ${p.gradient} h-44 flex items-center justify-center relative`}
                  >
                    <span className="text-5xl">{p.icon}</span>
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-full text-gray-700">
                      {p.paquete}
                    </span>
                    <span className="absolute top-3 right-3 bg-black/10 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full text-gray-700">
                      {p.categoria}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-gray-900 mb-1">{p.titulo}</h3>
                  <div className="flex items-center gap-1.5 mb-3">
                    <MapPin size={11} className="text-gray-400" />
                    <span className="text-xs text-gray-400">{p.ubicacion}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
                    {p.descripcion}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Ver proyecto */}
                  {p.slug && (
                    <div className="flex items-center gap-1 text-brand text-xs font-semibold group-hover:gap-2 transition-all">
                      <ExternalLink size={12} />
                      Ver proyecto completo
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {filtrados.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <p className="text-4xl mb-3">🔍</p>
              <p className="font-semibold text-gray-600">Sin proyectos en esta categoría aún</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-sand border-t border-sand-dark">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-heading text-2xl md:text-3xl text-gray-950 mb-4">
            ¿Tu proyecto podría ser el siguiente?
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Cuéntanos tu idea y en menos de 24 horas tienes una cotización clara, sin rodeos.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-all text-sm shadow-md"
          >
            Empezar mi proyecto <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  )
}
