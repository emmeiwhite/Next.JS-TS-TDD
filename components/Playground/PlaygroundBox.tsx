'use client'

type BoxType = { children: React.ReactNode }

export default function PlaygroundBox({ children }: BoxType) {
  return <div>{children}</div>
}
