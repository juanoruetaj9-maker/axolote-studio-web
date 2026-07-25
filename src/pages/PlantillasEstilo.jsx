import { useParams } from 'react-router-dom'

export default function PlantillasEstilo() {
  const { estilo } = useParams()
  return (
    <div style={{ backgroundColor: '#F8F8F8', minHeight: '60vh' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
        <h1 className="font-display font-black text-[#111] text-3xl">Plantillas: {estilo}</h1>
      </div>
    </div>
  )
}
