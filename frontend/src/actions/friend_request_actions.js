import * as FriendRequestAPIUtil from "../util/event_api_util";
export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const RECEIVE_REQUESTS = "RECEIVE_REQUESTS";
export const RECEIVE_FRIEND_ERRORS = "RECEIVE_FRIEND_ERRORS";


const receiveRequest = (request) => ({
    type: RECEIVE_REQUEST,
    request
})

const receiveRequests = (requests) => ({
    type: RECEIVE_REQUESTS,
    requests
})



const receiveFriendErrors = (errors) => ({
    type: RECEIVE_EVENT_ERRORS,
    errors 
})


export const createFriendRequest = (friendId) => dispatch => (
    FriendRequestAPIUtil.createFriendRequest(friendId).then(
        (request) => dispatch(receiveRequest(request.data)),
        (err) => dispatch(receiveFriendErrors(err.response.data))
    )
)

export const fetchFriendRequests = () => dispatch => (
    FriendRequestAPIUtil.receiveRequests().then(
        (requests) => dispatch(receiveRequests(requests.data)),
        (err) => dispatch(receiveFriendErrors(err.response.data))
    )
)


