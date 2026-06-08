import React from 'react'

export function Chip({ active = false, className = '', ...p }: { active?: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" {...p} className={`cursor-pointer select-none px-4 py-2 rounded-full text-sm font-semibold border-[1.5px] ${active ? 'bg-primary border-primary text-white' : 'bg-white border-line text-[#54607A]'} ${className}`} />
}
