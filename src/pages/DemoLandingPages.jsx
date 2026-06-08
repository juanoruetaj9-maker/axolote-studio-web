import { Star, CheckCircle, Phone, MapPin, Clock, Award, Users, Zap, Shield } from 'lucide-react'
import DemoBanner from '../components/DemoBanner'

const WA = `https://wa.me/529932228936?text=${encodeURIComponent('Hola! Vi el ejemplo de landing page para negocios y me gustaría algo así para mi negocio.')}`
const TEAL = '#0A6B74'

const servicios = [
  { icon: '🦷', title: 'Limpieza Profunda', desc: 'Eliminamos sarro y manchas para una sonrisa impecable desde la primera sesión.' },
  { icon: '✨', title: 'Blanqueamiento LED', desc: 'Hasta 8 tonos más blanco en una sola sesión con tecnología de luz fría LED.' },
  { icon: '😁', title: 'Ortodoncia Invisible', desc: 'Alinea tus dientes sin brackets visibles. Cómodo, discreto y efectivo.' },
  { icon: '🔩', title: 'Implantes Dentales', desc: 'Recupera tu sonrisa completa con implantes de titanio de por vida.' },
  { icon: '💎', title: 'Estética Dental', desc: 'Carillas, diseño de sonrisa y microabrasión para resultados de revista.' },
  { icon: '🚨', title: 'Urgencias 24/7', desc: 'Dolor de muela o emergencia dental. Siempre disponibles para ti.' },
]

const testimonios = [
  { nombre: 'María González', rol: 'Paciente desde 2022', texto: 'Llevaba años sin ir al dentista por miedo y el Dr. Reyes hizo que todo fuera completamente cómodo. La clínica es preciosa y el equipo increíble.', stars: 5 },
  { nombre: 'Carlos Méndez', rol: 'Blanqueamiento', texto: 'El blanqueamiento quedó increíble. En una sola sesión noté una diferencia enorme. Mis compañeros de trabajo me preguntaron qué había hecho.', stars: 5 },
  { nombre: 'Laura Vázquez', rol: 'Ortodoncia invisible', texto: 'Terminé mi tratamiento de ortodoncia en 8 meses. Nadie se dio cuenta que llevaba alineadores. Muy profesional y puntual en cada cita.', stars: 5 },
]

