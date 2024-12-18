import { PrismaClient } from "@prisma/client";


export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = db;


//* globalThis.prisma is checking if the prisma client already exists in the global context.
//? globalThis is a global object that’s accessible everywhere in your code, and it ensures that you are using a single shared instance of Prisma across your app.
//* globalThis.prisma: If this already exists (maybe from a previous request or execution), it reuses that instance.
//? new PrismaClient(): If globalThis.prisma doesn't exist (such as during the first execution), it creates a new Prisma client.

//! if(process.env.NODE_ENV !== "production") globalThis.prisma = db;
//* This line ensures that in non-production environments (i.e., development or testing), the Prisma client (db) is stored globally in globalThis.prisma.
//? In development mode, you typically want to reuse the same Prisma client instance across different files or requests. This helps to prevent multiple instances of Prisma from being created, which could lead to database connection issues.
//! In production, this line does not run, so Prisma will be instantiated normally and not stored globally. This is done because you typically want a new instance of the client in production for better performance and to handle scaling effectively.


//! Why is this Useful?
//* Efficiency in Development:
//? In development, if you are hot-reloading or restarting the server frequently (e.g., with nodemon), you don’t want Prisma to keep creating new database connections every time. By storing it globally (using globalThis), the same Prisma instance can be reused across your application. This makes the app faster and more efficient during development.
//* Clean Production Environment:
//? In production, having a single global instance can lead to problems with concurrency, as the app might be running in multiple processes or containers. By not using globalThis in production, each instance of the app can safely create its own Prisma client, ensuring proper isolation and stability.