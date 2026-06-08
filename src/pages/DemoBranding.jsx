import DemoBanner from '../components/DemoBanner'

const WA = `https://wa.me/529932228936?text=${encodeURIComponent('Hola! Vi el ejemplo de identidad visual y me gustaría algo así para mi marca.')}`

const palette = [
  { name: 'Negro Agave', hex: '#1A0A05', text: 'white' },
  { name: 'Oro Viejo', hex: '#C9A155', text: 'black' },
  { name: 'Terracota', hex: '#7D3B2A', text: 'white' },
  { name: 'Crema Mezcal', hex: '#F5EDD4', text: 'black' },
  { name: 'Marrón Roble', hex: '#4A3728', text: 'white' },
]

const typo = [
  { name: 'Playfair Display', role: 'Tipografía principal · Titulares', sample: 'Nocturna', style: { fontFamily: 'Georgia, serif', fontSize: '2.5rem', fontStyle: 'italic' } },
  { name: 'Montserrat', role: 'Tipografía secundaria · Cuerpo de texto', sample: 'MEZCALERÍA ARTESANAL', style: { fontFamily: 'Arial, sans-serif', fontSize: '1rem', letterSpacing: '0.3em', fontWeight: 600 } },
]

const proceso = [
  { step: '01', title: 'Brief de marca', desc: 'Cuestionario de 20 preguntas para entender tu negocio, valores y competencia.' },
  { step: '02', title: 'Propuestas visuales', desc: '3 conceptos de logotipo con diferente dirección creativa para que elijas.' },
  { step: '03', title: 'Refinamiento', desc: '2 rondas de cambios sobre el concepto elegido hasta perfeccionarlo.' },
  { step: '04', title: 'Entrega final', desc: 'Manual de marca completo en PDF + archivos en SVG, PNG y PDF.' },
]

