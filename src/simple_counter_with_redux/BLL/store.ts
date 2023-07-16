
import {counterReducer} from './counter-reducer';
import {combineReducers, createStore} from 'redux';
import {loadState, saveState} from '../utils/localStorage-utils';

const rootReducer = combineReducers({
    counter: counterReducer
})


export const store = createStore(rootReducer, loadState())

store.subscribe(()=>{
    saveState({
        counter: store.getState().counter
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>
