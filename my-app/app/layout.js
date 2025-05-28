import { Geist } from 'next/font/google'

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './styles.module.css';

import '../styles/global.css';

const geist = Geist({
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${styles.container} ${geist.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
