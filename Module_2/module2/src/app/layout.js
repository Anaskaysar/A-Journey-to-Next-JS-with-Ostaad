import AppNav from '@/components/AppNav';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <AppNav/>
        {children}
      </body>
    </html>
  )
}
