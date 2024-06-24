import { PrismaClient } from "@prisma/client";


// Étend l'objet global pour inclure la variable cachedPrisma
// Sinon avec juste var cachedPrisma , on redeclare la variable a chaque fois que le
// module est rechargé
declare global{
    var cachedPrisma : PrismaClient
}
let prisma : PrismaClient

if(process.env.NODE_ENV == "production"){
    prisma = new PrismaClient()
}else{
    if(!global.cachedPrisma){
        global.cachedPrisma = new PrismaClient()
    }
    prisma = global.cachedPrisma
}
export const db = prisma

