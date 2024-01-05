"use client"

interface Props {
  onclick: () => void
  label: string
}

export default function MenuItem(children: Props) {
  return (
    <div className="px-4 py-3 hover:bg-neutral-200 transition font-semibold">{children.label}</div>
  )
}

