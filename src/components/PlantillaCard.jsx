import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ESTILOS, EVENTOS } from '../data/plantillas'

export default function PlantillaCard({ plantilla }) {
  const estilo = ESTILOS.find((e) => e.id === plantilla.estilo)
  const eventoPrincipal = EVENTOS.find((e) => e.id === plantilla.eventos[0])

  return (
    <Link
      to={`/plantillas/detalle/${plantilla.id}`}
      className="group flex flex-col rounded-xl overflow-hidden bg-white border border-black/8 shadow-sm hover:shadow-md hover:border-[#FF2D78]/30 transition-all duration-200 cursor-pointer"
    >
      <div className="aspect-[4/5] overflow-hidden bg-[#EFEFEF]">
        <img
          src={plantilla.portada}
          alt={`Plantilla ${plantilla.nombre} — invitación digital ${estilo?.nombre.toLowerCase()} para ${eventoPrincipal?.nombre.toLowerCase()}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex items-center justify-between gap-3">
        <div>
          <p className="font-display font-bold text-[#111] text-sm">{plantilla.nombre}</p>
          <p className="text-xs text-[#999] mt-0.5">{estilo?.nombre}</p>
        </div>
        <span className="flex items-center gap-1 text-xs font-semibold text-[#FF2D78] shrink-0 group-hover:gap-1.5 transition-all duration-200">
          Ver <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  )
}
