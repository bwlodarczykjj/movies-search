import React, { Component } from 'react';
import './App.scss';
import MovieRow from './MovieRow.js'
import $ from 'jquery'


class App extends Component {
  
constructor(props){
  super(props)
  
  this.state = {}

  this.performSearch('ant-man') //Metoda, która pozwala na wyszukiwanie po API

}

performSearch(searchTerm) {
    
  //Asynchroniczna metoda pobierania danych z API zapisana za pomocą wbudowanej metody jQuery "ajax()"

const urlString = `http://api.themoviedb.org/3/search/movie?api_key=2b229017e9b96781a3b36f2d8ccefb62&query=${searchTerm}`
  $.ajax({
    url: urlString,

  //Pobieranie danych 

  success: (searchResults) => {
  console.log("Fetched data success")
        
  const results = searchResults.results
  const movieRows = []

  results.forEach((movie) =>{
  //poster_path to unikatyowy link do plakatow, pobieram go z API

  movie.poster_src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`          
          
  const movieRow = <MovieRow key={movie.id} movie={movie} />
  movieRows.push(movieRow)
  
})

  this.setState({
  rows: movieRows

  })
},
  //W przypadku błędu, wyświetli błąd w consoli

  error: (xhr, status, err) => {
    console.log('Fail to fetch data')
    }      
  })
  }
  searchChangeHandler(event) {
    // console.log(event.target.value)
   const searchTerm = event.target.value
   this.performSearch(searchTerm)
  }
  
  render(){
    return (
    <div className="App">
      <div className='header'>
        <img width='70' src='./img/logo.svg' alt='logo'/>
        <h2 className="title">Znajdź film by MoviesDB</h2>
      </div>      
        <input className="input-search" onChange={this.searchChangeHandler.bind(this)} placeholder="Wprowadź nazwę filmu" />
        {this.state.rows}
      </div>
   );
  }
}

export default App;
