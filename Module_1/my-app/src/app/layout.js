import AppNav from "@/component/AppNav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppNav/>
        {children}
        </body>
    </html>
  )
}
