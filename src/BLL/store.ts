import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

store.subscribe(()=>{
    localStorage.setItem('counterMinInputValue', JSON.stringify(minInputValue))

})