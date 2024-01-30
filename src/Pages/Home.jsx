import React from 'react'
import Hero from '../Components/Hero'
import Movierow from '../Components/Movierow'
import endpoints from '../Services/movieServices'


const Home = () => {
  return (
    <>
  
   <Hero></Hero>
     <Movierow title='upcoming' url={endpoints.upcoming}></Movierow>
     <Movierow title='trending' url={endpoints.trending}></Movierow>
     <Movierow title='top rated' url={endpoints.topRated}></Movierow>
     <Movierow title='comedy' url={endpoints.comedy}></Movierow>
     <Movierow title='popular' url={endpoints.popular}></Movierow>
    </>
  )
}

export default Home
