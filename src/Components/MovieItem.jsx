// import React, { useState } from 'react'
// import { FaHeart,FaRegHeart } from "react-icons/fa";
// import { createImageUrl } from '../Services/movieServices';
// import {arrayUnion,doc,updateDoc} from 'firebase/firestore';
// import {db} from '../Services/firebase';

// const MovieItem = ({movie}) => {
//     const {title,backdrop_path,poster_path}=movie;
//     const[like,setlike]=useState(false);
//     const makefavshow=async()=>
//     {
//       const userEmail=user?.email;
//       if(userEmail)
//       {
//         const userDoc=doc(db,"users",userEmail);
//         setlike(!like);
//         await updateDoc(userDoc,{
//           favShows:arrayUnion({...movie}),

//         });
//       }
//         else{
//           alert("Login to save a movie");
//         }
//       };
//     }

//   return (
//     <div className='relative w-[160px] sm:w-[200px]  md:w-[240px]
//     lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
//         <img className='w-full h-40 block object-cover object-top' src={createImageUrl(backdrop_path?? poster_path,"w500")} alt={title}/>
        
//       <p>{`${movie.title}|${movie.id}`}</p>
//       <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
// <p className='whitespace-normal text-xs md:sm flex justify-center items-center h-full font-nsans-bold'> {movie.title}</p>
// <p className=''>
// {like?(<FaHeart size={20} className='absolute top-2 left-2 text-gray-300'/>):(<FaRegHeart  size={20} className='absolute top-2 left-2 text-gray-300'/>)}

// </p>
//       </div>
//     </div>
    
//   );


// export default MovieItem

import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { createImageUrl } from '../Services/movieServices';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../Services/firebase';
import { useAuth } from '../Context/Authcontext'; // Import useAuth hook to access user information

const MovieItem = ({ movie }) => {
    const { title, backdrop_path, poster_path } = movie;
    const { user } = useAuth(); // Access user information using useAuth hook
    const [like, setLike] = useState(false);
  

    const makeFavShow = async () => {
        const userEmail = user?.email;
        if (userEmail) {
            const userDoc = doc(db, "users", userEmail);
            setLike(!like);
            await updateDoc(userDoc, {
                favShows: arrayUnion({ ...movie })
            });
        } else {
            alert("Login to save a movie");
        }
    };

    return (
        <div className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
            <img className='w-full h-40 block object-cover object-top' src={createImageUrl(backdrop_path ?? poster_path, "w500")} alt={title} />
            <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
                <p className='whitespace-normal text-xs md:sm flex justify-center items-center h-full font-nsans-bold'>{movie.title}</p>
                <p onClick={makeFavShow} className="cursor-pointer">
                    {like ? (
                        <FaHeart size={20} className='absolute top-2 left-2 text-gray-300' onClick={makeFavShow} />
                    ) : (
                        <FaRegHeart size={20} className='absolute top-2 left-2 text-gray-300' onClick={makeFavShow} />
                    )}
                </p>
            </div>
        </div>
    );
};

export default MovieItem;

