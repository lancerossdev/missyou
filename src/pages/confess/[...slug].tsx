import { useRouter } from "next/router";
import { GetServerSideProps, NextPage } from "next";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import Head from "next/head";
import Copy from "@/components/copy";
import messages from "@/content/confess.json";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  query: string;
  message: string;
}

const QueryPage: NextPage<Props> = ({ query, message }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{query}, may sasabihin sana ako.</title>
        <meta charSet="UTF-8" />
        <meta name="title" content={`${query}, may sasabihin sana ako.`} />
        <meta name="og:title" content={`${query}, may sasabihin sana ako.`} />
        <meta name="description" content="Here's a confession for someone! Site by @lancerossdev" />
        <meta name="og:description" content="Here's a confession for someone! Site by @lancerossdev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark" />
        <script async defer src="https://analytics.umami.is/script.js" data-website-id="7403ac7c-3c93-47f7-aac6-56ae3aa70ea5"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`bg-zinc-900 text-white flex flex-col items-center min-h-screen justify-center relative ${inter.className}`}>
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
          Crush kita, <span className="capitalize">{query}.</span>
        </h1>
        <p className="max-w-md md:max-w-2xl text-lg px-4 pt-10 pb-20 lg:pb-10 text-center">{message}</p>
        <Footer author="Lance Ross" twitter="lancerossdev" />
        <Copy />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  // Combine the slug segments into a single string with slashes between them
  const query = ((params?.slug as string[]) ?? []).join("/");

  // Get a random message from the messages array
  const randomIndex = Math.floor(Math.random() * messages.messages.length);
  const message = messages.messages[randomIndex];

  return {
    props: {
      query,
      message,
    },
  };
};

export default QueryPage;
