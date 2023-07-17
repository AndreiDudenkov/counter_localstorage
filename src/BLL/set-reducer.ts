
const initialState = {
    valueMin: 0,
    valueMax: 5
}
type InitialStateType = typeof initialState


export const setReducer = (state: InitialStateType = initialState, action: SetValueActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-MIN-VALUE':
            return {
                ...state, valueMin: action.valueMin
            }
            case 'SET-MAX-VALUE':
            return {
                ...state, valueMax: action.valueMax
            }

        default: return state
    }
}

export const setMinValueAC = (valueMin:number)=>{
    return {type:'SET-MIN-VALUE', valueMin} as const
}
export const setMaxValueAC = (valueMax:number)=>{
    return {type:'SET-MAX-VALUE', valueMax} as const
}


type SetMinValueActionType = ReturnType<typeof setMinValueAC >
type SetMaxValueActionType = ReturnType<typeof setMaxValueAC >

type SetValueActionType = SetMinValueActionType | SetMaxValueActionType
