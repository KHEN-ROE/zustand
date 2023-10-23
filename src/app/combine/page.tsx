import  { create } from 'zustand'
import { combine } from 'zustand/middleware'

// combine 쓰는 경우 - 타입 추론해줌
const useBearStore = create(
  combine({ bears: 0}, (set) => ({
    increase: (by: number) => set((state) => ({ bears: state.bears + by })),
  })) 
)

export default function Combine() {
  return {

  }
}