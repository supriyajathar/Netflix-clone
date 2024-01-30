
// import React, { useEffect, useState, useContext } from 'react';
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import { AiOutlineClose } from "react-icons/ai";
// import { useAuth } from '../Context/Authcontext';
// import { db } from '../Services/firebase';
// import { createImageUrl } from '../Services/movieServices';
// import { doc, onSnapshot, updateDoc } from 'firebase/firestore';

// const Profile = () => {
//   const { user } = useAuth(); // Assuming useAuth returns user

//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const unsubscribe = onSnapshot(doc(db, "users", `${user?.email}`), (snapshot) => {
//       if (snapshot.exists()) {
//         setMovies(snapshot.data().favShows);
//       } else {
//         setMovies([]); // Set to empty array if user document doesn't exist or doesn't have favShows
//       }
//     });
    
//     return () => unsubscribe(); // Unsubscribe from snapshot listener when component unmounts
//   }, [user]); 
//   const slide=(offset)=>
//   {
   
//     const slider=document.getElementById("slider")
//     slider.scrollLeft=slider.scrollLeft+offset
//   }

//   if (!user) {
//     return <p>Fetching shows...</p>;
//   }

//   return (
//     <>
//       <div>
//         <div>
//           <img
//             className="block w-full h-[500px] object-cover"
//             src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg'
//             alt="Netflix Background"
//           />
//           <div className="bg-black/60 fixed top-0 left-0 w-full h-[500px]" />
//           <div className="absolute top-[20%] p-4 md:p-8">
//             <h1 className='text-3xl md:text-5xl font-nsans-bold my-2'>
//               My show
//             </h1>
//             <p className='font-nsans-light text-gray-400 text-lg'></p>
//             {user.email}
//           </div>
//         </div>



//         <h2 className="font-nsans-bold md:text-xl p-4 capitalize">
//       favShows
//       </h2>
     
//       <div className='relative flex items-center group'>
      
       
//         <MdChevronLeft  onClick ={()=>slide(-500)}className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700
//       z-10  hidden group-hover:block cursor-pointer"  size={40}/>
//         <div id={`slider`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
//           {movies.map(({id,title,backdrop_path,poster_path, })=>(
           
           
//            <div key={id} className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
//            <img className='w-full h-40 block object-cover object-top' src={createImageUrl(backdrop_path ?? poster_path, "w500")} alt={title} />
//            <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
//                <p className='whitespace-normal text-xs md:sm flex justify-center items-center h-full font-nsans-bold'>{title}</p>
             
                  
               
//            </div>
//        </div>







//           ))}
          
          
        
//         </div>
//         <MdChevronRight onClick ={()=>slide(500)} className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700
//       z-10  hidden group-hover:block cursor-pointer"  size={40}/>
     
//       </div>



//       </div>


//     </>
//   );
// }

// export default Profile;









// import React, { useEffect, useState } from 'react';
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import { useAuth } from '../Context/Authcontext';
// import { db } from '../Services/firebase';
// import { createImageUrl } from '../Services/movieServices';
// import { doc, onSnapshot } from 'firebase/firestore';

// const Profile = () => {
//   const { user } = useAuth(); // Assuming useAuth returns user

//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     if (!user) return; // Check if user exists

//     const unsubscribe = onSnapshot(doc(db, "users", `${user?.email}`), (snapshot) => {
//       if (snapshot.exists()) {
//         setMovies(snapshot.data().favShows || []); // Ensure default value is an empty array
//       } else {
//         setMovies([]); // Set to empty array if user document doesn't exist or doesn't have favShows
//       }
//     });
    
//     return () => unsubscribe(); // Unsubscribe from snapshot listener when component unmounts
//   }, [user]); // Trigger effect whenever user changes
  
//   const slide = (offset) => {
//     const slider = document.getElementById("slider");
//     if (slider) {
//       slider.scrollLeft += offset;
//     }
//   }

//   if (!user) {
//     return <p>Fetching shows...</p>;
//   }

//   return (
//     <>
//       <div>
//         <div>
//           <img
//             className="block w-full h-[500px] object-cover"
//             src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg'
//             alt="Netflix Background"
//           />
//           <div className="bg-black/60 fixed top-0 left-0 w-full h-[500px]" />
//           <div className="absolute top-[20%] p-4 md:p-8">
//             <h1 className='text-3xl md:text-5xl font-nsans-bold my-2'>
//               My show
//             </h1>
//             <p className='font-nsans-light text-gray-400 text-lg'>{user.email}</p>
//           </div>
//         </div>

//         <h2 className="font-nsans-bold md:text-xl p-4 capitalize">
//           favShows
//         </h2>
       
