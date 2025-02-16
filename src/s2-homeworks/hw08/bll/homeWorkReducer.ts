import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const copyState = [...state]
            if(action.payload === 'up') {
                copyState.sort((a, b) => a.name > b.name ? 1 : -1);
            }
            if(action.payload === 'down') {
                copyState.sort((a, b) => a.name < b.name ? 1 : -1);
            }
            return copyState

            // need to fix
        }
        case 'check': {

            return state.filter(u => u.age >= 18) // need to fix
        }
        default:
            return state
    }
}
