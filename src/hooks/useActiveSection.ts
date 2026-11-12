import { useEffect, useState } from 'react'

/** Returns the id of the section crossing the middle of the viewport (scroll-spy). */
export function useActiveSection(ids: string[], enabled: boolean) {
  const [active, setActive] = useState<string>()

  useEffect(() => {
    if (!enabled || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-45% 0px -51% 0px' },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids, enabled])

  return enabled ? active : undefined
}
