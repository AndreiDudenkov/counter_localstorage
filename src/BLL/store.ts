
import {counterReducer} from './counter-reducer';
import {combineReducers, createStore} from 'redux';
import {loadState, saveState} from '../utils/localStorage-utils';
import {setReducer} from './set-reducer';
import {countMessageReducer} from './countMessage-reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    set: setReducer,
    message: countMessageReducer
})


export const store = createStore(rootReducer, loadState())

store.subscribe(()=>{
    saveState({
        counter: store.getState().counter,
        set: store.getState().set,
        message: store.getState().message
    })
})

export type AppStateType = ReturnType<typeof rootReducer>
