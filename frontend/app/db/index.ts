import 'dotenv/config'
import { PrismaClient } from "@/lib/generated/prisma/client";
import {PrismaPg} from '@prisma/adapter-pg'


const connectionString = `${process.env.DATABASE_URL}`

const PrimaClientSingleton = () => {
    const adapter = new PrismaPg({ connectionString })
    return new PrismaClient({adapter});
}

type PrimaClientSingleton = ReturnType<typeof PrimaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
    prisma: PrimaClientSingleton | undefined;
}

const prisma = globalForPrisma.prisma ?? PrimaClientSingleton();

export default prisma;

if(process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma