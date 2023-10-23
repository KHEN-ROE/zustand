'use client'
import { create } from 'zustand'

type Store = {
  count: number,
  inc: () => void
}

// 어떤 컴포넌트에서든지 스토어에 저장만 하면, 어디서든 꺼내쓸 수 있다?
const useStore = create<Store>() ((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

export default function Home() {
  const { inc } = useStore();
  const count = useStore((state) => state.count); // 위 아래 둘 중 어느 방식으로 꺼내도 되는 듯?
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}