"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
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
    revalidatePath(`/snippet/${id}`)
    redirect(`/snippet/${id}`);
    
}


//delete

export const deleteSnippet=async(id:number)=>{
    await prisma.snippet.delete({
        where:{
            id:id,
        }
    })
    revalidatePath('/')
    redirect('/');
}


//create 
    export async function createSnippet(prevState:{message:string}, formData: FormData){
        "use server"
        const title = formData.get('title');
        const code = formData.get('code');

        if(!title || typeof title!=='string'){//added typeof check to ensure title is a string
            return {
                message: "Title is required",}
        }

          if(!code || typeof code!=='string'){
            return {
                message: "Code is required",}
        }

        const snippet=await prisma.snippet.create({
        data: {
            title: title,
            code: code,
        }
        
    });

    console.log(snippet);

    revalidatePath('/')
    redirect('/');
    }