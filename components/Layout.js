import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Header } from './Header';

const Layout = ({ children, title = "Coin Camp" }) => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='max-w-5xl w-full flex justify-center'>
        <Header/>
      </header>
      <main className='max-w-5xl w-full h-full flex flex-col items-center justify-center bg-[#242426] rounded-3xl p-4'>{children}</main>
    </div>
  );
};

export default Layout;