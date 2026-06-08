import { Check, X, ArrowRight, Zap, Star } from 'lucide-react'

const WA = 'https://wa.me/529932228936'

function PriceCard({ plan, price, includes, excludes, badge, highlight, time }) {
  const waLink = `${WA}?text=${encodeURIComponent(`Hola, me interesa el ${plan} de Axolote Studio`)}`

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

      <ul className="flex flex-col gap-2.5 flex-1">
        {includes.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <Check
              size={16}
              className={`shrink-0 mt-0.5 ${highlight ? 'text-green-300' : 'text-green-500'}`}
            />
            <span className={highlight ? 'text-blue-50' : 'text-gray-600'}>{item}</span>
          </li>
        ))}
        {excludes && excludes.map((item, i) => (
          <li key={`ex-${i}`} className="flex items-start gap-2.5 text-sm">
            <X
              size={16}
              className={`shrink-0 mt-0.5 ${highlight ? 'text-blue-400' : 'text-gray-300'}`}
            />
            <span className={highlight ? 'text-blue-300' : 'text-gray-400'}>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full text-center py-3 rounded-full font-semibold text-sm transition-all mt-8 ${
          highlight
            ? 'bg-white text-brand hover:bg-blue-50'
            : 'bg-brand text-white hover:bg-brand-dark'
        }`}
      >
        Cotizar este plan
      </a>
    </div>
  )
}

const cambios = [
  { condicion: 'Primeros 2 cambios', costo: 'Gratuitos' },
  { condicion: 'Cambio menor (desde el 3ro)', costo: '$100 MXN' },
  { condicion: 'Cambio intermedio (desde el 3ro)', costo: '$200 MXN' },
  { condicion: 'Cambio mayor (desde el 3ro)', costo: '$300 MXN' },
  { condicion: 'Errores propios del estudio', costo: 'Sin costo' },
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
            Precios transparentes y paquetes diseñados para cualquier evento o negocio. No vendemos tecnología, vendemos resultados.
          </p>
        </div>
      </section>

      {/* LÍNEA A — Invitaciones */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-coral-light text-coral px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <span className="text-lg">💍</span>
              Línea A — Invitaciones Web
            </div>
            <h2 className="section-heading text-2xl md:text-3xl text-gray-950 mb-3">
              Invitaciones Digitales para Eventos
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Para tu boda, XV años, graduación o cualquier celebración especial. Tu evento merece una experiencia visual tan elegante como la ocasión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <PriceCard
              plan="Paquete Esencial"
              price="$499"
              time="Entrega: 6 días hábiles desde recepción de datos"
              includes={[
                'Diseño visual personalizado',
                'Información del evento',
                'Cuenta regresiva',
                'Ubicación con mapa',
                'Galería simple (hasta 6 fotos)',
                'Botón WhatsApp',
                'Música de fondo',
                'QR del evento',
              ]}
              excludes={[
                'RSVP',
                'Historia de pareja',
                'Animaciones premium',
                'Dominio personalizado',
              ]}
            />
            <PriceCard
              plan="Paquete Experiencia"
              price="$999"
              time="Entrega: 6 días hábiles desde recepción de datos"
              badge="Más popular"
              highlight
              includes={[
                'Todo el Paquete Esencial',
                'RSVP vía Google Sheets',
                'Historia de pareja o sección extra',
                'Galería premium (hasta 20 fotos)',
                'Animaciones y diseño elaborado',
                'Dress code y hospedaje',
                'Playlist Spotify integrada',
              ]}
              excludes={[
                'Dominio personalizado',
              ]}
            />
          </div>
        </div>
      </section>

      {/* LÍNEA B — Landing Pages */}
      <section className="py-16 md:py-20 bg-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-light text-brand px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <span className="text-lg">🏢</span>
              Línea B — Landing Pages
            </div>
            <h2 className="section-heading text-2xl md:text-3xl text-gray-950 mb-3">
              Presencia Digital para Negocios
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Para restaurantes, clínicas, hoteles, abogados, barberías y cualquier negocio que quiera verse serio en internet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <PriceCard
              plan="Paquete Presencia"
              price="$1,090"
              time="Entrega: 6 días hábiles desde recepción de datos"
              includes={[
                'Página principal + 3 páginas secundarias',
                'Branding visual básico aplicado',
                'Dominio personalizado incluido',
                'Hosting gratuito en Netlify',
                'WhatsApp y contacto rápido',
                'Ubicación con mapa',
                'Diseño 100% responsive',
                'SSL incluido',
              ]}
              excludes={[
                'Hosting de pago',
                'Páginas adicionales',
                'Copywriting',
                'SEO',
              ]}
            />
            <PriceCard
              plan="Paquete Marca Digital"
              price="$1,990"
              time="Entrega: 6 días hábiles desde recepción de datos"
              badge="Más completo"
              highlight
              includes={[
                'Todo el Paquete Presencia',
                'Hosting 1 año incluido',
                'Hasta 6 páginas en total',
                'Copywriting básico incluido',
                'CTAs estratégicos por página',
                'Optimización móvil avanzada',
                'SEO básico (meta tags, descripciones, velocidad)',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Demo personalizada */}
      <section className="py-14 px-6 bg-brand-light border-t border-brand-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-brand text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Nuevo · Demo personalizada
          </span>
          <h2 className="section-heading text-2xl md:text-3xl text-gray-950 mb-3">
            Mira cómo quedaría tu proyecto antes de contratar
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
            Antes de pagar un solo peso, te mostramos una <strong>demo funcional con tu información real</strong> — tu nombre, tu fecha, tu evento o tu negocio. Con imágenes genéricas pero con todos los datos tuyos. Para que veas exactamente lo que recibirás.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
            {[
              { icon: '🎯', title: 'Con tu información', desc: 'Nombre, fecha, lugar, evento — todo real. Solo las fotos son genéricas.' },
              { icon: '⚡', title: 'Lista en 24–48 horas', desc: 'Te la enviamos rápido para que puedas decidir sin presión.' },
              { icon: '🆓', title: 'Sin costo', desc: 'La demo es gratis. Solo contratas si quedas convencido.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-5 shadow-sm border border-brand-subtle">
                <span className="text-2xl mb-3 block">{icon}</span>
                <p className="font-semibold text-gray-900 text-sm mb-1">{title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <a
            href={`https://wa.me/529932228936?text=${encodeURIComponent('Hola, me gustaría solicitar una demo personalizada antes de contratar. ¿Cómo funciona?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-all text-sm shadow-md"
          >
            Solicitar mi demo gratis <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Política de cambios */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-2xl text-gray-950 text-center mb-2">
            Política de cambios post-entrega
          </h2>
          <p className="text-center text-gray-400 text-sm mb-8">
            Aplica para todos los paquetes
          </p>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {cambios.map(({ condicion, costo }) => (
              <div
                key={condicion}
                className="flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm text-gray-700">{condicion}</span>
                <span className="text-sm font-semibold text-brand">{costo}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Los errores cometidos por el estudio se corrigen sin consumir créditos de cambio.
          </p>
        </div>
      </section>

      {/* CTA orientación */}
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
          <a
            href={`${WA}?text=${encodeURIComponent('Hola, necesito orientación para elegir un paquete de Axolote Studio')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-all text-sm shadow-md"
          >
            Pedir orientación gratuita <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Bottom guarantee */}
      <section className="py-10 bg-brand-light border-t border-brand-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Star size={18} className="text-yellow-500" fill="currentColor" />, title: '2 cambios gratuitos incluidos', desc: 'Ajustamos hasta que quede perfecto.' },
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
