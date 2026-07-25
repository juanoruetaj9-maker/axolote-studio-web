import DemoCardShell from './DemoCardShell'

// modo="estatico" (Fase 1): fotos de muestra vía Unsplash, no fotos del cliente.
// FASE 2: aquí se mostrará el álbum real subido por el cliente post-evento.
const FOTOS = [
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&q=80',
  'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=300&q=80',
]

export default function DemoAlbum({ evento, paquete, modo = 'estatico' }) {
  return (
    <DemoCardShell label="Álbum digital" data-evento={evento?.id} data-paquete={paquete?.id} data-modo={modo}>
      <div className="aspect-[4/5] rounded-xl overflow-hidden grid grid-cols-2 grid-rows-2 gap-1">
        {FOTOS.map((src, i) => (
          <img key={i} src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
        ))}
      </div>
    </DemoCardShell>
  )
}
