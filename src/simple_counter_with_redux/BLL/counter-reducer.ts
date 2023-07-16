

const initialState = {
    value: 0
}
type InitialStateType = typeof initialState


export const counterReducer = (state: InitialStateType = initialState , action: IncCounterActionType): InitialStateType => {
    switch (action.type) {
        case 'INC-COUNTER':
        return {
            ...state, value: state.value + 1
        }

        default: return state
    }
}

export const incCounterAC = ()=>{
    return {type:'INC-COUNTER'} as const
}

type IncCounterActionType = ReturnType<typeof incCounterAC >