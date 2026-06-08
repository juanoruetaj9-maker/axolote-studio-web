import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Portafolio from './pages/Portafolio'
import Proceso from './pages/Proceso'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import DemoInvitaciones from './pages/DemoInvitaciones'
import DemoLandingPages from './pages/DemoLandingPages'
import DemoBranding from './pages/DemoBranding'
import ProyectoBodasMariana from './pages/ProyectoBodasMariana'
import ProyectoXVIsabella from './pages/ProyectoXVIsabella'
import ProyectoGraduacionEmmanuel from './pages/ProyectoGraduacionEmmanuel'
import ProyectoArqRoberto from './pages/ProyectoArqRoberto'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/proceso" element={<Proceso />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/demo/invitaciones" element={<DemoInvitaciones />} />
          <Route path="/demo/landing-pages" element={<DemoLandingPages />} />
          <Route path="/demo/branding" element={<DemoBranding />} />
          <Route path="/portafolio/boda-mariana-diego" element={<ProyectoBodasMariana />} />
          <Route path="/portafolio/xv-isabella" element={<ProyectoXVIsabella />} />
          <Route path="/portafolio/graduacion-emmanuel" element={<ProyectoGraduacionEmmanuel />} />
          <Route path="/portafolio/arq-roberto-diaz" element={<ProyectoArqRoberto />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  )
}

export default App
