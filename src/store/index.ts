import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import pokemonsReducer from './pokemons/pokemons'
import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemons: pokemonsReducer
    },
})

// Infer types 'RootState' and 'AppDispatch'
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()