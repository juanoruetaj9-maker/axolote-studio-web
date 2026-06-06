import { useState } from 'react'
import { MessageCircle, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

const WHATSAPP_NUMBER = '529932228936'
const EMAIL = 'hola@axolotestudio.mx'

function buildWaMessage({ nombre, tipo, mensaje }) {
  const lines = [
    `Hola Axolote Studio 👋`,
    ``,
    `*Nombre:* ${nombre || '(sin nombre)'}`,
    `*Tipo de proyecto:* ${tipo || '(sin especificar)'}`,
    `*Descripción:* ${mensaje || '(sin descripción)'}`,
    ``,
    `Quiero cotizar este proyecto.`,
  ]
  return encodeURIComponent(lines.join('\n'))
}

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    tipo: '',
    mensaje: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWaMessage(form)}`

  return (
    <div>
      {/* Header */}
      <section className="bg-sand py-14 md:py-20 border-b border-sand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-light text-brand px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
            Contacto
          </span>
          <h1 className="section-heading text-3xl md:text-5xl text-gray-950 mb-4">
            Empieza hoy. Es más fácil<br className="hidden md:block" /> de lo que crees.
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Cuéntanos tu proyecto y te respondemos en menos de 24 horas con una cotización clara y sin compromisos.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <h2 className="font-display font-bold text-xl text-gray-900 mb-6">
                Cuéntanos tu proyecto
              </h2>

              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Tu nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Ana García"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all bg-gray-50 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    ¿Qué tipo de proyecto necesitas?
                  </label>
                  <select
                    name="tipo"
                    value={form.tipo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all bg-gray-50 text-gray-700"
                  >
                    <option value="">Selecciona una opción...</option>
                    <option value="Invitación web - Boda">Invitación web — Boda</option>
                    <option value="Invitación web - XV Años">Invitación web — XV Años</option>
                    <option value="Invitación web - Graduación">Invitación web — Graduación</option>
                    <option value="Invitación web - Otro evento">Invitación web — Otro evento</option>
                    <option value="Landing page para negocio">Landing page para negocio</option>
                    <option value="Branding / Logotipo">Branding / Logotipo</option>
                    <option value="Diseño en Canva / Material visual">Diseño en Canva / Material visual</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Cuéntanos más (opcional)
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Ej. Necesito una invitación para mi boda el 15 de febrero en Mérida, para aprox. 120 personas. Me gustaría algo elegante y moderno."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all bg-gray-50 placeholder-gray-400 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-full font-bold text-white text-sm shadow-md hover:shadow-lg transition-all"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Enviar por WhatsApp
                  </a>

                  <p className="text-xs text-gray-400 text-center mt-3">
                    Al hacer clic, se abrirá WhatsApp con tu mensaje pre-escrito. Sin presión.
                  </p>
                </div>

                {/* Alternative: Email */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex-1 h-px bg-gray-100" />
                  <span className="text-xs text-gray-400">o también</span>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>

                <a
                  href={`mailto:${EMAIL}?subject=Cotización de proyecto&body=Hola Axolote Studio, me gustaría cotizar...`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full border-2 border-gray-200 text-gray-700 text-sm font-semibold hover:border-brand hover:text-brand transition-all"
                >
                  <Mail size={16} />
                  Enviar por correo
                </a>
              </div>
            </div>

            {/* Info sidebar */}
            <div className="flex flex-col gap-5">
              {/* WhatsApp direct */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-green-300 hover:bg-green-50 transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <MessageCircle size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-green-700">
                    WhatsApp directo
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">Respuesta en menos de 24 horas</p>
                </div>
                <ArrowRight size={16} className="ml-auto text-gray-400 group-hover:text-green-600" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-brand-subtle hover:bg-brand-light/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center shrink-0">
                  <Mail size={22} className="text-brand" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{EMAIL}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Para proyectos formales y empresas</p>
                </div>
                <ArrowRight size={16} className="ml-auto text-gray-400 group-hover:text-brand" />
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50">
                <div className="w-12 h-12 rounded-xl bg-coral-light flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-coral" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">México</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Atendemos toda la república
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">Trabajamos 100% remoto</p>
                </div>
              </div>

              {/* Response time */}
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Respondemos rápido</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Tiempo promedio de respuesta: menos de 8 horas
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">Lunes a sábado, 9:00–19:00 h</p>
                </div>
              </div>

              {/* Promise box */}
              <div className="p-5 rounded-2xl gradient-brand text-white">
                <p className="font-display font-bold text-sm mb-2">
                  Nuestra promesa de contacto
                </p>
                <ul className="flex flex-col gap-1.5 text-xs text-blue-100">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-300 shrink-0" />
                    Respondemos en menos de 24 horas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-300 shrink-0" />
                    Cotización sin costo y sin compromiso
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-300 shrink-0" />
                    Sin presión, sin ventas agresivas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-300 shrink-0" />
                    Explicamos todo fácil
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
