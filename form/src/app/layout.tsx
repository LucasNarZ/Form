import './global.css'

export const metadata = {
  title:"Developer Form",
  description:"Form for developers and a dashboard for data.",
  keywords:"dev developers form front-end search",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body >{children}</body>
    </html>
  )
}
