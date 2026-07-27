import DemoCardShell from './DemoCardShell'

// modo="estatico" (Fase 1): números fijos de ejemplo.
// FASE 2: aquí se calculará la cuenta regresiva real contra la fecha del evento.
const UNIDADES = [
  { v: '42', l: 'Días' },
  { v: '08', l: 'Hrs' },
  { v: '15', l: 'Min' },
  { v: '30', l: 'Seg' },
]

export default function DemoCuentaRegresiva({ evento, paquete, modo = 'estatico' }) {
  return (
    <DemoCardShell label="Cuenta regresiva" data-evento={evento?.id} data-paquete={paquete?.id} data-modo={modo}>
      <div className="aspect-[4/5] rounded-xl flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#FFF8F2] to-[#FFF0F4]">
        <div className="grid grid-cols-4 gap-1.5">
          {UNIDADES.map((u) => (
            <div key={u.l} className="flex flex-col items-center bg-white rounded-lg px-2 py-2 border border-black/6 min-w-[42px]">
              <span className="font-display font-black text-lg text-[#FF2D78] leading-none">{u.v}</span>
              <span className="text-[8px] text-[#999] uppercase tracking-wider mt-1">{u.l}</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[#999]">Para llegar a tu evento</p>
      </div>
    </DemoCardShell>
  )
}
