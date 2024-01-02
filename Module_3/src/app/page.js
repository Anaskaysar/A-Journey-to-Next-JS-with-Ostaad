import Image from "next/image";


export default function Home() {
  return (
    <>
      <h1>This is Home Page</h1>

      {/* {process.env.API_KEY} */}

      <Image 

        alt='laptop-img'
        width={1000}
        height={720}
        src='https://media.wired.com/photos/64daad6b4a854832b16fd3bc/master/w_2240,c_limit/How-to-Choose-a-Laptop-August-2023-Gear.jpg'
        layout="responsive"
      />
    </>
  )
}
