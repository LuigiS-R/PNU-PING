import React from 'react'

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-extrabold text-[15px] text-ink flex items-center gap-1.5 px-1 pt-1.5 pb-0.5">{children}</h2>
}
