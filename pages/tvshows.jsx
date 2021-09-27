import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import List from "../components/List";
import tvShowsRequests from "../tvShowsRequest";

export async function getServerSideProps(context) {
    const [
        data,
        actionAdventureShows,
        animationShows,
        comedyShows,
        crimeShows,
        documentaryShows,
        dramaShows,
        familyShows,
        kidsShows,
        mysteryShows,
        newsShows,
        realityShows,
        sciFiFantasyShows,
        soapShows,
        talkShows,
        warPoliticsShows,
        westernShows,
    ] = await Promise.all([
        fetch(tvShowsRequests.fetchTrending).then((res) => res.json()),
        fetch(tvShowsRequests.fetchActionAdventure).then((res) => res.json()),
        fetch(tvShowsRequests.fetchAnimation).then((res) => res.json()),
        fetch(tvShowsRequests.fetchComedy).then((res) => res.json()),
        fetch(tvShowsRequests.fetchCrime).then((res) => res.json()),
        fetch(tvShowsRequests.fetchDocumentry).then((res) => res.json()),
        fetch(tvShowsRequests.fetchDrama).then((res) => res.json()),
        fetch(tvShowsRequests.fetchFamily).then((res) => res.json()),
        fetch(tvShowsRequests.fetchKids).then((res) => res.json()),
        fetch(tvShowsRequests.fetchMystery).then((res) => res.json()),
        fetch(tvShowsRequests.fetchNews).then((res) => res.json()),
        fetch(tvShowsRequests.fetchReality).then((res) => res.json()),
        fetch(tvShowsRequests.fetchScifiFantasy).then((res) => res.json()),
        fetch(tvShowsRequests.fetchSoap).then((res) => res.json()),
        fetch(tvShowsRequests.fetchTalk).then((res) => res.json()),
        fetch(tvShowsRequests.fetchTrending).then((res) => res.json()),
        fetch(tvShowsRequests.fetchWarPolitics).then((res) => res.json()),
        fetch(tvShowsRequests.fetchWestern).then((res) => res.json()),
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
            actionAdventureShows,
            animationShows,
            comedyShows,
            crimeShows,
            documentaryShows,
            dramaShows,
            familyShows,
            kidsShows,
            mysteryShows,
            newsShows,
            realityShows,
            sciFiFantasyShows,
            soapShows,
            talkShows,
            warPoliticsShows,
            westernShows,
        }, // will be passed to the page component as props
    };
}

// actionAdventureShows,
// animationShows,           
// comedyShows,              
// crimeShows,               
// documentaryShows,         
// dramaShows,               
// familyShows,              
// kidsShows,                
// mysteryShows,             
// newsShows,                
// realityShows,             
// sciFiFantasyShows,    
// soapShows,                
// talkShows,                
// warPoliticsShows,      
// westernShows,             

export default function Home({
    data,
    actionAdventureShows,
    animationShows,
    comedyShows,
    crimeShows,
    documentaryShows,
    dramaShows,
    familyShows,
    kidsShows,
    mysteryShows,
    newsShows,
    realityShows,
    sciFiFantasyShows,
    soapShows,
    talkShows,
    warPoliticsShows,
    westernShows,
}) {
    //console.log(data);
    //console.log(process.env.API_KEY)
    //console.log(netflixOriginals)

    // const [movie, setMovie] = useState({});

    // useEffect(() => {
    //     setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)]);
    // }, [data.results]);


    return (
        <>
            <Head>
                <title>Netflix</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/netflixSymbol.svg" />
            </Head>

            <div className="text-white">
                <Navbar />
                <Banner movies={data.results} />
                <div className="pb-10">
                    <List name="Trending TV shows" list={data.results} />
                    <List name="Action Adventure Tv shows" list={actionAdventureShows.results} />
                    <List name="Animation Tv shows" list={animationShows.results} />
                    <List name="Comedy Tv shows" list={comedyShows.results} />
                    <List name="Crime Tv shows" list={crimeShows.results} />
                    <List name="Documentary Tv shows" list={documentaryShows.results} />
                    <List name="Drama Tv shows" list={dramaShows.results} />
                    <List name="Family Tv shows" list={familyShows.results} />
                    <List name="Kids Tv shows" list={kidsShows.results} />
                    <List name="Mystery Tv shows" list={mysteryShows.results} />
                    <List name="News Tv shows" list={newsShows.results} />
                    <List name="Reality Tv shows" list={realityShows.results} />
                    <List name="sci-fi fantasy Tv shows" list={sciFiFantasyShows.results} />
                    <List name="soap Tv shows" list={soapShows.results} />
                    <List name="talk Tv shows" list={talkShows.results} />
                    <List name="war politics Tv shows" list={warPoliticsShows.results} />
                    <List name="western Tv shows" list={westernShows.results} />

                </div>
            </div>
        </>
    );
}