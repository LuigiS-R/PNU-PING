import React from 'react'

export function DeptTag({ important = false, children }: { important?: boolean; children: React.ReactNode }) {
  return <span className={`inline-block px-[11px] py-1 rounded-lg text-xs font-bold ${important ? 'bg-[#FFF1D6] text-[#B07A12]' : 'bg-tint text-primary'}`}>{children}</span>
}
