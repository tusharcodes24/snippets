"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

//update
export const updateSnippet=async(id:number,code:string)=>{
    await prisma.snippet.update({
        where:{
            id:id,
        },
        data:{
            code:code,
        }
    })
console.log("result-----------------",code);
    redirect(`/snippet/${id}`);
    
}


