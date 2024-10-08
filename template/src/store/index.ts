import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { useDispatch, UseSelector, useSelector } from 'react-redux'
import immerPlugin from '@rematch/immer'
import { models, RootModel } from './models'

export const store = init({
  models,
  plugins: [immerPlugin<RootModel>()],
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>

export const useStoreDispatch = useDispatch<Dispatch>
export const useStoreState: UseSelector<RootState> = useSelector
