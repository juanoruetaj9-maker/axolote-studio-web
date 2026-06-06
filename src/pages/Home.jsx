import { Link } from 'react-router-dom'
import { ArrowRight, Star, CheckCircle, Sparkles, Globe, Palette } from 'lucide-react'
import { proyectos } from '../data/proyectos'

const stats = [
  { value: '30+', label: 'Proyectos entregados' },
  { value: '98%', label: 'Clientes satisfechos' },
  { value: '< 48h', label: 'Primera respuesta' },
  { value: 'México', label: 'Servicio 100% remoto' },
]

const servicios = [
  {
    icon: <Sparkles size={24} className="text-coral" />,
    title: 'Invitaciones Web Premium',
    desc: 'Experiencias visuales elegantes y memorables para tu boda, XV años, graduación o cualquier celebración especial.',
    href: '/servicios',
    desde: '$699 MXN',
  },
  {
    icon: <Globe size={24} className="text-brand" />,
    title: 'Landing Pages para Negocios',
    desc: 'Presencia digital profesional para tu negocio. Tu restaurante, clínica, hotel o empresa merece verse serio en internet.',
    href: '/servicios',
    desde: '$799 MXN',
  },
  {
    icon: <Palette size={24} className="text-brand" />,
    title: 'Branding e Imagen Visual',
    desc: 'Logotipo, colores, tipografía y recursos visuales que hacen que tu marca inspire confianza desde el primer vistazo.',
    href: '/servicios',
    desde: '$799 MXN',
  },
]

const testimonios = [
  {
    nombre: 'Ana Martínez',
    rol: 'Boda en Mérida',
    texto: 'Quedé encantada con mi invitación web. Mis invitados no podían creer que era tan bonita y profesional. Todo el proceso fue muy fácil y me explicaron todo.',
    stars: 5,
  },
  {
    nombre: 'Dr. Carlos López',
    rol: 'Clínica Dental, Villahermosa',
    texto: 'Mi clínica ahora tiene una página que realmente transmite confianza. Los pacientes me dicen que se ven muy profesionales. Valió completamente la pena.',
    stars: 5,
  },
  {
    nombre: 'Sofía Ramírez',
    rol: 'XV Años, Villahermosa',
    texto: 'La invitación quedó exactamente como la imaginé. Muy bonita, con animaciones y todo. Todos me preguntaron quién la hizo. ¡100% recomendado!',
    stars: 5,
  },
]

