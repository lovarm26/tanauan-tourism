import './globals.css'

export const metadata = {
  title: 'Discover Tanauan Leyte',
  description: 'Tourism Website'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