export default function DemoBranding() {
  return (
    <div className="min-h-screen bg-[#F5EDD4]">
      <DemoBanner cta="Hola! Vi el ejemplo de identidad visual y me gustaría algo así para mi marca." />

      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex items-end pb-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A05] via-[#1A0A05]/60 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <p className="text-[#C9A155] uppercase tracking-[0.5em] text-xs font-medium mb-4">
            Caso de identidad visual
          </p>
          <h1
            className="font-display font-black text-white leading-none mb-4"
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
          >
            NOCTURNA
          </h1>
          <p className="text-[#F5EDD4]/60 text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            Mezcalería Artesanal · Oaxaca, México
          </p>
          <div className="flex gap-3">
            <span className="bg-[#C9A155]/20 border border-[#C9A155]/30 text-[#C9A155] px-3 py-1 rounded-full text-xs">Logotipo</span>
            <span className="bg-[#C9A155]/20 border border-[#C9A155]/30 text-[#C9A155] px-3 py-1 rounded-full text-xs">Paleta de color</span>
            <span className="bg-[#C9A155]/20 border border-[#C9A155]/30 text-[#C9A155] px-3 py-1 rounded-full text-xs">Tipografía</span>
            <span className="bg-[#C9A155]/20 border border-[#C9A155]/30 text-[#C9A155] px-3 py-1 rounded-full text-xs">Mockups</span>
          </div>
        </div>
      </section>

      {/* Brand overview */}
      <section className="py-20 px-6 bg-[#1A0A05] text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#C9A155] uppercase tracking-widest text-xs mb-4">El brief</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 leading-tight">
              Una marca que sabe<br />a tierra y a fuego
            </h2>
            <p className="text-[#F5EDD4]/60 text-sm leading-relaxed mb-4">
              Nocturna nació de la necesidad de un mezcalero oaxaqueño de comunicar la autenticidad de su producto. Querían una identidad que hablara de tradición sin verse anticuada — moderna, pero con raíces profundas.
            </p>
            <p className="text-[#F5EDD4]/60 text-sm leading-relaxed">
              El resultado: un sistema visual que evoca las noches del campo, el humo del agave y la calidez de compartir una copa.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { label: 'Industria', value: 'Bebidas artesanales · Mezcal' },
              { label: 'Audiencia', value: 'Adultos 25–45 años, cultura y gastronomía' },
              { label: 'Tono de voz', value: 'Auténtico, poético, orgulloso, cálido' },
              { label: 'Entregables', value: 'Logo + paleta + tipografía + manual + mockups' },
            ].map(({ label, value }) => (
              <div key={label} className="border-b border-[#F5EDD4]/10 pb-4">
                <p className="text-[#C9A155] text-xs uppercase tracking-widest mb-1">{label}</p>
                <p className="text-[#F5EDD4] text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#7D3B2A] uppercase tracking-widest text-xs mb-3 text-center">Sistema de logo</p>
          <h2 className="font-display font-black text-3xl text-[#1A0A05] text-center mb-14">
            Variantes del logotipo
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Primary */}
            <div className="rounded-2xl bg-[#1A0A05] aspect-square flex flex-col items-center justify-center p-8 shadow-xl">
              <p className="text-[#C9A155] text-2xl font-bold tracking-[0.2em]" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                Nocturna
              </p>
              <div className="h-px w-16 bg-[#C9A155]/40 my-2" />
              <p className="text-[#F5EDD4]/50 text-[9px] tracking-[0.4em] uppercase">Mezcalería Artesanal</p>
              <p className="text-[#4A3728] text-[9px] mt-6">Versión principal</p>
            </div>
            {/* Light */}
            <div className="rounded-2xl bg-[#F5EDD4] border border-[#E8D9B8] aspect-square flex flex-col items-center justify-center p-8 shadow-sm">
              <p className="text-[#1A0A05] text-2xl font-bold tracking-[0.2em]" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                Nocturna
              </p>
              <div className="h-px w-16 bg-[#1A0A05]/20 my-2" />
              <p className="text-[#4A3728]/60 text-[9px] tracking-[0.4em] uppercase">Mezcalería Artesanal</p>
              <p className="text-[#4A3728]/40 text-[9px] mt-6">Versión clara</p>
            </div>
            {/* Icon */}
            <div className="rounded-2xl bg-[#7D3B2A] aspect-square flex flex-col items-center justify-center p-8 shadow-xl">
              <div className="text-5xl mb-3">🌵</div>
              <p className="text-[#F5EDD4] text-xl font-bold tracking-[0.3em]" style={{ fontFamily: 'Georgia, serif' }}>N</p>
              <p className="text-[#F5EDD4]/40 text-[9px] mt-6">Símbolo / ícono</p>
            </div>
          </div>
        </div>
      </section>

      {/* Color palette */}
      <section className="py-20 px-6 bg-[#1A0A05]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C9A155] uppercase tracking-widest text-xs mb-3 text-center">Identidad cromática</p>
          <h2 className="font-display font-black text-3xl text-white text-center mb-14">
            Paleta de colores
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {palette.map((c) => (
              <div key={c.hex} className="flex flex-col gap-3">
                <div
                  className="rounded-2xl aspect-square shadow-xl"
                  style={{ backgroundColor: c.hex }}
                />
                <div>
                  <p className="text-[#F5EDD4] text-xs font-semibold">{c.name}</p>
                  <p className="text-[#F5EDD4]/40 text-xs font-mono">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#7D3B2A] uppercase tracking-widest text-xs mb-3 text-center">Sistema tipográfico</p>
          <h2 className="font-display font-black text-3xl text-[#1A0A05] text-center mb-14">
            Tipografías de la marca
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {typo.map((t) => (
              <div key={t.name} className="bg-[#1A0A05] rounded-2xl p-10 flex flex-col justify-between min-h-48">
                <p style={t.style} className="text-[#C9A155]">{t.sample}</p>
                <div className="mt-6">
                  <p className="text-[#F5EDD4] text-sm font-semibold">{t.name}</p>
                  <p className="text-[#F5EDD4]/40 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mockups */}
      <section className="py-20 px-6 bg-[#F5EDD4]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#7D3B2A] uppercase tracking-widest text-xs mb-3 text-center">Marca en uso</p>
          <h2 className="font-display font-black text-3xl text-[#1A0A05] text-center mb-14">
            Mockups y aplicaciones
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Business card */}
            <div>
              <p className="text-[#4A3728] text-xs uppercase tracking-widest mb-4">Tarjeta de presentación</p>
              <div className="relative h-56">
                {/* Back card */}
                <div
                  className="absolute right-0 top-4 w-72 h-44 rounded-xl shadow-2xl flex items-center justify-center rotate-3"
                  style={{ backgroundColor: '#C9A155' }}
                >
                  <p className="text-[#1A0A05] text-lg font-bold tracking-[0.3em]" style={{ fontFamily: 'Georgia, serif' }}>N</p>
                </div>
                {/* Front card */}
                <div
                  className="absolute left-0 top-0 w-72 h-44 rounded-xl p-6 shadow-2xl"
                  style={{ backgroundColor: '#1A0A05' }}
                >
                  <p className="text-[#C9A155] font-bold tracking-[0.2em] text-base" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                    Nocturna
                  </p>
                  <p className="text-[#F5EDD4]/40 text-[9px] tracking-[0.3em] uppercase">Mezcalería Artesanal</p>
                  <div className="mt-5">
                    <p className="text-[#F5EDD4] text-xs font-semibold">Valentina Cruz</p>
                    <p className="text-[#C9A155] text-[10px]">Directora de Operaciones</p>
                    <p className="text-[#F5EDD4]/40 text-[10px] mt-2">+52 951 123 4567</p>
                    <p className="text-[#F5EDD4]/40 text-[10px]">hola@nocturna.mx</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram post */}
            <div>
              <p className="text-[#4A3728] text-xs uppercase tracking-widest mb-4">Post de Instagram</p>
              <div className="w-64 aspect-square rounded-2xl overflow-hidden shadow-2xl relative mx-auto md:mx-0" style={{ backgroundColor: '#1A0A05' }}>
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, #C9A155 0%, transparent 60%)' }}
                />
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <p className="text-[#C9A155] text-[9px] tracking-[0.4em] uppercase">Nueva cosecha · 2026</p>
                  <div>
                    <p className="text-[#F5EDD4] text-xl font-light leading-tight mb-1" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                      El agave habla.<br />Nosotros escuchamos.
                    </p>
                    <div className="h-px w-10 bg-[#C9A155]/40 my-2" />
                    <p className="text-[#F5EDD4]/50 text-[9px] tracking-[0.3em] uppercase">Nocturna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiente */}
      <section className="py-0">
        <div className="grid md:grid-cols-3 gap-0">
          {[
            'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&q=80',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
            'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80',
          ].map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img src={src} alt="Brand context" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-[#1A0A05]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C9A155] uppercase tracking-widest text-xs mb-3 text-center">Cómo lo hacemos</p>
          <h2 className="font-display font-black text-3xl text-white text-center mb-14">
            Proceso de diseño
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {proceso.map((p) => (
              <div key={p.step} className="text-center">
                <p className="text-[#C9A155] text-4xl font-black mb-4 font-display">{p.step}</p>
                <p className="text-white font-semibold text-sm mb-2">{p.title}</p>
                <p className="text-[#F5EDD4]/50 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #7D3B2A 0%, #1A0A05 100%)' }}
      >
        <p className="text-[#C9A155] text-xs uppercase tracking-widest mb-4">Demo creado por Axolote Studio</p>
        <h2 className="font-display font-black text-white leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
          Tu marca merece<br />esta presencia
        </h2>
        <p className="text-[#F5EDD4]/60 text-sm max-w-md mx-auto mb-10 leading-relaxed">
          Creamos identidades visuales completas que hacen que tu negocio inspire confianza desde el primer segundo. Logotipo, colores, tipografía, manual de marca y mockups.
        </p>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#C9A155] text-[#1A0A05] font-bold px-10 py-4 rounded-full hover:bg-[#d4af6a] transition-all shadow-2xl text-sm tracking-wide"
        >
          ✦ Quiero mi identidad visual
        </a>
        <p className="text-[#C9A155]/40 text-xs mt-6">Cotización gratuita · Respuesta en menos de 24 horas</p>
      </section>
    </div>
  )
}
