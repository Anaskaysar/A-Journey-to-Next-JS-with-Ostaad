'use client'

import Menu from "@/components/Menu";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();
  const goto = () =>{
    router.push('/products?name=mobile&price=6000');
  }
  return (
    <>
      <Menu/>
      <h1>This is Home Page</h1>
      <button onClick={goto} > Click Here</button>
    </>
  )
}
