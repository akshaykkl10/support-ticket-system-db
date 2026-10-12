import { Pool } from "pg";
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USER } from "../utils/env.js";
import { Ticket, TicketStatus } from "../types/types.js";

export const client: Pool = new Pool({
    host: DATABASE_HOST,
    port:DATABASE_PORT,
    database: DATABASE_NAME,
    user: DATABASE_USER,
    password:DATABASE_PASSWORD
})

// await client.connect()
export const result = await client.query("select * from ticket;")

export async function selectTickets(){
    const result = await client.query(`SELECT * FROM ticket;`)
    return result.rows
}
export async function selectTicketById(id: string){
    const result = await client.query(`SELECT * FROM ticket WHERE id = $1;`,
        [id]
    )
    return result.rows as Ticket[]
}
export async function insertTicket(ticket: Ticket){
    const result = await client.query(`INSERT INTO ticket (customer_id, category_id, title, description, priority, status)
        VALUES ($1, $2, $3, $4, $5, $6);`,
        [ticket.customer_id, ticket.category_id, ticket.title, ticket.description, ticket.priority, ticket.status]
    )
    return result.rows
}
export async function updateDBStatus(id: string, status: TicketStatus){
    const result = await client.query(`UPDATE ticket
        SET status = $1
        WHERE id = $2;`,
    [status, id])
    return result.rows
}
export async function deleteTicket(id: string){
    const result = await client.query(`DELETE FROM ticket
        WHERE id = $1`,
    [id])
    console.log(result)
    return result.rows
}




// await client.end()