import { MapPin, Phone, Award, CheckCircle, ArrowRight } from 'lucide-react'
import DemoBanner from '../components/DemoBanner'

const WA = `https://wa.me/529932228936?text=${encodeURIComponent('Hola, vi la página del Arq. Roberto Díaz y me gustaría una landing similar para mi negocio.')}`
const DARK = '#0F1923'
const GOLD = '#C9A155'

const PROYECTOS = [
  { img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=700&q=80', titulo: 'Casa Paraíso', tipo: 'Residencial · Mérida, Yuc.', m2: '380 m²' },
  { img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80', titulo: 'Torre Mirador', tipo: 'Comercial · Campeche, Camp.', m2: '1,200 m²' },
  { img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80', titulo: 'Loft Reforma', tipo: 'Remodelación · CDMX', m2: '95 m²' },
  { img: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=700&q=80', titulo: 'Hacienda Uxmal', tipo: 'Restauración · Yucatán', m2: '560 m²' },
]

const SERVICIOS = [
  { icon: '📐', title: 'Diseño arquitectónico', desc: 'Desde anteproyecto hasta planos ejecutivos. Diseño funcional, estético y adaptado a tu presupuesto.' },
  { icon: '🏗️', title: 'Supervisión de obra', desc: 'Presencia constante en sitio para garantizar calidad, tiempos y costos según el proyecto.' },
  { icon: '🔨', title: 'Remodelación y ampliación', desc: 'Transformamos espacios existentes con visión contemporánea y respeto por la estructura original.' },
  { icon: '💡', title: 'Consultoría arquitectónica', desc: 'Asesoría profesional para decisiones de inversión inmobiliaria, viabilidad y regulaciones.' },
]

export default function ProyectoArqRoberto() {
  return (
    <div className="min-h-screen bg-white">
      <DemoBanner cta="Hola! Vi la landing del Arq. Roberto Díaz de Axolote Studio y quiero algo así para mi negocio." />

      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-end pb-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${DARK} 0%, rgba(15,25,35,0.5) 50%, transparent 100%)` }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: GOLD }} />
              <p className="text-xs uppercase tracking-widest" style={{ color: GOLD }}>Arquitecto — Mérida, Yucatán</p>
            </div>
            <h1 className="font-display font-black text-white leading-tight mb-3" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
              Arq. Roberto<br />Díaz Herrera
            </h1>
            <p className="text-gray-300 text-base mb-6 max-w-md leading-relaxed">
              Espacios que inspiran. Arquitectura contemporánea con alma mexicana para el sureste de la república.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full text-sm shadow-xl hover:opacity-90 transition-all"
                style={{ background: GOLD, color: DARK }}>
                📋 Solicitar proyecto
              </a>
              <a href="#portafolio"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition-all backdrop-blur-sm font-medium">
                Ver portafolio →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: DARK }}>
        <div className="max-w-5xl mx-auto px-6 py-7 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { value: '18 años', label: 'De experiencia' },
            { value: '80+', label: 'Proyectos entregados' },
            { value: '12', label: 'Premios de diseño' },
            { value: '100%', label: 'Clientes satisfechos' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-display font-black text-2xl md:text-3xl" style={{ color: GOLD }}>{value}</p>
              <p className="text-gray-400 text-xs mt-1 uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portafolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: GOLD }}>Portafolio</p>
            <h2 className="font-display font-black text-3xl md:text-4xl" style={{ color: DARK }}>Proyectos realizados</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROYECTOS.map((p, i) => (
              <div key={p.titulo} className={`rounded-2xl overflow-hidden shadow-md group relative ${i === 0 ? 'md:row-span-2' : ''}`}
                style={{ aspectRatio: i === 0 ? undefined : '16/9', minHeight: i === 0 ? '500px' : undefined }}>
                <img src={p.img} alt={p.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <div className="inline-block text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full mb-2" style={{ background: GOLD, color: DARK }}>
                    {p.m2}
                  </div>
                  <h3 className="text-white font-bold text-lg">{p.titulo}</h3>
                  <p className="text-gray-300 text-xs">{p.tipo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: GOLD }}>Especialidades</p>
            <h2 className="font-display font-black text-3xl md:text-4xl" style={{ color: DARK }}>Servicios profesionales</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICIOS.map((s) => (
              <div key={s.title} className="rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all bg-white">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6" style={{ background: '#F8F6F0' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="Arq. Roberto Díaz" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>Sobre mí</p>
            <h2 className="font-display font-black text-3xl mb-3" style={{ color: DARK }}>
              Roberto Díaz Herrera
            </h2>
            <p className="text-gray-500 text-sm font-medium mb-6">Arquitecto · Maestría en Diseño Sostenible, UNAM</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Nací en Mérida y estudié en la UNAM. Regresé al sureste con una visión clara: hacer arquitectura contemporánea que dialogue con el clima, la vegetación y la cultura de esta región.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-7">
              Cada proyecto es una conversación entre el cliente, el lugar y yo. No existen fórmulas — existen personas, contextos y posibilidades.
            </p>
            <div className="flex flex-col gap-3">
              {[
                'Cédula Profesional: 8824731',
                'Miembro activo de la SCAYUM',
                'Premio INBA al Diseño Regional 2023',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={15} style={{ color: GOLD }} className="shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: GOLD }}>Contacto</p>
            <h2 className="font-display font-black text-3xl" style={{ color: DARK }}>Hablemos de tu proyecto</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 text-center">
            {[
              { icon: <MapPin size={20} />, title: 'Ubicación', body: 'Mérida, Yucatán\nServicios en todo el sureste' },
              { icon: <Phone size={20} />, title: 'WhatsApp', body: '+52 999 234 5678\nLun–Vie 9am–7pm' },
              { icon: <Award size={20} />, title: 'Colegiado', body: 'SCAYUM #1423\nCDMX y Sureste' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-gray-100 p-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-white" style={{ background: DARK }}>
                  {icon}
                </div>
                <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                <p className="text-gray-500 text-xs whitespace-pre-line leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-white text-center" style={{ background: DARK }}>
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: GOLD }}>Demo creado por Axolote Studio</p>
        <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
          ¿Quieres una página así<br className="hidden md:block" /> para tu negocio?
        </h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto mb-10 leading-relaxed">
          Creamos landing pages profesionales como esta para negocios, despachos y profesionistas. Lista en 6 días hábiles. Desde $1,090 MXN.
        </p>
        <a href={WA} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-full hover:opacity-90 transition-all shadow-2xl text-sm"
          style={{ background: GOLD, color: DARK }}>
          🏗️ Quiero mi landing page <ArrowRight size={15} />
        </a>
      </section>
    </div>
  )
}
