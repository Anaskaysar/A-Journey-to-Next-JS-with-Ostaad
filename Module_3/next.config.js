/** @type {import('next').NextConfig} */
const nextConfig = {
   // env:{
   //  API_KEY : "xyz-abc-pqr"
   // }
   images:{
      domains:['media.wired.com']
   }

   // async headers (){
   //    return[
   //       {
   //          source:'/:path*', headers:[{key:'x-index', value:'123456789'}]
   //       }
   //    ]

   // }
} 
module.exports = nextConfig
