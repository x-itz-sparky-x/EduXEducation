import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

let prismaClient: PrismaClient;

if (!process.env.DATABASE_URL) {
  console.warn(
    "\n⚠️ WARNING: DATABASE_URL is not defined in your environment variables.\n" +
    "⚠️ Prisma Client is disabled to prevent application crashes.\n" +
    "⚠️ Please configure your .env file to enable database features.\n"
  );

  // Create a safe proxy that prevents application crash but logs warnings on DB access
  prismaClient = new Proxy({} as PrismaClient, {
    get(target, prop) {
      if (prop === '$connect' || prop === '$disconnect') {
        return async () => { };
      }
      if (prop === '$transaction') {
        return async () => [];
      }
      return new Proxy(() => { }, {
        apply(target, thisArg, argumentsList) {
          console.warn(`⚠️ Prisma is disabled (no DATABASE_URL). Database operation 'db.${String(prop)}' was ignored.`);
          return Promise.resolve(null);
        },
        get(t, p) {
          // Allow chaining like db.user.findUnique() -> returns a function that resolves to null
          return new Proxy(() => { }, {
            apply() {
              console.warn(`⚠️ Prisma is disabled (no DATABASE_URL). Database operation 'db.${String(prop)}.${String(p)}' was ignored.`);
              return Promise.resolve(null);
            }
          });
        }
      });
    }
  });
} else {
  prismaClient =
    globalForPrisma.prisma ??
    new PrismaClient({
      log: ["warn", "error"],
    });

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prismaClient;
  }
}

export const db: any = prismaClient;
