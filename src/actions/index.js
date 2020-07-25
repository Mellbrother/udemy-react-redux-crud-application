import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
export const CREATE_EVENTS = 'CREATE_EVENTS'
export const DELETE_EVENTS = 'DELETE_EVENTS'
export const UPDATE_EVENTS = 'UPDATE_EVENTS'


const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispach => {
	const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
	dispach({ type: READ_EVENTS, response })

}

export const postEvent = values => async dispach => {
	const response = await axios.post(`${ROOT_URL}/events/${QUERYSTRING}`, values)
	dispach({ type: CREATE_EVENTS, response })

}

export const putEvent = values => async dispach => {
	const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
	dispach({ type: UPDATE_EVENTS, response })
}

export const getEvent = id => async dispach => {
	console.log("aaa")
	const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
	dispach({ type: READ_EVENT, response })
}

export const deleteEvent = id => async dispach => {
	await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
	dispach({ type: DELETE_EVENTS, id })

}