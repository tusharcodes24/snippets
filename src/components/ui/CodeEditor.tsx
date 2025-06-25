"use client"
import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import type {Snippet} from '@/generated/prisma/client'
import { Button } from './button'
import { updateSnippet } from '@/actions';

const CodeEditor = ({code}:Snippet) => {
    const [val, setVal] = useState(code.code);

    const handleChangeEvent=(value:string | undefined)=>{
        setVal(value);
    }
    const updateSnippetAction=updateSnippet.bind(null,code.id , val)
  return (
    <div className=' mx-5 py-6'>

        <form action={updateSnippetAction}
         className='flex justify-between mb-12  '>
            <h1 className='font-bold text-3xl'>Your Code Editor:</h1>
            <Button type='submit'>Save</Button>
        </form>
        <Editor 
        height="70vh"
        defaultLanguage="javascript"
        defaultValue={val}
        theme='vs-dark'
        onChange={handleChangeEvent}
      />
    </div>
)}

export default CodeEditor