//         <div className='relative flex items-center group'>
//           <MdChevronLeft onClick={() => slide(-500)} className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" size={40} />
//           <div id={`slider`} className='w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide'>
//             {movies.map(({ id, backdrop_path, poster_path, title }) => (
//               <div key={id} className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
//                 <img className='w-full h-40 block object-cover object-top' src={createImageUrl(backdrop_path ?? poster_path, "w500")} alt={title} />
//                 <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
//                   <p className='whitespace-normal text-xs md:sm flex justify-center items-center h-full font-nsans-bold'>{title}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <MdChevronRight onClick={() => slide(500)} className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" size={40} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Profile;

// import React, { useEffect, useState } from 'react';
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import { useAuth } from '../Context/Authcontext';
// import { AiOutlineClose } from "react-icons/ai";
// import { db } from '../Services/firebase';
// import { createImageUrl } from '../Services/movieServices';
// import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore';

// const Profile = () => {
//   const { user } = useAuth(); // Assuming useAuth returns user

//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (!user) return; // Check if user exists
        
//         const userDocRef = doc(db, "users", user.email);
//         const unsubscribe = onSnapshot(userDocRef, (snapshot) => {
//           if (snapshot.exists()) {
//             const userData = snapshot.data();
//             if (userData && userData.favShows) {
//               setMovies(userData.favShows);
//             } else {
//               setMovies([]); // Set to empty array if user document doesn't have favShows
//             }
//           } else {
//             setMovies([]); // Set to empty array if user document doesn't exist
//           }
//         });

//         return () => unsubscribe(); // Unsubscribe from snapshot listener when component unmounts
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [user]); // Trigger effect whenever user changes

//   const slide = (offset) => {
//     const slider = document.getElementById("slider");
//     if (slider) {
//       slider.scrollLeft += offset;
//     }
//   }

//   const handelunlike=async(movie)=>
//   {
//     const userDoc=doc(db,"users",user.email);
//     await updateDoc(userDoc,{favShows:arrayRemove(movie),});

//   }

//   if (!user) {
//     return <p>Fetching shows...</p>;
//   }

//   return (
//     <>
//       <div>
//         <div>
//           <img
//             className="block w-full h-[500px] object-cover"
//             src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg'
//             alt="Netflix Background"
//           />
//           <div className="bg-black/60 fixed top-0 left-0 w-full h-[500px]" />
//           <div className="absolute top-[20%] p-4 md:p-8">
//             <h1 className='text-3xl md:text-5xl font-nsans-bold my-2'>
//               My show
//             </h1>
//             <p className='font-nsans-light text-gray-400 text-lg'>{user.email}</p>
//           </div>
//         </div>

//         <h2 className="font-nsans-bold md:text-xl p-4 capitalize">
//           favShows
//         </h2>
       
//         <div className='relative flex items-center group'>
//           <MdChevronLeft onClick={() => slide(-500)} className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" size={40} />
//           <div id={`slider`} className='w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide'>
//             {movies.map(({ movie }) => (
//               <div key={movie.id} className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
//                 <img className='w-full h-40 block object-cover object-top' src={createImageUrl(movie.backdrop_path ??movie.poster_path, "w500")} alt={title} />
//                 <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
//                   <p className='whitespace-normal text-xs md:sm flex justify-center items-center h-full font-nsans-bold'>{movie.title}</p>
//                   <p>
//                  < AiOutlineClose size={30}  onClick={() => slide(500)}className='absolute top-2 right-2'/>
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <MdChevronRight onClick={() => handelunlike(movie)} className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" size={40} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Profile;


// import React, { useEffect, useState } from 'react';
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import { AiOutlineClose } from "react-icons/ai";
// import { useAuth } from '../Context/Authcontext';
// import { db } from '../Services/firebase';
// import { createImageUrl } from '../Services/movieServices';
// import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore';

// const Profile = () => {
//   const { user } = useAuth(); // Assuming useAuth returns user

//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (!user) return; // Check if user exists
        
//         const userDocRef = doc(db, "users", user.email);
//         const unsubscribe = onSnapshot(userDocRef, (snapshot) => {
//           if (snapshot.exists()) {
//             const userData = snapshot.data();
//             if (userData && userData.favShows) {
//               setMovies(userData.favShows);
//             } else {
//               setMovies([]); // Set to empty array if user document doesn't have favShows
//             }
//           } else {
//             setMovies([]); // Set to empty array if user document doesn't exist
//           }
//         });

//         return () => unsubscribe(); // Unsubscribe from snapshot listener when component unmounts
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [user]); // Trigger effect whenever user changes

