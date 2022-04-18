import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Header } from "./Header";

const Layout = ({ children, title = "Coin Camp", global }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="w-full flex justify-center">
        <Header global={global} />
      </header>
      <main className="max-w-6xl w-full h-full flex flex-col items-center justify-center py-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
