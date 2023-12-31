// using middlewares
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BearSate {
  bears: number,
  increase: (by: number) => void
}

const useBearStore = create<BearSate>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      { name: 'bearStore' }
    )
  )
)

export default function Mid() {
  return (
    <div>

    </div>
  )
}