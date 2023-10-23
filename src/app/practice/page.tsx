'use client'
import {create} from "zustand"

type State = {
  firstName: string,
  lastName: string,
}

type Action = {
  updateFirstName: (firstName: State['firstName']) => void,
  updateLastName: (lastName: State['lastName']) => void,
}

// 스토어 생성
// state 수정하려면 set 함수 사용
// 타입스크립트의 경우 <>뒤에 ()가 하나 더 붙는다.
const usePersonStore = create<State & Action>() ((set) => ({
  firstName: '',
  lastName: '',
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({lastName: lastName}))
}))

export default function Practice() {

  const firstName = usePersonStore((state) => state.firstName)
  const updateFirstName = usePersonStore((state) => state.updateFirstName) // 스토어에서 가져온다

  return (
    <div>
      <label>
        Firstname
        <input value={firstName} onChange={(e) => updateFirstName(e.target.value)} // state 변경
        />
      </label>

      <p>Hello, <strong>{firstName} !</strong></p>
    </div>
  )
}