import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { SkipLink } from './components/SkipLink'
import { container } from './components/ui'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

// Project pages load on demand, so the first visit only downloads the home page code.
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then((m) => ({ default: m.ProjectDetail })))

/** Scrolls to the #hash target after navigation, or to the top when there is none. */
function useScrollToHash() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
}

export function App() {
  useScrollToHash()
  return (
    <>
      <div aria-hidden="true" className="scroll-progress" />
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects/:slug"
            element={
              <Suspense fallback={<p role="status" className={`${container} py-24 text-muted`}>Loading…</p>}>
                <ProjectDetail />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
