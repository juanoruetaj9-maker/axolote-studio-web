import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'

const pasos = [
  {
    num: '01',
    title: 'Nos contactas',
    desc: 'Escríbenos por WhatsApp o llena el formulario de contacto. Te respondemos en menos de 24 horas con un saludo real, no un bot.',
    icon: '💬',
    detalles: [
      'Respuesta garantizada en menos de 24 horas',
      'Sin formularios complicados',
      'Puedes enviarnos por WhatsApp o por el formulario',
      'Primero escuchamos, luego vendemos',
    ],
  },
  {
    num: '02',
    title: 'Entendemos tu proyecto',
    desc: 'Hablamos de tu evento o negocio para entender exactamente lo que necesitas. Hacemos preguntas simples para no pedirte nada de más.',
    icon: '🧠',
    detalles: [
      'Preguntas claras, sin tecnicismos',
      'Para invitaciones: tipo de evento, fecha, estilo visual',
      'Para negocios: giro, servicios, imagen actual',
      'Sin presión, sin urgencias artificiales',
    ],
  },
  {
    num: '03',
    title: 'Cotizamos claro',
    desc: 'Te enviamos una cotización ordenada con exactamente qué incluye, qué no incluye, tiempo de entrega y forma de pago. Sin sorpresas.',
    icon: '📋',
    detalles: [
      'Cotización por escrito, sin ambigüedades',
      'Tiempo de entrega estimado',
      'Desglose de qué incluye y qué no',
      'Anticipo del 50% para comenzar',
    ],
  },
  {
    num: '04',
    title: 'Producimos juntos',
    desc: 'Trabajamos con comunicación constante. Te mantenemos informado al inicio, a la mitad y cuando hay algo importante. Sin silencio radio.',
    icon: '🎨',
    detalles: [
      'Actualización al inicio del proyecto',
      'Avance intermedio para que veas el progreso',
      'Vista previa antes de entrega final',
      'Hasta 2 rondas de ajustes incluidas',
    ],
  },
  {
    num: '05',
    title: 'Entregamos y te acompañamos',
    desc: 'Recibís el proyecto terminado, te lo explicamos y resolvemos tus dudas. Después del cierre seguimos disponibles para lo que necesites.',
    icon: '🚀',
    detalles: [
      'Entrega con explicación paso a paso',
      'Resolución de dudas sin costo adicional',
      'Cierre formal con pago final del 50%',
      'Postventa: disponibles para seguimiento',
    ],
  },
]

const faqs = [
  {
    q: '¿Cuánto tiempo tardan los proyectos?',
    a: 'Depende del paquete: las invitaciones web tardan entre 4 y 10 días hábiles según el paquete elegido. Las landing pages van de 7 a 20 días hábiles. Si necesitas urgencia, hay una tarifa adicional del 30%.',
  },
  {
    q: '¿Puedo hacer cambios después de la entrega?',
    a: 'Sí. Incluimos 2 rondas de cambios dentro del proceso de producción. Los cambios solicitados después de la entrega final tienen un costo adicional de $200 MXN por ronda.',
  },
  {
    q: '¿Necesito dar anticipo?',
    a: 'Sí. Solicitamos el 50% del total para comenzar el proyecto. El 50% restante se paga al momento de la entrega final. Para proyectos premium el esquema puede ser 60/40.',
  },
  {
    q: '¿Qué necesito tener listo para empezar?',
    a: 'Para invitaciones: nombres, fecha, dirección del evento, fotos si las hay y referencia de estilo visual. Para negocios: logo si tienes, colores, fotos del negocio, lista de servicios y número de WhatsApp.',
  },
  {
    q: '¿Trabajan con clientes de todo el país?',
    a: 'Sí. Trabajamos de forma 100% remota y atendemos clientes de cualquier parte de México. La comunicación es por WhatsApp, correo y videollamada cuando es necesario.',
  },
  {
    q: '¿La invitación web tiene fecha de vencimiento?',
    a: 'Las invitaciones web se mantienen activas durante todo el período de necesidad del evento. Podemos gestionar la extensión o eliminación según lo requieras.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left gap-4 hover:text-brand transition-colors"
      >
        <span className="font-semibold text-gray-800 text-sm pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`text-gray-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-4">
          <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function Proceso() {
  return (
    <div>
      {/* Header */}
      <section className="bg-sand py-14 md:py-20 border-b border-sand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-light text-brand px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
            Cómo trabajamos
          </span>
          <h1 className="section-heading text-3xl md:text-5xl text-gray-950 mb-4">
            Simple, claro y sin sorpresas
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Desde el primer mensaje hasta la entrega final, el cliente siempre sabe qué está pasando. Así es como trabajamos.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {pasos.map((paso, i) => (
              <div
                key={paso.num}
                className="flex flex-col md:flex-row gap-6 p-7 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-subtle hover:bg-brand-light/30 transition-all"
              >
                {/* Number + icon */}
                <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-2 shrink-0">
                  <div className="w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center shrink-0">
                    <span className="text-2xl">{paso.icon}</span>
                  </div>
                  <span className="font-display font-extrabold text-3xl text-gray-200 hidden md:block">
                    {paso.num}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-brand bg-brand-light px-2 py-0.5 rounded-full">
                      Paso {i + 1}
                    </span>
                    <h3 className="font-display font-bold text-lg text-gray-900">{paso.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{paso.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {paso.detalles.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-sand border-t border-sand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-coral-light text-coral px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3">
              Preguntas frecuentes
            </span>
            <h2 className="section-heading text-2xl md:text-3xl text-gray-950">
              Dudas comunes, respuestas directas
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 px-6 py-2 shadow-sm">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-heading text-2xl md:text-3xl text-gray-950 mb-4">
            ¿Todo claro? Empecemos.
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Un mensaje es todo lo que necesitas para arrancar. El resto lo manejamos nosotros.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-all text-sm shadow-md"
            >
              Cotizar mi proyecto <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/529932228936?text=Hola%20Axolote%20Studio%2C%20tengo%20una%20pregunta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-brand hover:text-brand transition-all text-sm"
            >
              Preguntar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
