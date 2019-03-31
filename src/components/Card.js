import React, { Component } from 'react'
import data from "../data/countries.json";
import {Link} from "react-router-dom"

export default class Card extends Component {
filterCity = (codeCity)=> {data.filter(city => { if (city.cca3 === codeCity){return (city)}})
}

  render() {
    const selectedCity = data.filter(city => { if (city.cca3 === this.props.match.params.id){return (city)}});
    return (
      <div className="col-7">
      <h1>{selectedCity[0].name.common}</h1>
      <table className="table">
        <thead />
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{selectedCity[0].capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
            {`${selectedCity[0].area} Km`}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
              {selectedCity[0].borders.map((e, index)=>{ return(
                <Link to = {e} key = {index}>{<li> {(data.filter(city => { if (city.cca3 === e){return (city)}})[0].name.common)} </li>} </Link>
              )})}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    )
  }
}
