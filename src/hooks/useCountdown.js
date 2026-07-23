import { useState, useEffect } from 'react'

// Cuenta regresiva a `target` (Date). Si `target` ya pasó, se queda en cero en
// vez de congelarse en el estado inicial sin limpiar el interval (como pasaba
// antes: el early-return en tick() nunca llamaba setS, dejando timers vivos
// para siempre en páginas cuyo evento ya ocurrió).
export function useCountdown(target) {
  const [s, setS] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    let id
    const tick = () => {
      const d = target - Date.now()
      if (d <= 0) {
        setS({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(id)
        return
      }
      setS({
        days: Math.floor(d / 86400000),
        hours: Math.floor((d % 86400000) / 3600000),
        minutes: Math.floor((d % 3600000) / 60000),
        seconds: Math.floor((d % 60000) / 1000),
      })
    }
    tick()
    id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])
  return s
}
