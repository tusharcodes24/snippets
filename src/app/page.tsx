import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
// export const dynamic='force-dynamic';     //one way to make this page dynamic

//export const revalidate=0; //another way to make this page dynamic, this will revalidate the page on every request
//this is not recommended for production use, as it can lead to performance issues

// on demand caching is a preffered way

export default async function Home() {

    const snippets=await prisma.snippet.findMany();
  
  return (
   <div className="p-5 m-3 bg-gray-100 h-screen">
   <div className="flex justify-between mx-5">
     <h1 className=" font-extrabold text-3xl">Home</h1>
      <Link href={"/snippet/new"}><Button>New</Button></Link>
   </div>
  
   
    <div className="mx-5 font-bold mt-9 text-xl">Snippets</div>
   
   {
    snippets.map((snippet)=>{
   return(
     <div key={snippet.id} className="flex m-4 pr-8 w-full justify-between bg-gray-200 rounded-md py-3 pl-2">
      <h1 className="">{snippet.title}</h1>
     <Link href={`/snippet/${snippet.id}`}><Button variant={'link'}>View</Button></Link>
    </div> 
   )
    })
   }

   </div>

  );
}
