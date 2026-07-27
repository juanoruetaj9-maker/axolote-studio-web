import { useEffect } from 'react'

// Gestión manual de <title> y <meta name="description"> por página.
// No se instaló react-helmet-async para no sumar una dependencia nueva
// en un sitio 100% estático — con esto basta.
export function useDocumentMeta({ title, description }) {
  useEffect(() => {
    const prevTitle = document.title
    if (title) document.title = title

    let tag = document.querySelector('meta[name="description"]')
    const prevDescription = tag?.getAttribute('content') ?? null
    if (description) {
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }

    return () => {
      document.title = prevTitle
      if (tag && prevDescription !== null) tag.setAttribute('content', prevDescription)
    }
  }, [title, description])
}
