import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ScoreState {
	score: number,
	allTimeScore: number,
	scorePerSecond: number,
	scorePerClick: number
}

const initialState: ScoreState = {
	score: 0,
	allTimeScore: 0,
	scorePerSecond: 1,
	scorePerClick: 1,
}

const setDocumentTitle = ( score: number ) => {
	document.title = score.toFixed(0).toString();
}

export const counterSlice = createSlice({
	name: 'score',
	initialState,
	reducers: {
		increment: (state) => {
			state.score += state.scorePerClick;
			state.allTimeScore += state.scorePerClick;
			setDocumentTitle(state.score);
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.score += action.payload;
			state.allTimeScore += action.payload;
			setDocumentTitle(state.score);
		},
		addToScorePerSecond: (state, action: PayloadAction<number>) => {
			state.scorePerSecond += action.payload;
		},
		addToScorePerClick: (state, action: PayloadAction<number>) => {
			state.scorePerClick += action.payload;
		}
	},
})

export const {
	increment,
	incrementByAmount,
	addToScorePerSecond,
	addToScorePerClick
} = counterSlice.actions

export default counterSlice.reducer