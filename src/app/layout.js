import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todos App',
  description: 'Todos App Create With Love',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-slate-100'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
