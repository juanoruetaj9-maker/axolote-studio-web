import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Lightbulb, Users, Shield } from 'lucide-react'

const valores = [
  {
    icon: <Lightbulb size={22} className="text-brand" />,
    title: 'Claridad',
    desc: 'Explicamos todo de forma sencilla, sin tecnicismos. El cliente siempre sabe qué está pasando y por qué.',
  },
  {
    icon: <Shield size={22} className="text-brand" />,
    title: 'Confianza',
    desc: 'Somos transparentes en precios, tiempos y procesos. Lo que cotizamos es lo que entregamos.',
  },
  {
    icon: <Heart size={22} className="text-coral" />,
    title: 'Calidad',
    desc: 'Cada proyecto recibe atención real. No somos una fábrica de páginas. Somos un estudio con criterio visual.',
  },
  {
    icon: <Users size={22} className="text-coral" />,
    title: 'Cercanía',
    desc: 'Acompañamos al cliente en todo el proceso. Nunca se siente solo ni perdido trabajando con nosotros.',
  },
]

export default function Nosotros() {
  return (
    <div>
      {/* Header */}
      <section className="bg-sand py-14 md:py-20 border-b border-sand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-light text-brand px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
            Nosotros
          </span>
          <h1 className="section-heading text-3xl md:text-5xl text-gray-950 mb-4">
            Diseño profesional<br />para negocios reales.
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Un estudio creativo y digital que transforma negocios reales en presencias profesionales, claras y memorables.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <div className="order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="/imagenes/nosotros/studio.jpg"
                  alt="Equipo Axolote Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <span className="inline-block bg-coral-light text-coral px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
                Nuestra historia
              </span>
              <h2 className="section-heading text-2xl md:text-3xl text-gray-950 mb-5">
                Nació de una pregunta sencilla
              </h2>
              <div className="flex flex-col gap-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  Axolote Studio nació con una pregunta sencilla: ¿por qué hay tantos negocios increíbles que visualmente parecen pequeños o poco serios en internet?
                </p>
                <p>
                  Restaurantes excelentes sin página. Clínicas de calidad con imagen descuidada. Eventos premium con invitaciones del montón. El problema no era falta de calidad en el negocio, sino falta de acceso a diseño profesional real y accesible.
                </p>
                <p>
                  Decidimos resolver exactamente eso. No con tecnología complicada ni términos corporativos, sino con diseño honesto, acompañamiento cercano y precios que tienen sentido.
                </p>
                <p className="font-semibold text-gray-800">
                  Hoy ayudamos a personas y negocios de toda México a verse tan profesionales como realmente son.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16 bg-sand border-y border-sand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center mb-5">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-3">Misión</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ayudar a personas y negocios a mejorar su presencia visual y digital mediante experiencias creativas, modernas y accesibles, ofreciendo acompañamiento cercano, diseño profesional y soluciones fáciles de entender.
              </p>
            </div>

            <div className="bg-brand rounded-2xl p-8 text-white shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <span className="text-xl">🔭</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Visión</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Convertirnos en el estudio creativo y digital de referencia en México, reconocido por diseño premium amigable, acompañamiento real y resultados visuales que generan confianza y abren puertas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-light text-brand px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3">
              Valores
            </span>
            <h2 className="section-heading text-2xl md:text-3xl text-gray-950">
              Lo que nos define
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valores.map((v) => (
              <div key={v.title} className="card-hover p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto mb-4">
                  {v.icon}
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-12 bg-brand-light border-y border-brand-subtle">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand font-display font-extrabold text-lg md:text-2xl">
            "Te ayudamos a verte profesional de una forma clara, moderna y sin complicarte."
          </p>
          <p className="text-gray-500 text-sm mt-2">— Promesa de Axolote Studio</p>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 rounded-2xl p-7 border border-gray-100">
            <div className="text-4xl shrink-0">🌐</div>
            <div>
              <h3 className="font-display font-bold text-gray-900 mb-1">
                Parte del ecosistema Social Ventura
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Axolote Studio pertenece a Social Ventura, un ecosistema de marcas tecnológicas y creativas construido en México con vocación de largo plazo. Esto significa respaldo, procesos sólidos y una red de capacidades que crece con el tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-sand border-t border-sand-dark">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-heading text-2xl md:text-3xl text-gray-950 mb-4">
            ¿Quieres trabajar con nosotros?
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Empezamos con una conversación. Sin presión, sin ventas agresivas. Solo platiquemos.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-all text-sm shadow-md"
          >
            Escribirnos ahora <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  )
}
