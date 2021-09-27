import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import List from "../components/List";
//import requests from "../request";
import moviesRequests from "../moviesRequest"

export async function getServerSideProps(context) {
    const [
        data,
        actionMovies,
        adventureMovies,
        animationMovies,
        comedyMovies,
        crimeMovies,
        documentaryMovies,
        dramaMovies,
        familyMovies,
        fantasyMovies,
        historyMovies,
        horrorMovies,
        musicMovies,
        mysteryMovies,
        romanceMovies,
        scienceFictionMovies,
        tvMovies,
        thrillerMovies,
        warMovies,
        westernMovies,
    ] = await Promise.all([
        fetch(moviesRequests.fetchTrending).then((res) => res.json()),
        fetch(moviesRequests.fetchAction).then((res) => res.json()),
        fetch(moviesRequests.fetchAdventure).then((res) => res.json()),
        fetch(moviesRequests.fetchAnimation).then((res) => res.json()),
        fetch(moviesRequests.fetchComedy).then((res) => res.json()),
        fetch(moviesRequests.fetchCrime).then((res) => res.json()),
        fetch(moviesRequests.fetchDocumentary).then((res) => res.json()),
        fetch(moviesRequests.fetchDrama).then((res) => res.json()),
        fetch(moviesRequests.fetchFamily).then((res) => res.json()),
        fetch(moviesRequests.fetchFantasy).then((res) => res.json()),
        fetch(moviesRequests.fetchHistory).then((res) => res.json()),
        fetch(moviesRequests.fetchHorror).then((res) => res.json()),
        fetch(moviesRequests.fetchMusic).then((res) => res.json()),
        fetch(moviesRequests.fetchMystery).then((res) => res.json()),
        fetch(moviesRequests.fetchRomance).then((res) => res.json()),
        fetch(moviesRequests.fetchScience).then((res) => res.json()),
        fetch(moviesRequests.fetchTvMovie).then((res) => res.json()),
        fetch(moviesRequests.fetchThriller).then((res) => res.json()),
        fetch(moviesRequests.fetchWar).then((res) => res.json()),
        fetch(moviesRequests.fetchWestern).then((res) => res.json()),
    ]);

    return {
        props: {
            data,
            actionMovies,
            adventureMovies,
            animationMovies,
            comedyMovies,
            crimeMovies,
            documentaryMovies,
            dramaMovies,
            familyMovies,
            fantasyMovies,
            historyMovies,
            horrorMovies,
            musicMovies,
            mysteryMovies,
            romanceMovies,
            scienceFictionMovies,
            tvMovies,
            thrillerMovies,
            warMovies,
            westernMovies,
        }, // will be passed to the page component as props
    };
}
// actionMovies,
// adventureMovies,       
// animationMovies,
// comedyMovies,
// crimeMovies,  
// documentaryMovies,     
// dramaMovies,
// familyMovies,      
// fantasyMovies,    
// historyMovies,  
// horrorMovies, 
// musicMovies,  
// mysteryMovies,     
// romanceMovies,  
// scienceFictionMovies, 
// tvMovies,
// thrillerMovies,        
// warMovies,
// westernMovies,       
export default function Home({
    data,
    actionMovies,
    adventureMovies,
    animationMovies,
    comedyMovies,
    crimeMovies,
    documentaryMovies,
    dramaMovies,
    familyMovies,
    fantasyMovies,
    historyMovies,
    horrorMovies,
    musicMovies,
    mysteryMovies,
    romanceMovies,
    scienceFictionMovies,
    tvMovies,
    thrillerMovies,
    warMovies,
    westernMovies,
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
                    <List name="Trending Movies" list={data.results} tp="movie" />
                    <List name="Action Movies" list={actionMovies.results} tp="movie" />
                    <List name="Adventure Movies" list={adventureMovies.results} tp="movie" />
                    <List name="Animation Movies" list={animationMovies.results} tp="movie" />
                    <List name="Comedy Movies" list={comedyMovies.results} tp="movie" />
                    <List name="Crime Movies" list={crimeMovies.results} tp="movie" />
                    <List name="Documentary Movies" list={documentaryMovies.results} tp="movie" />
                    <List name="Drama Movies" list={dramaMovies.results} tp="movie" />
                    <List name="Family Movies" list={familyMovies.results} tp="movie" />
                    <List name="fantasy Movies" list={fantasyMovies.results} tp="movie" />
                    <List name="Historic Movies" list={historyMovies.results} tp="movie" />
                    <List name="Horror Movies" list={horrorMovies.results} tp="movie" />
                    <List name="Music Movies" list={musicMovies.results} tp="movie" />
                    <List name="Mystery Movies" list={mysteryMovies.results} tp="movie" />
                    <List name="Romantic Movies" list={romanceMovies.results} tp="movie" />
                    <List name="Sci-Fi Movies" list={scienceFictionMovies.results} tp="movie" />
                    <List name="Tv Movies" list={tvMovies.results} tp="movie" />
                    <List name="Thriller Movies" list={thrillerMovies.results} tp="movie" />
                    <List name="War Movies" list={warMovies.results} tp="movie" />
                    <List name="Western Movies" list={westernMovies.results} tp="movie" />
                </div>
            </div>
        </>
    );
}