export default function DemoLandingPages() {
  return (
    <div className="min-h-screen bg-white">
      <DemoBanner cta="Hola! Vi el ejemplo de landing page para negocios y me gustaría algo así para mi negocio." />

      {/* Hero */}
      <section
        className="relative min-h-[92vh] flex items-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(10,107,116,0.92) 0%, rgba(10,107,116,0.7) 50%, rgba(10,107,116,0.2) 100%)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium mb-6">
              <Award size={12} />
              Cédula Profesional Verificada — 12 años de experiencia
            </div>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white leading-tight mb-4">
              Tu sonrisa,<br />nuestra especialidad
            </h1>
            <p className="text-teal-100 text-base leading-relaxed mb-8 max-w-md">
              Clínica dental de vanguardia en el corazón de Mérida. Tecnología de punta, atención personalizada y resultados que transforman vidas.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white font-bold px-7 py-3.5 rounded-full text-sm shadow-xl hover:bg-teal-50 transition-all"
                style={{ color: TEAL }}
              >
                📅 Agendar cita
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition-all backdrop-blur-sm font-medium"
              >
                Ver servicios →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-0">
        <div
          className="max-w-full px-6 py-6"
          style={{ background: TEAL }}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: '1,200+', label: 'Pacientes atendidos' },
              { value: '12 años', label: 'De experiencia' },
              { value: '5', label: 'Especialidades' },
              { value: '4.9 ⭐', label: 'Calificación Google' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display font-extrabold text-2xl md:text-3xl">{value}</p>
                <p className="text-teal-200 text-xs mt-1 uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: TEAL }}>
              Nuestros servicios
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-gray-900">
              Todo lo que tu sonrisa necesita
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicios.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80"
                alt="Dr. Alejandro Reyes"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: TEAL }}>
                Nuestro director
              </p>
              <h2 className="font-display font-extrabold text-3xl text-gray-900 mb-2">
                Dr. Alejandro Reyes
              </h2>
              <p className="text-gray-500 text-sm mb-6 font-medium">
                Especialista en Estética y Rehabilitación Dental
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  'Egresado de la UNAM con Mención Honorífica',
                  'Especialidad en Implantología — España',
                  'Certificado por el Consejo Mexicano de Odontología',
                  '12 años de práctica en Mérida, Yucatán',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color: TEAL }} />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full text-sm shadow-lg hover:opacity-90 transition-all"
                style={{ background: TEAL }}
              >
                <Phone size={14} /> Agendar con el Dr. Reyes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: TEAL }}>
              Testimonios
            </p>
            <h2 className="font-display font-extrabold text-3xl text-gray-900">
              Lo que dicen nuestros pacientes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonios.map((t) => (
              <div key={t.nombre} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array(t.stars).fill(0).map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" className="text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">"{t.texto}"</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.nombre}</p>
                  <p className="text-gray-400 text-xs">{t.rol}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: TEAL }}>
                Visítanos
              </p>
              <h2 className="font-display font-extrabold text-3xl text-gray-900 mb-8">
                Estamos en el corazón de Mérida
              </h2>
              <div className="flex flex-col gap-5">
                {[
                  { icon: <MapPin size={18} style={{ color: TEAL }} />, title: 'Dirección', body: 'Calle 60 #485, Col. Centro\nMérida, Yucatán' },
                  { icon: <Clock size={18} style={{ color: TEAL }} />, title: 'Horarios', body: 'Lun–Vie: 9:00 am – 7:00 pm\nSáb: 9:00 am – 2:00 pm' },
                  { icon: <Phone size={18} style={{ color: TEAL }} />, title: 'Contacto', body: 'WhatsApp disponible 24/7\nPara urgencias y citas' },
                ].map(({ icon, title, body }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#e6f4f5' }}>
                      {icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{title}</p>
                      <p className="text-gray-500 text-sm mt-0.5 whitespace-pre-line">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-3xl overflow-hidden shadow-xl aspect-square flex items-center justify-center text-white text-center"
              style={{ background: 'linear-gradient(135deg, #0A6B74, #0d8a96)' }}
            >
              <div className="p-8">
                <MapPin size={40} className="mx-auto mb-4 text-teal-200" />
                <p className="font-display font-bold text-xl mb-1">Clínica Dental Luminare</p>
                <p className="text-teal-200 text-sm">Calle 60 #485, Mérida, Yuc.</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 border border-white/30 text-white px-5 py-2 rounded-full text-xs hover:bg-white/10 transition-all"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-12 px-6" style={{ background: '#f0f9fa' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { icon: <Shield size={22} />, title: 'Garantía de satisfacción', desc: 'Si no quedas satisfecho, revisamos sin costo adicional.' },
            { icon: <Users size={22} />, title: 'Atención personalizada', desc: 'Sin prisa. El tiempo que necesites para cada consulta.' },
            { icon: <Zap size={22} />, title: 'Resultados desde el día 1', desc: 'La mayoría de nuestros tratamientos muestran resultados inmediatos.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ background: TEAL }}>
                {icon}
              </div>
              <p className="font-bold text-gray-900 text-sm">{title}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-24 px-6 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #064e54 0%, #0A6B74 100%)' }}
      >
        <p className="text-teal-300 text-xs uppercase tracking-widest mb-4">Demo creado por Axolote Studio</p>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4">
          ¿Quieres una página así<br className="hidden md:block" /> para tu negocio?
        </h2>
        <p className="text-teal-200 text-sm max-w-md mx-auto mb-10 leading-relaxed">
          Podemos crear tu landing page profesional, lista en 6 días hábiles. Con dominio, hosting y diseño totalmente personalizado. Desde <strong>$1,090 MXN</strong>.
        </p>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white font-bold px-10 py-4 rounded-full hover:bg-teal-50 transition-all shadow-2xl text-sm tracking-wide"
          style={{ color: TEAL }}
        >
          🏢 Quiero una así para mi negocio
        </a>
        <p className="text-teal-400/60 text-xs mt-6">Sin costo por cotización · Respuesta en menos de 24 horas</p>
      </section>
    </div>
  )
}
