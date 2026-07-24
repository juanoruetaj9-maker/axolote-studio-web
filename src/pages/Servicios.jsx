import { Link } from 'react-router-dom'
import { Check, X, ArrowRight, Zap, Star, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const WA = 'https://wa.me/529932228936'

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

function PriceCard({ plan, price, includes, excludes, badge, highlight, time }) {
  const waLink = `${WA}?text=${encodeURIComponent(`Hola, me interesa el ${plan} de Axolote Studio`)}`

  return (
    <div className={`relative rounded-2xl p-7 flex flex-col h-full transition-all duration-200 ${
      highlight
        ? 'bg-[#111] border border-[#FF2D78]/50'
        : 'bg-[#111] border border-white/10'
    }`}>
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FF2D78] text-white">
            {badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-display font-bold text-xl text-white mb-3">{plan}</h3>
        <div className="flex items-end gap-1">
          <span className="font-display font-black text-4xl text-[#FF2D78]">{price}</span>
          <span className="text-sm mb-1 text-[#444]">MXN</span>
        </div>
        {time && <p className="text-xs mt-1.5 text-[#444] leading-relaxed">{time}</p>}
      </div>

      <ul className="flex flex-col gap-2.5 flex-1">
        {includes.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <Check size={15} className="shrink-0 mt-0.5 text-[#FF2D78]" />
            <span className="text-[#888]">{item}</span>
          </li>
        ))}
        {excludes && excludes.map((item, i) => (
          <li key={`ex-${i}`} className="flex items-start gap-2.5 text-sm">
            <X size={15} className="shrink-0 mt-0.5 text-[#333]" />
            <span className="text-[#444]">{item}</span>
          </li>
        ))}
      </ul>

      <a href={waLink} target="_blank" rel="noopener noreferrer"
        className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all mt-8 cursor-pointer ${
          highlight
            ? 'bg-white text-black hover:bg-gray-100'
            : 'bg-[#FF2D78] text-white hover:bg-[#E0155F]'
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
    <div style={{ backgroundColor: '#080808' }}>

      {/* Header */}
      <section style={{ backgroundColor: '#080808' }} className="pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <span className="text-[11px] font-semibold text-[#444] uppercase tracking-[0.22em]">Servicios y precios</span>
          <h1 className="font-display font-black text-white text-[clamp(2.8rem,8vw,6rem)] tracking-tight leading-none mt-3 max-w-2xl">
            Todo claro,<br />sin sorpresas.
          </h1>
          <p className="text-[#555] text-base leading-relaxed mt-5 max-w-md">
            Precios transparentes y paquetes diseñados para tu evento especial. No vendemos tecnología, vendemos resultados.
          </p>
        </div>
      </section>

      {/* LÍNEA A — Invitaciones */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#080808' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...inView} className="mb-12">
            <div className="inline-flex items-center gap-2 bg-[#FF2D78]/10 text-[#FF2D78] border border-[#FF2D78]/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
              <Heart size={14} />
              Línea A — Invitaciones Web
            </div>
            <h2 className="font-display font-black text-white text-3xl md:text-4xl tracking-tight mb-3">
              Invitaciones Digitales para Eventos
            </h2>
            <p className="text-[#555] max-w-lg text-sm leading-relaxed">
              Para tu boda, XV años, graduación o cualquier celebración especial. Tu evento merece una experiencia visual tan elegante como la ocasión.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
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
              excludes={['Dominio personalizado']}
            />
          </div>
        </div>
      </section>

      {/* Demo personalizada */}
      <motion.section {...inView} className="py-16 md:py-20" style={{ backgroundColor: '#080808' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="border border-white/8 rounded-2xl p-8 md:p-12">
            <div className="inline-block bg-[#FF2D78] text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
              Nuevo · Demo personalizada
            </div>
            <h2 className="font-display font-black text-white text-2xl md:text-3xl tracking-tight mb-3">
              Mira cómo quedaría tu proyecto antes de contratar
            </h2>
            <p className="text-[#555] text-sm max-w-xl mb-8 leading-relaxed">
              Antes de pagar un solo peso, te mostramos una <span className="text-white font-semibold">demo funcional con tu información real</span> — tu nombre, tu fecha, tu evento. Para que veas exactamente lo que recibirás.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { num: '01', title: 'Con tu información', desc: 'Nombre, fecha, lugar, evento — todo real. Solo las fotos son genéricas.' },
                { num: '02', title: 'Lista en 24–48 horas', desc: 'Te la enviamos rápido para que puedas decidir sin presión.' },
                { num: '03', title: 'Sin costo', desc: 'La demo es gratis. Solo contratas si quedas convencido.' },
              ].map(({ num, title, desc }) => (
                <div key={title} className="bg-[#111] rounded-xl p-5 border border-white/8">
                  <span className="font-display font-black text-3xl text-[#FF2D78]/20 block mb-3 leading-none">{num}</span>
                  <p className="font-semibold text-white text-sm mb-1">{title}</p>
                  <p className="text-[#555] text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <a
              href={`https://wa.me/529932228936?text=${encodeURIComponent('Hola, me gustaría solicitar una demo personalizada antes de contratar. ¿Cómo funciona?')}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF2D78] text-white font-bold rounded-xl hover:bg-[#E0155F] transition-colors text-sm shadow-md cursor-pointer"
            >
              Solicitar mi demo gratis <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Política de cambios */}
      <motion.section {...inView} className="py-16" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
          <h2 className="font-display font-black text-white text-2xl tracking-tight text-center mb-2">
            Política de cambios post-entrega
          </h2>
          <p className="text-center text-[#444] text-sm mb-8">Aplica para todos los paquetes</p>
          <div className="divide-y divide-white/6 border border-white/8 rounded-2xl overflow-hidden">
            {cambios.map(({ condicion, costo }) => (
              <div key={condicion}
                className="flex items-center justify-between px-6 py-4 bg-[#111] hover:bg-[#151515] transition-colors"
              >
                <span className="text-sm text-[#888]">{condicion}</span>
                <span className="text-sm font-bold text-[#FF2D78]">{costo}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#444] mt-3 text-center">
            Los errores cometidos por el estudio se corrigen sin consumir créditos de cambio.
          </p>
        </div>
      </motion.section>

      {/* ¿No sabes cuál elegir? */}
      <section className="py-12" style={{ backgroundColor: '#080808' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <div className="flex items-center gap-3 justify-center mb-3">
            <Zap size={18} className="text-[#FF2D78]" />
            <h3 className="font-display font-bold text-xl text-white">¿No sabes cuál elegir?</h3>
          </div>
          <p className="text-[#555] text-sm mb-6">
            Cuéntanos tu proyecto y te recomendamos el paquete ideal sin costo y sin compromisos.
          </p>
          <a
            href={`${WA}?text=${encodeURIComponent('Hola, necesito orientación para elegir un paquete de Axolote Studio')}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FF2D78] text-white font-bold rounded-xl hover:bg-[#E0155F] transition-colors text-sm cursor-pointer"
          >
            Pedir orientación gratuita <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Garantías */}
      <section className="py-10 border-t border-white/8" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Star size={16} className="text-[#FF2D78]" fill="currentColor" />, title: '2 cambios gratuitos incluidos', desc: 'Ajustamos hasta que quede perfecto.' },
            { icon: <Check size={16} className="text-[#FF2D78]" />, title: '50% anticipo, 50% al entregar', desc: 'No pagás todo por adelantado.' },
            { icon: <Zap size={16} className="text-[#FF2D78]" />, title: 'Respondemos en menos de 48h', desc: 'Sin esperas ni silencio radio.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FF2D78]/10 flex items-center justify-center shrink-0">
                {icon}
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{title}</p>
                <p className="text-xs text-[#555] mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FF2D78] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="font-display font-black text-black tracking-tight leading-none text-[clamp(3rem,9vw,7rem)]">
            ¿Empezamos?
          </h2>
          <div className="flex flex-col gap-3">
            <Link to="/contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-black text-white font-bold rounded-xl text-sm hover:bg-[#111] transition-colors cursor-pointer"
            >
              Cotizar proyecto <ArrowRight size={14} />
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
