import Head from "next/head";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Input from "@/components/input";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Miss You</title>
        <meta charSet="UTF-8" />
        <meta name="title" content="Miss You by Lance Ross" />
        <meta name="og:title" content="Miss You by Lance Ross" />
        <meta name="description" content="A site where you can generate a confession and short message to someone you love." />
        <meta name="og:description" content="A site where you can generate a confession and short message to someone you love." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark" />
        <script async defer src="https://analytics.umami.is/script.js" data-website-id="7403ac7c-3c93-47f7-aac6-56ae3aa70ea5"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`bg-zinc-900 text-white flex flex-col items-center min-h-screen justify-center relative ${inter.className}`}>
        <h1 className="text-3xl sm:text-4xl font-bold">Miss You</h1>
        <p className="max-w-md md:max-w-2xl text-lg px-4 pt-10 pb-10 lg:pb-10 text-center">A basic Next.js app where you can generate a confession and short message to someone you love.</p>
        <div className="max-w-md md:max-w-2xl text-lg px-4 text-center">
          <p>Just enter their name on the link of someone you love and you can pick if you want to confess or just tell him or her that you miss them.</p>
          <Input />
        </div>
        <Footer author="Lance Ross" twitter="lancerossdev" />
      </div>
    </>
  );
}
