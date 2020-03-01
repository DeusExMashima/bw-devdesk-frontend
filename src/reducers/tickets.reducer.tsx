import { 
    GET_TICKETS_START, 
    GET_TICKETS_SUCCESS, 
    GET_TICKETS_FAIL 
} from "../actions"

import { ticketListState } from '../states'

export const ticketsReducer = (state: Object = ticketListState, action: any) => {
    switch(action.type){
        default:
            return state
    }
}