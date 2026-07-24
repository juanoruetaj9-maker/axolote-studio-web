import DemoCardShell from './DemoCardShell'

// modo="estatico" (Fase 1): imagen + copy placeholder, sin datos reales del cliente.
// FASE 2: aquí se recibirán nombres/fecha reales del cliente y modo="interactivo"
// renderizará el Save the Date generado dinámicamente.
export default function DemoSaveTheDate({ evento, paquete, modo = 'estatico' }) {
  return (
    <DemoCardShell label="Save the Date" data-evento={evento?.id} data-paquete={paquete?.id} data-modo={modo}>
      <div
        className="relative rounded-xl overflow-hidden aspect-[4/5] flex items-end"
        style={{
          backgroundImage: "linear-gradient(180deg, rgba(20,10,15,0) 40%, rgba(20,10,15,0.55) 100%), url('https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="p-4 text-white">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/70 mb-1">Save the Date</p>
          <p className="font-display font-bold text-lg leading-tight">Nombre &amp; Nombre</p>
          <p className="text-[11px] text-white/80 mt-1">00 · 00 · 2026</p>
        </div>
      </div>
    </DemoCardShell>
  )
}
