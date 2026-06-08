import { Suspense } from 'react'
import { FeedView } from './FeedView'
export default function FeedPage() {
  return <Suspense fallback={null}><FeedView /></Suspense>
}
