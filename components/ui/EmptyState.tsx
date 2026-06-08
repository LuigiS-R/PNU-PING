import React from 'react'
import { Ping, PingExpression } from '@/components/ping/Ping'

export function EmptyState({ title, sub, expression = 'sleepy' }: { title: string; sub?: string; expression?: PingExpression }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-center px-8 py-16">
      <Ping expression={expression} size={120} float />
      <div className="font-extrabold text-[17px] text-ink mt-3.5">{title}</div>
      {sub && <div className="text-[13px] text-muted mt-1.5 max-w-xs">{sub}</div>}
    </div>
  )
}
