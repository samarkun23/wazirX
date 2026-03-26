import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
    return new PrismaClient();
}

type prismaClientSingleton = ReturnType< typeof prismaClientSingleton>;

const globleForPrisma = globalThis as unknown as {
    prisma: prismaClientSingleton | undefined;
}

const prisma = globleForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if( process.env.NODE_ENV !== 'production') globleForPrisma.prisma = prisma;