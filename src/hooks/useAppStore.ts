import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, AppStore, RootState } from '@/lib/store'

export const useAppDispatch = useDispatch as () => AppDispatch
export const useAppSelector = useSelector as <T>(
  selector: (state: RootState) => T,
) => T
export const useAppStore = useStore as () => AppStore

//export const useAppSelector = useSelector.withTypes<RootState>()
//export const useAppStore = useStore.withTypes<AppStore>()
