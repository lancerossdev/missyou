import { useRouter } from "next/router";
import { GetServerSideProps, NextPage } from "next";
import Footer from "@/components/footer";
import Head from "next/head";

interface Props {
  query: string;
}

const QueryPage: NextPage<Props> = ({ query }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Miss na kita, {query}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center min-h-screen justify-center relative">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Miss na kita, <span className="capitalize">{query}.</span>
        </h1>
        <p className="max-w-md md:max-w-2xl text-lg px-4 pt-10 pb-20 lg:pb-10 text-center">
          Namimiss na talaga kita. Minu-minuto at oras-oras kang sumasagi sa isip ko araw-araw. Hindi ko masabi kung gaano kita kamahal, pero sana nararamdaman mo ito. Sa bawat minuto na gusto
          kitang tignan, mas lalo kong nararamdaman kung gaano kita namimiss at kamahal.
        </p>
        <Footer author="Lance Ross" twitter="lancerossdev" />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  // Combine the slug segments into a single string with slashes between them
  const query = ((params?.slug as string[]) ?? []).join("/");

  return {
    props: {
      query,
    },
  };
};

export default QueryPage;