import NextAuth from "next-auth"
// import db from '@/app/db'
import { authConfig } from "@/lib/auth";

// we add onlg google provider .
const handler = NextAuth(authConfig);

export { handler as GET, handler as POST }
