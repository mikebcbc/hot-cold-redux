import * as actions from '../actions';

const initialState = {
	guesses: [],
	feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
	showInfoModal: false
}

export const guessReducer = (state=initialState, action) => {
	if (action.type === actions.SHOW_MODAL) {
		return Object.assign({}, state, {
			showInfoModal: action.showInfoModal
		});
	}
	else if (action.type === actions.NEW_GAME) {
		return Object.assign({}, state, {
			guesses: action.resetState.guesses,
			feedback: action.resetState.feedback,
			correctAnswer: action.resetState.correctAnswer
		})
	}
	else if (action.type === actions.ADD_GUESS) {
		return Object.assign({}, state, {
			feedback: action.feedback,
      guesses: [...state.guesses, action.guess]
		})
	}
	else if (action.type === actions.INVALID_GUESS) {
		return Object.assign({}, state, {
			feedback: action.feedback
		})
	}
	return state;
}