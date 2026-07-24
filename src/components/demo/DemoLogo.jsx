import DemoCardShell from './DemoCardShell'

// modo="estatico" (Fase 1): monograma genérico.
// FASE 2: aquí se generará/mostrará el logo real diseñado para el evento del cliente.
export default function DemoLogo({ evento, paquete, modo = 'estatico' }) {
  return (
    <DemoCardShell label="Logo del evento" data-evento={evento?.id} data-paquete={paquete?.id} data-modo={modo}>
      <div className="aspect-[4/5] rounded-xl flex items-center justify-center bg-gradient-to-br from-[#FFF5F7] to-[#FFE8EE]">
        <div className="w-20 h-20 rounded-full border-2 border-[#FF2D78]/40 flex items-center justify-center">
          <span className="font-display font-black text-2xl text-[#FF2D78]">N&amp;N</span>
        </div>
      </div>
    </DemoCardShell>
  )
}
