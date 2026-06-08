'use client'
import React from 'react'

export function SearchBar({ value, onChange, placeholder = '공지를 검색해보세요', active = false }: { value?: string; onChange?: (v: string) => void; placeholder?: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-2 bg-white border rounded-2xl px-3.5 py-[11px] text-sm ${active ? 'border-sky ring-[3px] ring-sky/20' : 'border-line'}`}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#8A93A6" strokeWidth="2"/><path d="M20 20l-3-3" stroke="#8A93A6" strokeWidth="2" strokeLinecap="round"/></svg>
      <input className="flex-1 bg-transparent outline-none text-ink placeholder:text-muted" value={value} placeholder={placeholder} onChange={e => onChange?.(e.target.value)} />
    </div>
  )
}
