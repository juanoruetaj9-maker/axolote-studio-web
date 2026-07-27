// Envoltorio visual compartido por las piezas de /components/demo.
// No contiene lógica de negocio — solo da estilo consistente (marco, label, paleta clara).
// data-* se usan como gancho de Fase 2 (identificar qué evento/paquete/modo está renderizado).
export default function DemoCardShell({ label, children, className = '', ...dataProps }) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-black/8 bg-white shadow-sm ${className}`} {...dataProps}>
      {label && (
        <div className="px-4 pt-4 pb-1">
          <span className="text-[10px] font-bold text-[#999] uppercase tracking-[0.15em]">{label}</span>
        </div>
      )}
      <div className="p-4 pt-2">{children}</div>
    </div>
  )
}
