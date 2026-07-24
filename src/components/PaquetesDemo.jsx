import { useState } from 'react'
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react'
import { eventos, paquetes, buildDemoWhatsappLink } from '../data/paquetes'
import DemoSaveTheDate from './demo/DemoSaveTheDate'
import DemoLogo from './demo/DemoLogo'
import DemoInvitacion from './demo/DemoInvitacion'
import DemoQR from './demo/DemoQR'
import DemoRSVP from './demo/DemoRSVP'
import DemoCuentaRegresiva from './demo/DemoCuentaRegresiva'
import DemoAlbum from './demo/DemoAlbum'
import DemoMesaRegalos from './demo/DemoMesaRegalos'
import DemoIntegrado from './demo/DemoIntegrado'

// Wiring de presentación: mapea el id de cada pieza (definido en /data/paquetes.js)
// a su componente visual. Esto vive aquí, no en el archivo de datos, porque
// /data/paquetes.js debe permanecer JS puro (sin imports de componentes).
const COMPONENTES_PIEZA = {
  'save-the-date': DemoSaveTheDate,
  'logo': DemoLogo,
  'invitacion': DemoInvitacion,
  'qr': DemoQR,
  'rsvp': DemoRSVP,
  'cuenta-regresiva': DemoCuentaRegresiva,
  'album': DemoAlbum,
  'mesa-regalos': DemoMesaRegalos,
}

export default function PaquetesDemo() {
  const [eventoId, setEventoId] = useState(eventos[0].id)
  const [paqueteId, setPaqueteId] = useState(paquetes.find((p) => p.destacado)?.id || paquetes[0].id)
  const [mostrarIntegrado, setMostrarIntegrado] = useState(false)

  const evento = eventos.find((e) => e.id === eventoId)
  const paquete = paquetes.find((p) => p.id === paqueteId)

  // FASE 2: cuando modo="interactivo", cada componente de pieza recibirá
  // datos reales del cliente (nombre, fecha, fotos) en vez de placeholders.
  const modo = 'estatico'

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header de sección */}
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FF2D78]/10 text-[#FF2D78] border border-[#FF2D78]/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            <Sparkles size={14} />
            Demo interactiva
          </div>
          <h2 className="font-display font-black text-[#111] text-3xl md:text-4xl tracking-tight mb-3">
            Elige tu experiencia
          </h2>
          <p className="text-[#555] text-sm leading-relaxed">
            Ve exactamente cómo se verá tu paquete antes de contratar.
          </p>
        </div>

        {/* Selector de evento */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          {eventos.map((e) => (
            <button
              key={e.id}
              onClick={() => setEventoId(e.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                eventoId === e.id
                  ? 'bg-[#FF2D78] text-white'
                  : 'bg-[#F8F8F8] text-[#555] hover:text-[#111] hover:bg-black/5'
              }`}
            >
              {e.emoji} {e.label}
            </button>
          ))}
        </div>
        {evento?.nota && (
          <p className="text-center text-xs text-[#999] mb-8">{evento.nota}</p>
        )}
        {!evento?.nota && <div className="mb-8" />}

        {/* Selector de paquete */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12 max-w-2xl mx-auto">
          {paquetes.map((p) => (
            <button
              key={p.id}
              onClick={() => setPaqueteId(p.id)}
              className={`relative text-left rounded-xl px-5 py-4 border transition-all duration-200 cursor-pointer ${
                paqueteId === p.id
                  ? 'border-[#FF2D78] bg-[#FF2D78]/5'
                  : 'border-black/8 bg-white hover:border-black/20'
              }`}
            >
              {p.badge && (
                <span className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#FF2D78] text-white">
                  {p.badge}
                </span>
              )}
              <p className="font-display font-bold text-sm text-[#111]">{p.nombre}</p>
              <p className="text-xs text-[#999] mt-0.5">${p.precio.toLocaleString('es-MX')} MXN</p>
            </button>
          ))}
        </div>

        {/* Zona de demo */}
        <div className="rounded-2xl border border-black/8 bg-[#FAFAF8] p-5 md:p-8">
          <span className="text-[11px] font-bold text-[#999] uppercase tracking-[0.2em]">Piezas individuales</span>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            {paquete.piezas.map((piezaId) => {
              const Componente = COMPONENTES_PIEZA[piezaId]
              if (!Componente) return null
              return <Componente key={piezaId} evento={evento} paquete={paquete} modo={modo} />
            })}
          </div>

          {/* Toggle: así se integra todo */}
          <div className="mt-8 pt-6 border-t border-black/8">
            <button
              onClick={() => setMostrarIntegrado((v) => !v)}
              className="flex items-center gap-2 mx-auto text-sm font-semibold text-[#111] hover:text-[#FF2D78] transition-colors cursor-pointer"
            >
              Así se integra todo
              <ChevronDown size={16} className={`transition-transform duration-200 ${mostrarIntegrado ? 'rotate-180' : ''}`} />
            </button>

            {mostrarIntegrado && (
              <div className="mt-6">
                <DemoIntegrado evento={evento} paquete={paquete} modo={modo} />
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={buildDemoWhatsappLink(evento.label, paquete.nombre)}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF2D78] text-white font-bold rounded-xl text-sm hover:bg-[#E0155F] transition-colors duration-200 shadow-md cursor-pointer"
          >
            Quiero el paquete {paquete.nombre} <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  )
}
