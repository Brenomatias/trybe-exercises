import React from 'react';
import MovieCard from './movieCard'

class MovieList extends React.Component {
    render() {
        return (
         <div className="movieList">
         {this.props.movies.map(movie => <MovieCard key={movie.title} movie={movie} />)} 
        </div>
        );
    }
}

export default MovieList;