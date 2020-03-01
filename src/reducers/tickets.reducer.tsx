import { 
    GET_TICKETS_START, 
    GET_TICKETS_SUCCESS, 
    GET_TICKETS_FAIL 
} from "../actions/tickets.action"

export const initialState:Tickets = {
    tickets: []
}

export const ticketsReducer = (state: Object = initialState, action: any) => {
    switch(action.type){
        default:
            return state
    }
}