import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices'
import { User } from '@/models'

export default interface AppStore {
  user: User
}

export const store = configureStore<AppStore>({
  reducer: {
    user: userReducer,
  },
})
