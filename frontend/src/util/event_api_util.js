import axios from "axios";
<<<<<<< HEAD
export const createEvent = (event) => {
    return axios.post("/api/events/newEvent", event)
}
export const updateEvent = (event) => {
    return axios.patch(`/api/events/${event.id}`, event)
}
export const deleteEvent = (eventId) => {
    return axios.delete(`/api/events/${eventId}`)
}
export const fetchEvent = (eventId) => {
    return axios.get(`/api/events/${eventId}`)
}
=======

export const createEvent = (event) => {
    return axios.post("/api/events/newEvent", event)
}

export const updateEvent = (event) => {
    return axios.patch(`/api/events/${event.id}`, event)
}

export const deleteEvent = (eventId) => {
    return axios.delete(`/api/events/${eventId}`)
}

export const fetchEvent = (eventId) => {
    return axios.get(`/api/events/${eventId}`)
}

>>>>>>> origin/events_frontend
export const fetchEvents = () => {
    return axios.get(`/api/events/allEvents`)
}