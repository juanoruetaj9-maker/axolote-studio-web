import { useParams } from 'react-router-dom'
import { PLANTILLAS } from '../data/plantillas'

export default function PlantillaDetalle() {
  const { id } = useParams()
  const plantilla = PLANTILLAS.find((p) => p.id === id)

  if (!plantilla) {
    return (
      <div style={{ backgroundColor: '#F8F8F8', minHeight: '60vh' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
          <h1 className="font-display font-black text-[#111] text-3xl">Plantilla no encontrada</h1>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#F8F8F8', minHeight: '60vh' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
        <h1 className="font-display font-black text-[#111] text-3xl">{plantilla.nombre}</h1>
      </div>
    </div>
  )
}
