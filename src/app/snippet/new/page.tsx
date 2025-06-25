"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import * as actions from '@/actions'

import React, { useActionState } from 'react'

const newSnippetPage = () => {
    
    const [formStateData,createSnippet]=useActionState(actions.createSnippet,{message:""});

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
        {formStateData.message && <div className='bg-red-300 border-1 border-red-600 p-3 rounded-xs mt-3'>{formStateData.message}</div>}
        <Button type='submit' className='mt-3'>New</Button>
        
    </form>
  )
}

export default newSnippetPage;