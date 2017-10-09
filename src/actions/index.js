export const SHOW_MODAL = 'SHOW_MODAL';
export const showModal = showInfoModal => ({
	type: SHOW_MODAL,
	showInfoModal
})

export const NEW_GAME = 'NEW_GAME';
export const newGame = resetState => ({
	type: NEW_GAME,
	resetState
})

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = (guess, feedback) => ({
	type: ADD_GUESS,
	guess,
	feedback
})

export const INVALID_GUESS = 'INVALID_GUESS';
export const invalidGuess = feedback => ({
	type: INVALID_GUESS,
	feedback
})