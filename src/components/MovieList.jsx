import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard';
import HrMovieCard from './HrMovieCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const screenWidth = window.innerWidth;

function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    getMovieByGenreID();
  }, [])

  const getMovieByGenreID = () => {
    GlobalApi.getMovieByGenreId(genreId).then(res => {
      setMovieList(res.data.results)
    })
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += (screenWidth - 110);
    }
  }

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= (screenWidth - 110);
    }
  }

  return (
    <div className='relative'>
      <HiChevronLeft className={`hidden md:block text-[30px] absolute mx-[-50px]  cursor-pointer ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'}`}
        onClick={() => scrollLeft()}
      />
      <HiChevronRight className= {`hidden md:block text-[30px] absolute mx-[-40px] cursor-pointer right-0 ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'}`}
        onClick={() => scrollRight()}
      />
      <div
        ref={scrollRef}
        className='flex overflow-x-auto gap-8
          scrollbar-none scroll-smooth pt-5 px-3 pb-10'
      >

        {movieList.map((item) => (
          <>
            {index_ % 3 == 0 ? <HrMovieCard movie={item} /> : <MovieCard movie={item} />}
          </>
        ))}
      </div>
    </div>

  )
}

export default MovieList
