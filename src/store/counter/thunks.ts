import { initCounterState } from "./counterSlice"

export const getCounter = () => {
    return async ( dispatch: any, getState: any) => {
        const url = 'http://localhost:3000/api/counter'
        const data = await fetch(url)
                            .then( res => res.json())

        dispatch(initCounterState(data.counter))  
    }
}