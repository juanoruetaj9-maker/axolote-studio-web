import { Link } from 'react-router-dom'
import { Check, ArrowRight, Zap, Star } from 'lucide-react'

function PriceCard({ plan, price, includes, badge, highlight, time, nota }) {
  return (
    <div
      className={`relative rounded-2xl p-7 flex flex-col h-full transition-all ${
        highlight
          ? 'bg-brand text-white shadow-2xl scale-[1.02]'
          : 'bg-white border border-gray-100 shadow-sm'
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              highlight ? 'bg-coral text-white' : 'bg-brand text-white'
            }`}
          >
            {badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3
          className={`font-display font-bold text-xl mb-2 ${
            highlight ? 'text-white' : 'text-gray-900'
          }`}
        >
          {plan}
        </h3>
        <div className="flex items-end gap-1">
          <span
            className={`font-display font-extrabold text-4xl ${
              highlight ? 'text-white' : 'text-brand'
            }`}
          >
            {price}
          </span>
          <span className={`text-sm mb-1 ${highlight ? 'text-blue-200' : 'text-gray-400'}`}>
            MXN
          </span>
        </div>
        {time && (
          <p className={`text-xs mt-1 ${highlight ? 'text-blue-200' : 'text-gray-400'}`}>
            {time}
          </p>
        )}
      </div>

      <ul className="flex flex-col gap-2.5 mb-8 flex-1">
        {includes.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <Check
              size={16}
              className={`shrink-0 mt-0.5 ${highlight ? 'text-green-300' : 'text-green-500'}`}
            />
            <span className={highlight ? 'text-blue-50' : 'text-gray-600'}>{item}</span>
          </li>
        ))}
      </ul>

      {nota && (
        <p className={`text-xs mb-4 ${highlight ? 'text-blue-200' : 'text-gray-400'}`}>
          * {nota}
        </p>
      )}

      <Link
        to="/contacto"
        className={`block w-full text-center py-3 rounded-full font-semibold text-sm transition-all ${
          highlight
            ? 'bg-white text-brand hover:bg-blue-50'
            : 'bg-brand text-white hover:bg-brand-dark'
        }`}
      >
        Cotizar este plan
      </Link>
    </div>
  )
}

const extras = [
  { label: 'Cambios después de entrega', precio: '+$200 MXN' },
  { label: 'Entrega urgente (menos de 48h)', precio: '+30% del total' },
  { label: 'Dominio personalizado (.mx o .com)', precio: 'Costo adicional' },
  { label: 'Hosting premium anual', precio: 'Costo adicional' },
]

export default function Servicios() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-sand py-14 md:py-20 border-b border-sand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-light text-brand px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
            Servicios y precios
          </span>
          <h1 className="section-heading text-3xl md:text-5xl text-gray-950 mb-4">
            Todo claro, sin sorpresas
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Precios transparentes y paquetes diseñados para cualquier negocio. No vendemos tecnología, vendemos resultados.
          </p>
        </div>
      </section>

      {/* LÍNEA A — Invitaciones */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-coral-light text-coral px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <span className="text-lg">💍</span>
              Línea A — Experiencias Premium
            </div>
            <h2 className="section-heading text-2xl md:text-3xl text-gray-950 mb-3">
              Invitaciones Web Premium
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Para tu boda, XV años, graduación o cualquier celebración especial. Tu evento merece una experiencia visual tan elegante como la ocasión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <PriceCard
              plan="Paquete Esencial"
              price="$699"
              time="Entrega en 4–7 días hábiles"
              includes={[
                'Diseño visual personalizado',
                'Página web de invitación',
                'Información del evento',
                'Ubicación en mapa',
                'Cuenta regresiva',
                'Galería simple',
                'Botón de WhatsApp',
                'Música opcional',
                'Código QR del evento',
              ]}
            />
            <PriceCard
              plan="Paquete Premium"
              price="$999"
              time="Entrega en 5–10 días hábiles"
              badge="Más popular"
              highlight
              includes={[
                'Todo el paquete Esencial',
                'RSVP de confirmación',
                'Galería de fotos premium',
                'Animaciones suaves',
                'Código de vestimenta',
                'Información de hospedaje',
                'Historia de pareja o graduado',
                'Playlist de Spotify',
                'Personalización visual extra',
              ]}
            />
          </div>
        </div>
      </section>

      {/* LÍNEA B — Negocios */}
      <section className="py-16 md:py-20 bg-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-light text-brand px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <span className="text-lg">🏢</span>
              Línea B — Presencia Digital
            </div>
            <h2 className="section-heading text-2xl md:text-3xl text-gray-950 mb-3">
              Landing Pages para Negocios
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Para restaurantes, clínicas, hoteles, abogados, barberías y cualquier negocio que quiera verse serio en internet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PriceCard
              plan="Starter"
              price="$799"
              time="Entrega en 7–10 días hábiles"
              includes={[
                'Landing page funcional',
                'Branding visual básico',
                'Colores y tipografía',
                'Botón WhatsApp directo',
                'Sección de ubicación',
                'Contacto rápido',
                'Diseño 100% responsive',
              ]}
            />
            <PriceCard
              plan="Premium"
              price="$1,299"
              time="Entrega en 10–15 días hábiles"
              badge="Más popular"
              highlight
              includes={[
                'Todo el plan Starter',
                'Mejor estructura visual',
                'Copywriting básico',
                'Galería de servicios/fotos',
                'Sección de testimonios',
                'CTAs estratégicos',
                'Optimización móvil avanzada',
                'Branding más trabajado',
              ]}
            />
            <PriceCard
              plan="Digital Inicial Completo"
              price="$1,799"
              time="Entrega en 15–20 días hábiles"
              includes={[
                'Todo el plan Premium',
                'Landing page premium',
                'Branding visual inicial',
                'Recursos visuales básicos',
                'Plan de contenido 30 días',
                'Guía de presencia digital',
                'Asesoría de imagen inicial',
              ]}
              nota="Incluye sesión de orientación digital"
            />
          </div>
        </div>
      </section>

      {/* EXTRAS */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-2xl text-gray-950 text-center mb-8">
            Servicios adicionales
          </h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {extras.map(({ label, precio }) => (
              <div key={label} className="flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition-colors">
                <span className="text-sm text-gray-700">{label}</span>
                <span className="text-sm font-semibold text-brand">{precio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ rápida */}
      <section className="py-12 bg-sand border-t border-sand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center gap-3 justify-center mb-4">
            <Zap size={20} className="text-coral" />
            <h3 className="font-display font-bold text-xl text-gray-900">
              ¿No sabes cuál elegir?
            </h3>
          </div>
          <p className="text-gray-500 text-sm mb-6">
            Cuéntanos tu proyecto y te recomendamos el paquete ideal sin costo y sin compromisos.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-all text-sm shadow-md"
          >
            Pedir orientación gratuita <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Bottom guarantee */}
      <section className="py-10 bg-brand-light border-t border-brand-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Star size={18} className="text-yellow-500" fill="currentColor" />, title: '2 rondas de cambios incluidas', desc: 'Ajustamos hasta que quede perfecto.' },
            { icon: <Check size={18} className="text-green-500" />, title: '50% anticipo, 50% al entregar', desc: 'No pagás todo por adelantado.' },
            { icon: <Zap size={18} className="text-brand" />, title: 'Respondemos en menos de 48h', desc: 'Sin esperas ni silencio radio.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                {icon}
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
