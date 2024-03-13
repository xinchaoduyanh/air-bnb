
import {create} from 'zustand' // thư viện quản lý trạng thái
// import { debounce } from  'lodash' // import lodash for debouncing

interface RegisterModalState {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}


const useRegisterModal = create<RegisterModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen:false  }), // add debounce to delay the close action by 300ms
}))

export default useRegisterModal
