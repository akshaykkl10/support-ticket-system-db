import { loadEnvFile } from "node:process";

loadEnvFile()
export const PORT: number = Number(process.env.PORT)
export const DATABASE_HOST = process.env.DATABASE_HOST as string
export const DATABASE_PORT = Number(process.env.DATABASE_PORT)
export const DATABASE_NAME = process.env.DATABASE_NAME as string
export const DATABASE_USER = process.env.DATABASE_USER as string
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD as string