const featuredProjects = proyectos.slice(0, 3)

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-12 pb-16 md:pt-20 md:pb-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 80% 10%, rgba(27,79,216,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(232,118,90,0.05) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-light text-brand px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-coral inline-block" />
                Estudio Creativo &amp; Digital — México
              </div>

              <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.4rem] text-gray-950 mb-5 leading-[1.1]">
                Tu negocio merece
                <span className="text-brand"> verse tan profesional</span>
                {' '}como realmente trabaja
              </h1>

              <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Creamos invitaciones web premium, landing pages y branding para personas y negocios de toda México. Bonito, claro y sin complicarte.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  to="/portafolio"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-all shadow-md hover:shadow-lg text-sm"
                >
                  Ver portafolio
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-brand hover:text-brand transition-all text-sm"
                >
                  Cotizar mi proyecto
                </Link>
              </div>

              {/* Trust signal */}
              <div className="mt-8 flex items-center gap-2 justify-center lg:justify-start">
                <div className="flex -space-x-1">
                  {['🙋', '👩‍💼', '👨‍💼'].map((e, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-brand-light border-2 border-white flex items-center justify-center text-sm"
                    >
                      {e}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-700">30+ clientes</span> nos eligieron este año
                </p>
              </div>
            </div>

            {/* Right visual */}
            <div className="flex-1 w-full max-w-sm lg:max-w-none">
              <div className="relative">
                {/* Main card */}
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                  {/* Browser bar */}
                  <div className="bg-gray-50 px-4 py-3 flex items-center gap-2 border-b border-gray-100">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-white rounded-full px-3 py-1 text-xs text-gray-400 text-center">
                      axolotestudio.mx / invitacion-boda
                    </div>
                  </div>
                  {/* Card content */}
                  <div className="bg-gradient-to-br from-rose-50 to-pink-100 p-8 text-center">
                    <div className="text-4xl mb-3">💍</div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-1">
                      Les invitan a celebrar
                    </p>
                    <h3 className="font-display font-bold text-xl text-gray-800 mb-1">
                      Ana &amp; Diego
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">15 de Febrero, 2026 · Mérida, Yucatán</p>
                    <div className="flex items-center justify-center gap-1 text-rose-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-white/60 rounded-lg py-2 text-center">
                        <p className="font-bold text-gray-700">18:00</p>
                        <p className="text-gray-400">Ceremonia</p>
                      </div>
                      <div className="bg-white/60 rounded-lg py-2 text-center">
                        <p className="font-bold text-gray-700">120</p>
                        <p className="text-gray-400">Invitados</p>
                      </div>
                      <div className="bg-white/60 rounded-lg py-2 text-center">
                        <p className="font-bold text-rose-500">RSVP</p>
                        <p className="text-gray-400">Confirmar</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-xs font-semibold text-gray-700">Entregado en 5 días</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2">
                  <Star size={16} className="text-yellow-400" fill="currentColor" />
                  <span className="text-xs font-semibold text-gray-700">100% satisfecha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-sand py-10 border-y border-sand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-display font-extrabold text-3xl text-brand">{value}</p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-coral-light text-coral px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3">
              Lo que hacemos
            </span>
            <h2 className="section-heading text-3xl md:text-4xl text-gray-950 mb-4">
              Servicios diseñados para crecer
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              No vendemos páginas web. Vendemos confianza digital, imagen profesional y experiencias visuales que realmente importan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicios.map((s) => (
              <div
                key={s.title}
                className="card-hover group p-7 rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400">Desde {s.desde}</span>
                  <Link
                    to={s.href}
                    className="flex items-center gap-1 text-brand text-sm font-semibold hover:gap-2 transition-all"
                  >
                    Ver más <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTAFOLIO PREVIEW */}
      <section className="py-16 md:py-20 bg-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <span className="inline-block bg-brand-light text-brand px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3">
                Portafolio
              </span>
              <h2 className="section-heading text-3xl md:text-4xl text-gray-950">
                Proyectos recientes
              </h2>
            </div>
            <Link
              to="/portafolio"
              className="flex items-center gap-2 text-brand font-semibold text-sm hover:underline shrink-0"
            >
              Ver todos los proyectos <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className={`bg-gradient-to-br ${p.gradient} h-44 flex items-center justify-center relative`}>
                  <span className="text-5xl">{p.icon}</span>
                  <span className="absolute top-3 right-3 bg-white/90 text-xs font-semibold px-2.5 py-1 rounded-full text-gray-700">
                    {p.categoria}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-gray-900 mb-1">{p.titulo}</h3>
                  <p className="text-xs text-gray-400 mb-3">{p.ubicacion}</p>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{p.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-coral-light text-coral px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3">
              Testimonios
            </span>
            <h2 className="section-heading text-3xl md:text-4xl text-gray-950 mb-4">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonios.map((t, i) => (
              <div key={i} className="p-7 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={15} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">"{t.texto}"</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.nombre}</p>
                  <p className="text-xs text-gray-400">{t.rol}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-24 gradient-brand text-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="section-heading text-3xl md:text-5xl mb-5 text-white">
            ¿Listo para verte profesional?
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Escríbenos hoy. Te respondemos en menos de 24 horas y sin compromisos. El primer paso es fácil.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-brand font-bold rounded-full hover:bg-blue-50 transition-all shadow-lg text-sm"
            >
              Cotizar mi proyecto
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/529932228936?text=Hola%20Axolote%20Studio%2C%20quiero%20cotizar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all text-sm"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
