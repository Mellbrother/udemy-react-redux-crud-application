import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'


const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispach => {
	const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
	dispach({ type: READ_EVENTS, response })

}

export const postEvent = values => async dispach => {
	const response = await axios.post(`${ROOT_URL}/events/${QUERYSTRING}`, values)
	dispach({ type: CREATE_EVENT, response })

}