import { Suspense } from 'react'
import { FeedView } from '@/app/feed/FeedView'

export default function Home() {
  return <Suspense fallback={null}><FeedView /></Suspense>
}
