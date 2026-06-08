import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'

function IgIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function FbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/logos/Favicon de Axolote Studio.png"
                alt="Axolote Studio"
                className="h-9 w-auto object-contain brightness-0 invert"
              />
              <span className="font-display font-bold text-white text-base">
                Axolote Studio
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Estudio creativo y digital. Ayudamos a personas y negocios a verse profesionales en internet de forma clara, moderna y accesible.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/axolote_studio_digital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <IgIcon />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61590476165059"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FbIcon />
              </a>
              <a
                href="mailto:hola@axolotestudio.mx"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navegar</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                { to: '/', label: 'Inicio' },
                { to: '/servicios', label: 'Servicios' },
                { to: '/portafolio', label: 'Portafolio' },
                { to: '/proceso', label: 'Cómo trabajamos' },
                { to: '/nosotros', label: 'Nosotros' },
                { to: '/contacto', label: 'Contacto' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contacto</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 text-brand shrink-0" />
                <span>México<br />Servicio 100% remoto</span>
              </li>
              <li>
                <a
                  href="mailto:hola@axolotestudio.mx"
                  className="hover:text-white transition-colors"
                >
                  hola@axolotestudio.mx
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/529932228936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp directo
                </a>
              </li>
            </ul>

            <div className="mt-5">
              <Link
                to="/contacto"
                className="inline-block px-4 py-2 bg-brand text-white text-sm font-semibold rounded-full hover:bg-brand-dark transition-colors"
              >
                Cotizar ahora
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {year} Axolote Studio. Todos los derechos reservados.</p>
          <p>
            Parte del ecosistema{' '}
            <span className="text-gray-400">Social Ventura</span> — México
          </p>
        </div>
      </div>
    </footer>
  )
}
