import './global.css';
import SiteNavBar from '@/components/SiteNavBar';
import SiteFooter from '@/components/SiteFooter';
import NextTopLoader from 'nextjs-toploader';


// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: 'Home',
  }
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body lang='en' >
        <NextTopLoader color="#269669" height={3} speed={200} /> 
        <SiteNavBar/>
        {children}
        <SiteFooter/>
      </body>
    </html>
  )
}
