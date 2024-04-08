import {INC} from '../types/counterTypes'

export const increment = () => {
    return {type: INC}

}

export const decrement = () => ({type: DEC});
export const reset = () => ({type: RESET});
