import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import List from "../components/List";
import requests from "../request";

export async function getServerSideProps(context) {
  const [
    data,
    netflixOriginals,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);
  //const data = await fetch(requests.fetchTrending).then(res => res.json());
  //const netflixOriginals = await fetch(requests.fetchNetflixOriginals).then(res => res.json());
  //const data = await res.json();
  //console.log(netflixOriginals);

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      data,
      netflixOriginals,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries,
    }, // will be passed to the page component as props
  };
}

export default function Home({
  data,
  netflixOriginals,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}) {
  //console.log(data);
  //console.log(process.env.API_KEY)
  //console.log(netflixOriginals)

  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)]);
  }, [data.results]);

  //console.log(movie);

  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/netflixSymbol.svg" />
      </Head>

      <div className="text-white">
        <Navbar />
        <Banner movie={movie} />
        <div className='pb-10'>
          <List name="Trending" list={data.results} />
          <List name="Netflix Originals" list={netflixOriginals.results} />
          <List name="Comedy Movies" list={comedyMovies.results} />
          <List name="horrorMovies" list={horrorMovies.results} />
          <List name="RomanceMovies" list={romanceMovies.results} />
          <List name="Documentaries" list={documentaries.results} />
        </div>
      </div>
    </>
  );
}