//   const slide = (offset) => {
//     const slider = document.getElementById("slider");
//     if (slider) {
//       slider.scrollLeft += offset;
//     }
//   }

//   const handleUnlike = async (movie) => {
//     try {
//       const userDoc = doc(db, "users", user.email);
//       await updateDoc(userDoc, {
//         favShows: arrayRemove(movie),
//       });
//       setMovies(prevMovies => prevMovies.filter(m => m.id !== movie.id));
//     } catch (error) {
//       console.error("Error removing movie:", error);
//     }
//   }

//   if (!user) {
//     return <p>Fetching shows...</p>;
//   }

//   return (
//     <>
//       <div>
//         <div>
//           <img
//             className="block w-full h-[500px] object-cover"
//             src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg'
//             alt="Netflix Background"
//           />
//           <div className="bg-black/60 fixed top-0 left-0 w-full h-[500px]" />
//           <div className="absolute top-[20%] p-4 md:p-8">
//             <h1 className='text-3xl md:text-5xl font-nsans-bold my-2'>
//               My show
//             </h1>
//             <p className='font-nsans-light text-gray-400 text-lg'>{user.email}</p>
//           </div>
//         </div>

//         <h2 className="font-nsans-bold md:text-xl p-4 capitalize">
//           favShows
//         </h2>
       
//         <div className='relative flex items-center group'>
//           <MdChevronLeft onClick={() => slide(-500)} className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" size={40} />
//           <div id={`slider`} className='w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide'>
//             {movies.map(({ id, title, backdrop_path, poster_path }) => (
//               <div key={id} className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
//                 <img className='w-full h-40 block object-cover object-top' src={createImageUrl(backdrop_path ?? poster_path, "w500")} alt={title} />
//                 <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
//                   <p className='whitespace-normal text-xs md:sm flex justify-center items-center h-full font-nsans-bold'>{title}</p>
//                   <AiOutlineClose size={30} onClick={() => handleUnlike({ id, title, backdrop_path, poster_path })} className='absolute top-2 right-2' />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <MdChevronRight onClick={() => slide(500)} className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" size={40} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Profile;

import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from '../Context/Authcontext';
import { db } from '../Services/firebase';
import { createImageUrl } from '../Services/movieServices';
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore';

const Profile = () => {
  const { user } = useAuth(); // Assuming useAuth returns user

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user) return; // Check if user exists
        
        const userDocRef = doc(db, "users", user.email);
        const unsubscribe = onSnapshot(userDocRef, (snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.data();
            if (userData && userData.favShows) {
              setMovies(userData.favShows);
            } else {
              setMovies([]); // Set to empty array if user document doesn't have favShows
            }
          } else {
            setMovies([]); // Set to empty array if user document doesn't exist
          }
        });

        return () => unsubscribe(); // Unsubscribe from snapshot listener when component unmounts
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user]); // Trigger effect whenever user changes

  const slide = (offset) => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft += offset;
    }
  }

  const handleUnlike = async (movie) => {
    try {
      const userDocRef = doc(db, "users", user.email);
      await updateDoc(userDocRef, {
        favShows: arrayRemove(movie),
      });
      setMovies(prevMovies => prevMovies.filter(m => m.id !== movie.id));
    } catch (error) {
      console.error("Error removing movie:", error);
    }
  }

  if (!user) {
    return <p>Fetching shows...</p>;
  }

  return (
    <>
      <div>
        <div>
          <img
            className="block w-full h-[500px] object-cover"
            src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg'
            alt="Netflix Background"
          />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-[500px]" />
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className='text-3xl md:text-5xl font-nsans-bold my-2'>
              My show
            </h1>
            <p className='font-nsans-light text-gray-400 text-lg'>{user.email}</p>
          </div>
        </div>

        <h2 className="font-nsans-bold md:text-xl p-4 capitalize">
          favShows
        </h2>
       
        <div className='relative flex items-center group'>
          <MdChevronLeft onClick={() => slide(-500)} className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" size={40} />
          <div id={`slider`} className='w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide'>
            {movies.map(({ id, title, backdrop_path, poster_path }) => (
              <div key={id} className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
                <img className='w-full h-40 block object-cover object-top' src={createImageUrl(backdrop_path ?? poster_path, "w500")} alt={title} />
                <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
                  <p className='whitespace-normal text-xs md:sm flex justify-center items-center h-full font-nsans-bold'>{title}</p>
                  <AiOutlineClose size={30} onClick={() => handleUnlike({ id, title, backdrop_path, poster_path })} className='absolute top-2 right-2' />
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight onClick={() => slide(500)} className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" size={40} />
        </div>
      </div>
    </>
  );
}

export default Profile;





















