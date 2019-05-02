import React from 'react'

class MovieRow extends React.Component{

    viewMovie(){
        // przekierowanie do strony filmu
        const url = `http://www.themoviedb.org/movie/${this.props.movie.id}`
        window.location.href = url;
    }

    render(){
        return <div>
           <table key={this.props.movie.id}> 
        <tbody>
          <tr>
            <td>
                <img width="100" src={this.props.movie.poster_src} alt="Brak plakatu!"/>
            </td>
            <td>
              <h3 className='text-header'>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview ? this.props.movie.overview : "Sorry but we have not description for this movie :("}</p>
              <button className='movie-button' onClick={this.viewMovie.bind(this)}>Podgląd</button>
            </td>
          </tr>
        </tbody>
      </table>     
    </div>
    }
}

export default MovieRow;