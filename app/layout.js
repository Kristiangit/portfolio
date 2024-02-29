import "./globals.css"

export const metadata = {
  title: 'Kristian Numme',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
