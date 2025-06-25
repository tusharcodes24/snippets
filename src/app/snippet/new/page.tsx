import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

import React from 'react'

const newSnippetPage = () => {
    async function createSnippet(formData: FormData){
        "use server"
        const title = formData.get('title') as string;
        const code = formData.get('code') as string;

        const snippet=await prisma.snippet.create({
        data: {
            title: title,
            code: code,
        }
        
    });

    console.log(snippet);
    redirect('/');
    }
   
    

  return (
    <form className=' p-6 m-6' action={createSnippet}>
        <div >
            <Label className=' font-bold text-2xl'>Title</Label>
            <Input type='text' name='title' id='title'></Input>
        </div>

         <div >
            <Label className=' font-bold text-2xl '>Code</Label>
            <Textarea name='code' id='code'></Textarea> 
        </div>

        <Button type='submit' className='mt-3'>New</Button>
        
    </form>
  )
}

export default newSnippetPage