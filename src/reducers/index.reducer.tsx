import { combineReducers } from 'redux'

// import { registerReducer } from './register.reducer'
import { singleTicketReducer } from './singleTicket.reducer'
import { ticketsReducer } from './tickets.reducer'


export const rootReducers = combineReducers({
    // registerReducer,
    singleTicketReducer,
    ticketsReducer
})