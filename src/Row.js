import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"


const base_url= "https://image.tmdb.org/t/p/original/"

function Row({ title  , fetchUrl , isLargeRow }) {
    const [ movies , setMovies] = useState([])
    const [ trailerUrl , seTrailerUrl ] = useState("")

    useEffect(()=>{
        // if [] , the useEffect runs once only when the Row loads 
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            const data = request.data.results
            setMovies(data)
            return request
        }
        fetchData()
    }, [fetchUrl])
    // console.log(movies)

    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        },
    }

    const handleClick = (movie)=> {
        if (trailerUrl) {
            seTrailerUrl('')
        } else {
            movieTrailer(movie?.name || "")
            .then((url)=> {
                // https://www.youtube.com/watch?v=Xtmshshss
                const urlParams = new URLSearchParams(new URL(url).search)
                seTrailerUrl(urlParams.get('v'))
            })
            .catch(error => console.log(error))
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>

        <div className="row__posters">
            {/* posters */}
            {movies.map(movie => (
                <img key ={movie.id}
                onClick={()=> handleClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name}/>
            ))}
        </div>
        { trailerUrl && <YouTube videoId = {trailerUrl} opts={opts} />}

        </div>
    )
}


export default Row