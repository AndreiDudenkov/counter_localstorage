import {useSelector} from 'react-redux';
import {AppStateType} from './store';

const initialState = {
    value: 0
}
type InitialStateType = typeof initialState


export const counterReducer = (state: InitialStateType = initialState, action: CounterActionType): InitialStateType => {
    switch (action.type) {
        case 'INC-COUNTER':
        return {
            ...state, value: state.value + 1
        }
        case 'SET-RESET-COUNTER':
        return {
            ...state, value: action.valueMin
        }

        default: return state
    }
}

export const incCounterAC = ()=>{
    return {type:'INC-COUNTER'} as const
}
export const setResetCounterAC = (valueMin:number)=>{
    return {type:'SET-RESET-COUNTER', valueMin} as const
}

type IncCounterActionType = ReturnType<typeof incCounterAC >
type SetResetCounterActionType = ReturnType<typeof setResetCounterAC >
type CounterActionType = IncCounterActionType | SetResetCounterActionType