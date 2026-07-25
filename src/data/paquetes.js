// Única fuente de verdad para eventos, paquetes, precios y features.
// Ningún componente debe hardcodear precios ni features — todo se lee de aquí.

export const WHATSAPP_NUMBER = '529932228936'

export const eventos = [
  { id: 'boda', label: 'Boda', emoji: '💍' },
  { id: 'xv-anos', label: 'XV Años', emoji: '👑' },
  { id: 'baby-shower', label: 'Baby Shower', emoji: '🍼' },
  { id: 'cumpleanos', label: 'Cumpleaños Especial', emoji: '🎂', nota: 'Solo 50, 60 y 75 años' },
]

// id de cada pieza -> debe existir un componente Demo* correspondiente en /components/demo
export const piezas = {
  'save-the-date': { label: 'Save the Date' },
  'logo': { label: 'Logo del evento' },
  'invitacion': { label: 'Invitación web' },
  'qr': { label: 'Código QR' },
  'rsvp': { label: 'RSVP' },
  'cuenta-regresiva': { label: 'Cuenta regresiva' },
  'album': { label: 'Álbum digital' },
  'mesa-regalos': { label: 'Mesa de regalos' },
}

export const paquetes = [
  {
    id: 'esencial',
    nombre: 'Esencial',
    precio: 719,
    entrega: '5 días hábiles',
    revisiones: 1,
    soporte: 'Soporte por WhatsApp hasta la entrega',
    destacado: false,
    incluye: [
      'Invitación web (página única elegante)',
      'Logo del evento',
      'Save the Date digital',
      'Código QR personalizado',
      '1 revisión incluida',
      'Entrega en 5 días hábiles',
      'Soporte por WhatsApp hasta la entrega',
    ],
    piezas: ['save-the-date', 'logo', 'invitacion', 'qr'],
  },
  {
    id: 'premium',
    nombre: 'Premium',
    precio: 1199,
    entrega: '7 días hábiles',
    revisiones: 2,
    soporte: 'Soporte por WhatsApp extendido hasta el día del evento',
    destacado: true,
    badge: 'Recomendado',
    incluye: [
      'Todo lo del Esencial',
      'RSVP con Google Form configurado y brandado',
      'Cuenta regresiva personalizada',
      'Álbum digital post-evento',
      '2 revisiones incluidas',
      'Entrega en 7 días hábiles',
      'Soporte por WhatsApp extendido hasta el día del evento',
    ],
    piezas: ['save-the-date', 'logo', 'invitacion', 'qr', 'rsvp', 'cuenta-regresiva', 'album'],
  },
  {
    id: 'experiencia',
    nombre: 'Experiencia',
    precio: 1759,
    entrega: '10 días hábiles',
    revisiones: 3,
    soporte: 'Soporte por WhatsApp prioritario antes, durante y después del evento',
    destacado: false,
    incluye: [
      'Todo lo del Premium',
      'Sitio web completo del evento (multi-sección)',
      'Mesa de regalos integrada (manual + link del cliente)',
      'Dominio temporal del evento',
      'Galería previa al evento',
      '3 revisiones incluidas',
      'Entrega en 10 días hábiles',
      'Soporte por WhatsApp prioritario antes, durante y después del evento',
    ],
    piezas: ['save-the-date', 'logo', 'invitacion', 'qr', 'rsvp', 'cuenta-regresiva', 'album', 'mesa-regalos'],
  },
]

export function buildDemoWhatsappLink(eventoLabel, paqueteNombre) {
  const texto = `Hola, me interesa el paquete ${paqueteNombre} para mi ${eventoLabel}. ¿Pueden darme más información?`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`
}
