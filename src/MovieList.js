import React from 'react';
import { Link } from "react-router-dom";

class MovieList extends React.Component {
    constructor(props) {
      super(props);
      this.fetch = this.fetch.bind(this);
      this.in = this.in.bind(this);
      this.state = { movies : [],value:'',m:'',c:'',p:'',t:''};
      this.t = '';
    }
    
    in(event){
      this.setState({value:event.target.value});
    }
  
    fetch(event) {
      //console.log("hello vasavi");
      
      console.log(this.setState.t);
      fetch('http://www.omdbapi.com/?apikey=6513d14a&s='+this.state.value+'&type='+this.state.t)
      .then(response => response.json())
      .then(response => {
      this.setState({m:response.Response});
      if (this.state.m === 'True'){
        this.setState({p:response.Search});
        console.log(this.state.p)
        this.setState({ movies: this.state.p });
      }
      else{  
        this.setState({c:response.Error});
        console.log(this.state.c);
        this.t = this.state.c;
        window.location.reload(false);
        alert('Something went worng or No movie found :( TRY AGAIN....!!')
        }
        
    })
      event.preventDefault();    
  }
  
    render() {
      const im={width:55,height:47,display:'inline'}
      const h={fontFamily:'Lato',fontSize:55,color:'black',display:'inline'}
      const intp={fontFamily:'Lato',width:300,height:40,border:0,borderBottom: '1px solid black',fontSize:17,borderRadius:3,}
      const b={width:100,height:35,fontSize:20,fontFamily:'Lato',display:'inline',marginLeft:16}
      return (
        <div style={{textAlign:"center"}}>
        <form onSubmit={this.fetch}><div style={{marginTop:30}}> 
          <img style={im} alt="p" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeeqwZIZJ2FFZ0KIRLbxlgF5VP9j3PwS3tuylQ_OX2M0V-11ba"></img>
          <h1 style={h}><b>  Movie Search</b></h1></div><br></br>
          <input style={intp} type = "text"  value={this.state.value} onChange={this.in} placeholder=" Search movies by name......."></input>
              <br></br><br></br><br></br>
          <button style={b} >Search</button>
          <select style={b} onChange={(e) => this.setState({ t: e.target.value })}>
              <option value='movie'>Movie</option>
              <option value='series'>Series</option>
          </select>
          <br></br><br></br><br></br>
          {this.state.movies.map(movie =>
          <Link  target = '_blank' to={`/${movie.imdbID}`}>
          <div style={{display: 'inline-block',}} key={movie}>
          <table style={{marginLeft:40,width:380,height:450}}>
              <tr><th>
                <img style={{borderRadius:18,width:260,height:370}} alt = "pic1" 
                  src={movie.Poster!=='N/A'?movie.Poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM5BMvVJfq-yeKU5vJloUOeE58Rw0U4ABfIovM32GzEjQMmO35"}></img>
              </th></tr>
              <tr style={{fontFamily:'Lato',color:'black',textAlign:'center'}}>{movie.Title}</tr>
          </table></div></Link>
          )}
        </form>
        </div>
      )
          }    
  }

export default MovieList;