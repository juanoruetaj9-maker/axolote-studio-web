import DemoCardShell from './DemoCardShell'

// modo="estatico" (Fase 1): mockup de teléfono con copy placeholder.
// FASE 2: aquí se cargará la invitación real del cliente (modo="interactivo"),
// reutilizando la lógica ya construida en /pages/DemoInvitaciones.jsx.
export default function DemoInvitacion({ evento, paquete, modo = 'estatico' }) {
  return (
    <DemoCardShell label="Invitación web" data-evento={evento?.id} data-paquete={paquete?.id} data-modo={modo}>
      <div className="aspect-[4/5] rounded-xl overflow-hidden relative bg-[#0f0f0f]">
        <img
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500&q=80"
          alt="Vista previa de invitación"
          className="w-full h-full object-cover opacity-70"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/70 mb-2">Nos casamos</p>
          <p className="font-display font-bold text-xl text-white leading-tight">Nombre &amp; Nombre</p>
          <p className="text-[10px] text-white/70 mt-2">00 de mes, 2026</p>
        </div>
      </div>
    </DemoCardShell>
  )
}
