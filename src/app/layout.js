
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'


const montserrat = Montserrat({ subsets: ['latin'], })

export const metadata = {
  title: 'Azizul',
  description: 'Created by Alif',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={""}>
      <head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FW3HW1BQCW"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-FW3HW1BQCW');
        </script>
      </head>
      <body className={`${montserrat.variable} bg-light w-full min-h-screen dark:bg-dark `}>
        
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
