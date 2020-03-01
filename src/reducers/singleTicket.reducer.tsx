import { 
    CREATE_TICKET_START, 
    CREATE_TICKET_SUCCESS, 
    CREATE_TICKET_FAIL,

    EDIT_TICKET_START, 
    EDIT_TICKET_SUCCESS, 
    EDIT_TICKET_FAIL,

    CLAIM_TICKET_START, 
    CLAIM_TICKET_SUCCESS, 
    CLAIM_TICKET_FAIL,

    DELETE_TICKET_START, 
    DELETE_TICKET_SUCCESS, 
    DELETE_TICKET_FAIL

} from '../actions/singleTicket.action'

import { singleTicketState } from '../states'

export const singleTicketReducer = (state: Object | undefined = singleTicketState, action: any) => {

    switch(action.type){
        default:
            return state
    }
}