import {configureStore, EnhancedStore} from '@reduxjs/toolkit'
import rootReducer, {RootState} from '../reducers/rootReducer'
import OfflineDataManager from 'helpers/OfflineDataManager'

let store: EnhancedStore

function buildStore(initialState: RootState) {
  store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  })

  store.subscribe(() => {
    OfflineDataManager.saveState(store.getState())
  })

  return store
}

const dispatch = (params: any) => {
  store.dispatch(params)
}

export {buildStore, dispatch}
