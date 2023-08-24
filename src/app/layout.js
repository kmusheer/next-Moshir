 import Header from './components/Header'
import Nav from './components/Nav'
import TopLeftImg from './components/TopLeftImg'
import './globals.css'
import { Sora } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['100','200','300', '400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'Mohd Moshir Khan',
  description: 'Portfolio Mohd Moshir Khan',
}


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={` ${sora.className} page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative `}>
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
        </body>
    </html>
  )
}
