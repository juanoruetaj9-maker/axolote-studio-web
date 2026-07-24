// Vista unificada: cómo se ven todas las piezas del paquete integradas en
// una sola experiencia (mockup tipo teléfono). modo="estatico" (Fase 1).
// FASE 2: aquí se ensamblará la invitación real navegable del cliente,
// reutilizando componentes de /pages/DemoInvitaciones.jsx.
export default function DemoIntegrado({ evento, paquete, modo = 'estatico' }) {
  return (
    <div className="mx-auto w-full max-w-[300px]" data-evento={evento?.id} data-paquete={paquete?.id} data-modo={modo}>
      <div className="rounded-[2rem] border-8 border-[#111] bg-[#111] overflow-hidden shadow-xl">
        <div className="bg-white rounded-[1.4rem] overflow-hidden">

          {/* Hero */}
          <div
            className="relative h-56 flex items-end"
            style={{
              backgroundImage: "linear-gradient(180deg, rgba(20,10,15,0) 30%, rgba(20,10,15,0.6) 100%), url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="p-4 text-white">
              <p className="text-[8px] uppercase tracking-[0.3em] text-white/70">Nos casamos</p>
              <p className="font-display font-bold text-base leading-tight mt-1">Nombre &amp; Nombre</p>
              <p className="text-[9px] text-white/70 mt-1">00 de mes, 2026 · México</p>
            </div>
          </div>

          {/* Cuenta regresiva */}
          <div className="px-4 py-3 border-b border-black/6">
            <div className="grid grid-cols-4 gap-1">
              {[['42', 'D'], ['08', 'H'], ['15', 'M'], ['30', 'S']].map(([v, l]) => (
                <div key={l} className="flex flex-col items-center bg-[#FFF5F7] rounded-md py-1.5">
                  <span className="font-display font-black text-xs text-[#FF2D78] leading-none">{v}</span>
                  <span className="text-[7px] text-[#999] mt-0.5">{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RSVP */}
          <div className="px-4 py-3 border-b border-black/6">
            <p className="text-[9px] font-semibold text-[#111] mb-1.5">¿Nos acompañas?</p>
            <div className="flex gap-1.5">
              <span className="flex-1 text-center text-[8px] py-1.5 rounded-md bg-[#FF2D78] text-white font-semibold">Sí, ahí estaré</span>
              <span className="flex-1 text-center text-[8px] py-1.5 rounded-md bg-black/5 text-[#999]">No podré</span>
            </div>
          </div>

          {/* Álbum */}
          <div className="px-4 py-3 border-b border-black/6">
            <p className="text-[9px] font-semibold text-[#111] mb-1.5">Álbum</p>
            <div className="grid grid-cols-3 gap-1">
              {[
                'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=200&q=80',
                'https://images.unsplash.com/photo-1519741497674-611481863552?w=200&q=80',
                'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=200&q=80',
              ].map((src, i) => (
                <img key={i} src={src} alt="" loading="lazy" className="w-full h-10 object-cover rounded" />
              ))}
            </div>
          </div>

          {/* Mesa de regalos */}
          <div className="px-4 py-3">
            <span className="block text-center text-[8px] py-2 rounded-md border border-black/8 text-[#999]">
              🎁 Ver mesa de regalos
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}
