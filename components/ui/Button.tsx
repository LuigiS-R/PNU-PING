import React from 'react'

type Variant = 'primary' | 'yellow' | 'ghost'

const styles: Record<Variant, string> = {
  primary: 'bg-primary text-white shadow-[var(--shadow-soft)]',
  yellow: 'bg-yellow text-[#5A4A12]',
  ghost: 'bg-tint text-primary',
}

export function Button({ variant = 'primary', className = '', ...p }: { variant?: Variant } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...p} className={`font-bold rounded-2xl px-[22px] py-[13px] transition-transform active:scale-[.97] ${styles[variant]} ${className}`} />
}
