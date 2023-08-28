'use client'

import { useSearchParams } from "next/navigation";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

import { useEffect, useState } from "react";
import { MovieListResponse, MovieType, genreType } from "@/utils/types";
import { requests } from "@/utils/constants";
import Results from "@/components/Results";


export default function Home() {
  const [results, setResults] = useState<MovieType[] | []>([])

  const searchParams = useSearchParams()
  const genre = searchParams.get('genre') || 'fetchTrending'

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3${requests[genre as genreType].url}`)
        const data: MovieListResponse = await response.json()
        
        setResults(data.results)
      }

      fetchData()
    } catch (error: any) {
      console.log(error.message)
    }
  }, [genre])

  return (
    <div>
      <Header />
      <Navbar />
      {results && <Results results={results} />}
    </div>
  )
}