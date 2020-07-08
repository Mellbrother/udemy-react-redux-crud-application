import { INCLEMENT, DECREMENT } from '../actions'

const initialState = { value: 0 }

export default (state = initialState, action) => {
	switch (action.type) {
		case INCLEMENT:
			return { value: state.value + 1 }
		case DECLEMENT:
			return { value: state.value - 1 }
		default:
			return state
	}
}