import React from 'react'

export type PingExpression = 'happy' | 'excited' | 'curious' | 'sleepy' | 'celebrate' | 'reading' | 'flying' | 'notify'

const BODY: Record<PingExpression, React.ReactNode> = {
  happy: (
    <>
      <path d="M50 16 C70 16 84 31 84 53 C84 75 70 87 50 87 C30 87 16 75 16 53 C16 31 30 16 50 16 Z" fill="url(#pgrad)"/>
      <g transform="translate(53,6) rotate(16)"><path d="M0 6 L20 1 L10 11 Z" fill="#fff"/><path d="M0 6 L10 11 L8 16 Z" fill="#E4EEFB"/></g>
      <ellipse cx="33" cy="60" rx="4.5" ry="2.7" fill="#FFB6C9" opacity=".8"/><ellipse cx="67" cy="60" rx="4.5" ry="2.7" fill="#FFB6C9" opacity=".8"/>
      <ellipse cx="42" cy="53" rx="3" ry="4" fill="#2B2D42"/><ellipse cx="58" cy="53" rx="3" ry="4" fill="#2B2D42"/>
      <path d="M44 62 Q50 68 56 62" fill="none" stroke="#2B2D42" strokeWidth="2.3" strokeLinecap="round"/>
    </>
  ),
  excited: (
    <>
      <path d="M50 16 C70 16 84 31 84 53 C84 75 70 87 50 87 C30 87 16 75 16 53 C16 31 30 16 50 16 Z" fill="url(#pgrad)"/>
      <g transform="translate(53,6) rotate(16)"><path d="M0 6 L20 1 L10 11 Z" fill="#fff"/><path d="M0 6 L10 11 L8 16 Z" fill="#E4EEFB"/></g>
      <path d="M28 40 L36 36 M30 30 L37 28" stroke="#5B8DEF" strokeWidth="2.2" strokeLinecap="round"/>
      <ellipse cx="33" cy="60" rx="4.5" ry="2.7" fill="#FFB6C9" opacity=".8"/><ellipse cx="67" cy="60" rx="4.5" ry="2.7" fill="#FFB6C9" opacity=".8"/>
      <path d="M38 52 Q42 47 46 52" fill="none" stroke="#2B2D42" strokeWidth="2.3" strokeLinecap="round"/>
      <path d="M54 52 Q58 47 62 52" fill="none" stroke="#2B2D42" strokeWidth="2.3" strokeLinecap="round"/>
      <ellipse cx="50" cy="62" rx="4" ry="5" fill="#2B2D42"/>
    </>
  ),
  curious: (
    <>
      <path d="M50 16 C70 16 84 31 84 53 C84 75 70 87 50 87 C30 87 16 75 16 53 C16 31 30 16 50 16 Z" fill="url(#pgrad)"/>
      <g transform="translate(53,6) rotate(16)"><path d="M0 6 L20 1 L10 11 Z" fill="#fff"/><path d="M0 6 L10 11 L8 16 Z" fill="#E4EEFB"/></g>
      <ellipse cx="42" cy="53" rx="3" ry="4" fill="#2B2D42"/><ellipse cx="58" cy="53" rx="3" ry="4" fill="#2B2D42"/>
      <ellipse cx="33" cy="60" rx="4.5" ry="2.7" fill="#FFB6C9" opacity=".8"/><ellipse cx="67" cy="60" rx="4.5" ry="2.7" fill="#FFB6C9" opacity=".8"/>
      <path d="M45 62 Q50 66 55 62" fill="none" stroke="#2B2D42" strokeWidth="2.3" strokeLinecap="round"/>
      <circle cx="74" cy="70" r="9" fill="none" stroke="#FFD166" strokeWidth="3"/><path d="M80 76 L88 84" stroke="#FFD166" strokeWidth="3.4" strokeLinecap="round"/>
    </>
  ),
  sleepy: (
    <>
      <path d="M50 16 C70 16 84 31 84 53 C84 75 70 87 50 87 C30 87 16 75 16 53 C16 31 30 16 50 16 Z" fill="url(#pgrad)"/>
      <g transform="translate(53,6) rotate(16)"><path d="M0 6 L20 1 L10 11 Z" fill="#fff"/><path d="M0 6 L10 11 L8 16 Z" fill="#E4EEFB"/></g>
      <ellipse cx="33" cy="60" rx="4.5" ry="2.7" fill="#FFB6C9" opacity=".8"/><ellipse cx="67" cy="60" rx="4.5" ry="2.7" fill="#FFB6C9" opacity=".8"/>
      <path d="M38 54 Q42 57 46 54" fill="none" stroke="#2B2D42" strokeWidth="2.3" strokeLinecap="round"/>
      <path d="M54 54 Q58 57 62 54" fill="none" stroke="#2B2D42" strokeWidth="2.3" strokeLinecap="round"/>
      <path d="M46 63 Q50 65 54 63" fill="none" stroke="#2B2D42" strokeWidth="2" strokeLinecap="round"/>
      <text x="70" y="34" fontSize="13" fontWeight="800" fill="#A7D8FF">z</text><text x="78" y="26" fontSize="10" fontWeight="800" fill="#A7D8FF">z</text>
    </>
  ),
  celebrate: (
    <>
      <path d="M50 16 C70 16 84 31 84 53 C84 75 70 87 50 87 C30 87 16 75 16 53 C16 31 30 16 50 16 Z" fill="url(#pgrad)"/>
      <g transform="translate(53,6) rotate(16)"><path d="M0 6 L20 1 L10 11 Z" fill="#fff"/><path d="M0 6 L10 11 L8 16 Z" fill="#E4EEFB"/></g>
      <ellipse cx="42" cy="53" rx="3" ry="4" fill="#2B2D42"/><ellipse cx="58" cy="53" rx="3" ry="4" fill="#2B2D42"/>
      <ellipse cx="33" cy="60" rx="4.5" ry="2.7" fill="#FFB6C9" opacity=".8"/><ellipse cx="67" cy="60" rx="4.5" ry="2.7" fill="#FFB6C9" opacity=".8"/>
      <path d="M44 62 Q50 67 56 62" fill="none" stroke="#2B2D42" strokeWidth="2.3" strokeLinecap="round"/>
      <path d="M72 60 l3.4 6.8 7.6 1-5.5 5.4 1.3 7.5-6.8-3.6-6.8 3.6 1.3-7.5-5.5-5.4 7.6-1Z" fill="#FFD166"/>
    </>
  ),
  reading: (
    <>
      <path d="M50 16 C70 16 84 31 84 53 C84 75 70 87 50 87 C30 87 16 75 16 53 C16 31 30 16 50 16 Z" fill="url(#pgrad)"/>
      <g transform="translate(53,6) rotate(16)"><path d="M0 6 L20 1 L10 11 Z" fill="#fff"/><path d="M0 6 L10 11 L8 16 Z" fill="#E4EEFB"/></g>
      <ellipse cx="42" cy="50" rx="3" ry="4" fill="#2B2D42"/><ellipse cx="58" cy="50" rx="3" ry="4" fill="#2B2D42"/>
      <path d="M45 59 Q50 62 55 59" fill="none" stroke="#2B2D42" strokeWidth="2" strokeLinecap="round"/>
      <rect x="36" y="64" width="28" height="20" rx="3" fill="#fff" stroke="#D7E5F7" strokeWidth="1.4"/>
      <line x1="40" y1="70" x2="60" y2="70" stroke="#A7D8FF" strokeWidth="2"/><line x1="40" y1="75" x2="56" y2="75" stroke="#A7D8FF" strokeWidth="2"/>
    </>
  ),
  flying: (
    <>
      <path d="M22 60 C22 44 34 32 52 32 C70 32 82 42 82 56 C82 72 68 80 50 80 C40 80 30 78 26 84 C28 76 22 70 22 60 Z" fill="url(#pgrad)"/>
      <g transform="translate(64,18) rotate(28)"><path d="M0 6 L20 1 L10 11 Z" fill="#fff"/><path d="M0 6 L10 11 L8 16 Z" fill="#E4EEFB"/></g>
      <path d="M16 50 L30 50 M14 58 L26 58" stroke="#7DBBFF" strokeWidth="2.4" strokeLinecap="round"/>
      <ellipse cx="56" cy="52" rx="3" ry="4" fill="#2B2D42"/>
      <path d="M50 60 Q55 63 60 60" fill="none" stroke="#2B2D42" strokeWidth="2.2" strokeLinecap="round"/>
      <ellipse cx="50" cy="58" rx="4" ry="2.4" fill="#FFB6C9" opacity=".8"/>
    </>
  ),
  notify: (
    <>
      <path d="M50 16 C70 16 84 31 84 53 C84 75 70 87 50 87 C30 87 16 75 16 53 C16 31 30 16 50 16 Z" fill="url(#pgrad)"/>
      <g transform="translate(53,6) rotate(16)"><path d="M0 6 L20 1 L10 11 Z" fill="#fff"/><path d="M0 6 L10 11 L8 16 Z" fill="#E4EEFB"/></g>
      <ellipse cx="40" cy="51" rx="3" ry="4" fill="#2B2D42"/><ellipse cx="56" cy="51" rx="3" ry="4" fill="#2B2D42"/>
      <ellipse cx="31" cy="59" rx="4.5" ry="2.7" fill="#FFB6C9" opacity=".8"/>
      <ellipse cx="48" cy="62" rx="4" ry="5" fill="#2B2D42"/>
      <path d="M66 56 L84 48 L84 72 L66 64 Z" fill="#FFD166" stroke="#E8B23A" strokeWidth="1"/><rect x="60" y="56" width="8" height="8" rx="2" fill="#5B8DEF"/>
      <path d="M88 52 l5 -3 M90 60 l6 0 M88 68 l5 3" stroke="#FFD166" strokeWidth="2.2" strokeLinecap="round"/>
    </>
  ),
}

export function Ping({
  expression = 'happy',
  size = 64,
  float = false,
  className = '',
}: {
  expression?: PingExpression
  size?: number
  float?: boolean
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${float ? 'animate-pg-float' : ''} ${className}`}
      aria-label={`PING ${expression}`}
    >
      <defs>
        <linearGradient id="pgrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9CC8FF" />
          <stop offset="1" stopColor="#5B8DEF" />
        </linearGradient>
      </defs>
      {BODY[expression]}
    </svg>
  )
}
