import React from 'react'

export function Toggle({ on, onClick }: { on: boolean; onClick?: () => void }) {
  return (
    <button onClick={onClick} aria-pressed={on} className={`relative w-[46px] h-[27px] rounded-[20px] shrink-0 transition-colors ${on ? 'bg-primary' : 'bg-[#D7DEE9]'}`}>
      <span className={`absolute top-[3px] w-[21px] h-[21px] rounded-full bg-white shadow transition-all ${on ? 'right-[3px]' : 'left-[3px]'}`} />
    </button>
  )
}
