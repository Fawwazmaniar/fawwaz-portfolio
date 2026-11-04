import { Link } from 'react-router-dom'
import { container, textLink } from '../components/ui'

export function NotFound() {
  return (
    <div className={`${container} py-24`}>
      <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted">That page does not exist.</p>
      <Link to="/" className={`${textLink} mt-6 inline-block`}>Back to home</Link>
    </div>
  )
}
