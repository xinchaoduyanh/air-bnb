"use client"

interface Props {
  onClick: () => void
  label: string
}

export default function MenuItem(children: Props) {
 const handleClick = () => {
    children.onClick()
 }
  return (
    <div onClick={handleClick} className="px-4 py-3 hover:bg-neutral-200 transition font-semibold">{children.label}</div>
  )
}

