import CodeEditor from '@/components/ui/CodeEditor'
import { prisma } from '@/lib/prisma';
import React from 'react'


const editCodeSnippet = async({params}:{params:Promise<{id:string}>}) => {
   const id=(await params).id;
   const Intid=parseInt(id);
    const snippet=await prisma.snippet.findUnique({
        where:{
            id:Intid,
        }
    });

    if(!snippet){
        return <div>Snippet not Found!</div>
    }
  return (
    <div className='bg-gray-300 h-screen w-screen'>
        <CodeEditor snippet={snippet}></CodeEditor>
    </div>
  )
}

export default editCodeSnippet