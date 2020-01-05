import React from 'react';


class Details extends React.Component{
    constructor(props) {
      super(props);
      this.state = { mdetail : [],};
    }
    componentDidMount() {
      const {imdbID} = this.props.match.params
      fetch(`https://www.omdbapi.com/?apikey=6513d14a&i=${imdbID}`)
      .then(response => response.json())
            .then(response => {
              console.log(response)
                this.setState({ mdetail: response });
            });
    }
    render(){
      const {
        Title, Poster, imdbID, Released, Director, Awards, imdbRating, BoxOffice, Language, Genre, Runtime
        
    } = this.state.mdetail;
    const mystyle1={textAlign:"left",}
    const t={fontSize:55,textAlign:"left",verticalAlign:'bottom',}
    const b={width:100,height:35,fontSize:20,fontFamily:'Lato',marginLeft:830}
    const d1={textAlign:"left",fontWeight:"bold",fontSize:17}
    const d2={textAlign:"left",fontFamily:'Lato',fontSize:17,width:250}
    const ta = {marginLeft:'30%',marginTop:105,width:750,height:550}
    const i={borderRadius:18,width:350,height:510,}
      return(<div>
        
        <table style={ta}>
          <tr>
            <th style={t}><b>{Title}</b></th>
            <th rowSpan='5'><img alt = "pic1" src={Poster} style={i}></img></th>
          </tr>
          <tr><td></td><td></td></tr> <tr><td></td><td></td></tr> <tr><td></td><td></td></tr>
          <tr>
            <table style={mystyle1}>
              <tr>
                <td style={d1}>ID </td>
                <td style={d2}><b>:</b> {imdbID}</td>
              </tr>
              <tr><td></td><td></td></tr>
              <tr><td></td><td></td></tr>
              <tr>
                <td style={d1}>Genre </td>
                <td style={d2}><b>:</b> {Genre}</td>
              </tr>
              <tr><td></td><td></td></tr>
              <tr><td></td><td></td></tr>
              <tr>
                <td style={d1}>Duration </td>
                <td style={d2}><b>:</b> {Runtime}</td>
              </tr>
              <tr><td></td><td></td></tr>
              <tr><td></td><td></td></tr>
              <tr>
                <td style={d1}>Released </td>
                <td style={d2}><b>:</b> {Released}</td>
              </tr>
              <tr><td></td><td></td></tr>
              <tr><td></td><td></td></tr>
              <tr>
                <td style={d1}>Director </td>
                <td style={d2}><b>:</b> {Director}</td>
              </tr>
              <tr><td></td><td></td></tr>
              <tr><td></td><td></td></tr>
              <tr>
                <td style={d1}>Awards </td>
                <td style={d2}><b>:</b> {Awards}</td>
              </tr>
              <tr><td></td><td></td></tr>
              <tr>
                <td style={d1}>Rating </td>
                <td style={d2}><b>:</b> {imdbRating}</td>
              </tr>
              <tr><td></td><td></td></tr>
              <tr>
                <td style={d1}>BoxOffice </td>
                <td style={d2}><b>:</b> {BoxOffice}</td>
              </tr>
              <tr><td></td><td></td></tr>
              <tr><td></td><td></td></tr>
              <tr>
                <td style={d1}>Language </td>
                <td style={d2}><b>:</b> {Language}</td>
              </tr>
              <tr><td></td><td></td></tr>
              <tr><td></td><td></td></tr>
              
            </table>
          </tr>
        </table>
        <br></br><br></br>
          </div>
      )
    }
  }

  export default Details;