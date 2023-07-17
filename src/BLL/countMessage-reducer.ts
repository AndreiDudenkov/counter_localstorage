
const initialState = {
   message: ''
}
type InitialStateType = {
    message: string
}


export const countMessageReducer = (state: InitialStateType = initialState, action: MessageActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-MESSAGE':
            return {
                ...state, message: action.message
            }
        default:
            return state
    }
}

export const setCounterValueAC = (message:string)=> {
    return {type: 'SET-MESSAGE', message} as const
}



type SetMessageActionType = ReturnType<typeof setCounterValueAC >

type MessageActionType = SetMessageActionType
