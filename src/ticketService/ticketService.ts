import { Ticket, TicketPriority, TicketStatus } from "../types/types.js";
import { insertTicket, selectTicketById, selectTickets, updateDBStatus } from "../db/pool.js";

export async function listTickets(): Promise<Ticket[]> {
    return await selectTickets()
}

export async function addTickets(customer_id:number, category_id: number, title: string, description: string, priority: TicketPriority, status: TicketStatus): Promise<Ticket> {
    const ticket: Ticket = {
        customer_id,
        category_id,
        title,
        description,
        priority,
        status
    }
    await insertTicket(ticket)
    return ticket
}

export async function updateStatus(id: string, status:TicketStatus) {
    const ticket = await selectTicketById(id)
    updateDBStatus(id, status)    
    
}

// export async function updateAssignee(id: string, assignee:string) {
//     const tickets = await listTickets()
//     tickets.map(ticket => {
//         if(ticket.id == id){
//             ticket.assignee = assignee
//         }
//         return ticket
//     });
//     saveTicket(tickets)
//     return tickets.find(ticket => ticket.id == id)
// }

export async function showTicketById(id:string) {
    return await selectTicketById(id);
}