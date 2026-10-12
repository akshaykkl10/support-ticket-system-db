// import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
// // import { saveTicket, loadTickets,  } from "../src/ticketRepo/ticketRepo.js";
// import { addTickets, listTickets, updateStatus } from "../src/ticketService/ticketService.js";
// import { deleteTicket, insertTicket, selectTicketById, selectTickets, updateDBStatus } from "../src/db/pool.js";

// vi.mock("../src/db/pool.js", () => {
//     return{
//         saveTicket: vi.fn(),
//         loadTickets: vi.fn()
//     }
// })

// // describe("Services, Ticket system", () => {
    
// //     beforeEach(() => {
// //         vi.clearAllMocks()
// //         vi.mocked(loadTickets).mockResolvedValue([{
// //             id: "1",
// //             title: "Test Ticket", 
// //             description: "skip problem",
// //             priority: "low",
// //             status: "open",
// //             assignee: "ak" 
// //         }])
// //     })
    
// //     vi.mocked(saveTicket).mockResolvedValue()
// //     it("lists all tickets", async() => {
// //         const tickets = await listTickets()
// //         expect(tickets).toStrictEqual([{
// //             id: "1",
// //             title: "Test Ticket", 
// //             description: "skip problem",
// //             priority: "low",
// //             status: "open",
// //             assignee: "ak"  
// //         }])
// //     })
// //     it("Saves tickets", async () => {
// //         const ticket = await addTickets("title", "description", "low", "closed", "ask")
// //         expect(ticket).toMatchObject({
// //                 title:"title",
// //                 description: "description",
// //                 priority: "low",
// //                 status: "closed",
// //                 assignee: "ask"
// //         })
// //     })
// //     it("updates the status of a ticket", async () => {
// //         const ticket = await updateStatus("1", "closed")
// //         console.log(ticket, "ticket update")
// //         expect(ticket).toMatchObject({
// //             id: "1",
// //             title: "Test Ticket", 
// //             description: "skip problem",
// //             priority: "low",
// //             status: "closed",
// //             assignee: "ak" 
// //         })
// //     })
// //     it("updates the assignee of a ticket", async () => {
// //         const ticket = await updateAssignee("1", "AK")
// //         console.log(ticket, "ticket update")
// //         expect(ticket).toMatchObject({
// //             id: "1",
// //             title: "Test Ticket", 
// //             description: "skip problem",
// //             priority: "low",
// //             status: "open",
// //             assignee: "AK" 
// //         })
// //     })
// // })

