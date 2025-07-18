import { deleteSnippet } from '@/actions';
import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import React from 'react'

const snippetDetailPage = async({params}:{params: Promise<{ id: string }>}) => {
    const id=parseInt((await params).id);
    const snippet=await prisma.snippet.findUnique({
        where: {
            id: id,
        }
    });

    if(!snippet){
        return <div>Snippet not found</div>
    }

const deleteSnippetAction=deleteSnippet.bind(null,snippet.id);


  return (
    <div className='w-screen m-2 p-5 '>
        <div className='flex w-full justify-between px-5 '>

             <div className='font-bold text-2xl'>
                {snippet.title}
             </div>
        <div>
            <form action={deleteSnippetAction}>
            <Link href={`/snippet/${snippet.id}/edit`}><Button>Edit</Button></Link>
            
                <Button variant='destructive' className='ml-2'>Delete</Button>
            </form>
            
        </div>
        </div>
        <pre className='px-5 mt-9 bg-gray-200 p-6 rounded-md'>
            <code>{snippet.code}</code>
        </pre>

        <Button className='mt-5'>
            <Link href={'/'}>Back to Home</Link>
        </Button>
        
    </div>
  )
}

export default snippetDetailPage


export const generateStaticParams=async()=>{
    const snippets=await prisma.snippet.findMany();
    return snippets.map((snippet)=>{
        return {
            id:snippet.id.toString(),
        }
    })
}