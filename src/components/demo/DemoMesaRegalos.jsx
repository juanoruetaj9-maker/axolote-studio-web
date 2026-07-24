import { Gift } from 'lucide-react'
import DemoCardShell from './DemoCardShell'

// modo="estatico" (Fase 1): mockup del bloque de mesa de regalos.
// FASE 2: no se desarrolla integración — se pide al cliente el link de su
// mesa de regalos (Amazon, Liverpool, etc.) y se le entrega un manual para
// generarlo; aquí solo se enlaza ese link real dentro de este bloque.
export default function DemoMesaRegalos({ evento, paquete, modo = 'estatico' }) {
  return (
    <DemoCardShell label="Mesa de regalos" data-evento={evento?.id} data-paquete={paquete?.id} data-modo={modo}>
      <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-[#FFF8F2] to-[#FDEFE0] flex flex-col items-center justify-center gap-3 p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-black/6">
          <Gift size={20} className="text-[#C9A15A]" />
        </div>
        <p className="text-[11px] font-semibold text-[#111]">Nuestra mesa de regalos</p>
        <span className="text-[10px] px-3 py-1.5 rounded-lg bg-white border border-black/6 text-[#999]">
          Ver mesa de regalos
        </span>
      </div>
    </DemoCardShell>
  )
}
