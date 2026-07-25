import DemoCardShell from './DemoCardShell'

// modo="estatico" (Fase 1): patrón visual tipo QR, no es un código real.
// FASE 2: aquí se generará el QR real que enlaza a la invitación del cliente.
const CELLS = [
  1, 1, 1, 0, 1, 0, 1, 1, 1,
  1, 0, 1, 0, 0, 0, 1, 0, 1,
  1, 1, 1, 1, 0, 1, 1, 1, 1,
  0, 0, 0, 1, 1, 0, 0, 0, 0,
  1, 0, 1, 0, 1, 0, 1, 1, 0,
  0, 1, 0, 1, 0, 1, 0, 0, 1,
  1, 1, 1, 0, 1, 1, 1, 1, 0,
  1, 0, 1, 0, 0, 0, 1, 0, 1,
  1, 1, 1, 1, 0, 1, 1, 1, 1,
]

export default function DemoQR({ evento, paquete, modo = 'estatico' }) {
  return (
    <DemoCardShell label="Código QR" data-evento={evento?.id} data-paquete={paquete?.id} data-modo={modo}>
      <div className="aspect-[4/5] rounded-xl bg-[#FFF8F2] flex flex-col items-center justify-center gap-3 p-6">
        <div className="grid grid-cols-9 gap-[2px] w-24 h-24 bg-white p-2 rounded-md shadow-sm">
          {CELLS.map((on, i) => (
            <span key={i} className={`rounded-[1px] ${on ? 'bg-[#111]' : 'bg-transparent'}`} />
          ))}
        </div>
        <p className="text-[10px] text-[#999] text-center">Escanea para ver la invitación</p>
      </div>
    </DemoCardShell>
  )
}
