
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import endpoints, { createImageUrl } from '../Services/movieServices';

const Hero = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(endpoints.popular)
      .then((response) => {
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovie);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Fetching movie....</p>;
  }

  if (!movie) {
    return <p>No movie found.</p>;
  }
  const truncate = (str, len) => {
    if (!str) return "";
    return str.length > len ? str.slice(0, len) + '....' : str;
  };
  

  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[550px] lg:h-[850px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-br from-black to-red" />


        <img className="w-full h-full   object-cover object-top" src={createImageUrl(backdrop_path,"original")} alt={title} />



        <div className="absolute  m-0 w-full top-[10%] lg:top-[25%] p-4 md:p-8 overflow-y-hidden">
         <h1 className="text-3xl md:text-6xl font-nsans-bold  " >{title}</h1>



        <div className="mt-8 mb-4">
        <buttons className="capitalize border border-gray-300 bg-gray-300 text-black py-2  px-5 ml-4 font-bold ">play</buttons>
          <buttons className=" capitalize py-2 px-5  ml-4  border border-gray  font-bold ">watch later</buttons>
          
        </div>
        <p className="text-gray-400 text-sm">{release_date}</p>
        <p className='capitalize w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
          {truncate(overview, 165)}</p>


        </div>

      </div>
    </div>


  );
};

export default Hero;


