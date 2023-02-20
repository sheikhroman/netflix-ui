import React from 'react'
import CardSlider from './CardSlider'

export default function Slider({ movies }) {
    const getMoviesFromRang = (from, to) => {
        return movies.slice(from,to)
    }
  return (
      <div>
          <CardSlider title="Trending Now" data={getMoviesFromRang(0,10)} />
          <CardSlider title="New Releses" data={getMoviesFromRang(10,20)} />
          <CardSlider title="Movies" data={getMoviesFromRang(20,30)} />
          <CardSlider title="Alice In Border Land" data={getMoviesFromRang(30,40)} />
          <CardSlider title="Populer In Netflix" data={getMoviesFromRang(40,50)} />
          <CardSlider title="Epics" data={getMoviesFromRang(50,60)} />
    </div>
  )
}
