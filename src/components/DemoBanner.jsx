export default function DemoBanner({ cta = '¿Te gustó? Quiero algo así' }) {
  return (
    <div className="bg-amber-50 border-b border-amber-200 py-2.5 px-4 text-center">
      <p className="text-amber-800 text-xs font-medium">
        ✨ Esto es un ejemplo de lo que podemos crear para ti —{' '}
        <a
          href={`https://wa.me/529932228936?text=${encodeURIComponent(cta)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold hover:text-amber-900 transition-colors"
        >
          Contáctanos y cotiza el tuyo
        </a>
      </p>
    </div>
  )
}
