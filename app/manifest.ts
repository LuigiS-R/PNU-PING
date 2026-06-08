import type { MetadataRoute } from 'next'
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PING — 부산대 공지',
    short_name: 'PiNG',
    description: '부산대 공지를 가장 먼저 전해주는 친구',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFC',
    theme_color: '#5B8DEF',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
    ],
  }
}
