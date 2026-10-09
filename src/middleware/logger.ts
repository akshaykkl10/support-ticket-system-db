import { NextFunction, Request, Response } from "express";


export function logger(req:Request, _res: Response, next: NextFunction): void{
    console.log(`METHOD: ${req.method} PATH :${req.path}`)
    next()
}