import { Request, Response, Router } from "express";
import { result } from "../db/pool.js";

export const health = Router()

health.get("/", (_req:Request, res:Response) => {
    res.status(200).json({health: "good"})
})

health.get("/db", (_req:Request, res:Response) => {
    res.status(200).send(result)
})