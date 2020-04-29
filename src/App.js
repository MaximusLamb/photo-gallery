import React, { Component } from 'react'
import Data from './data.js';
import ImageItem from './ImageItem.js';
import './App.css';

// const creature = {
//   title: 'monster',
//   horns: 3,
//   url:         "https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003",
//   description: 'super duper'
// }



export default class App extends Component {
  state = { selected: null }

  handleChange = (e) => {
    this.setState({ selected: e.target.value}) 
  }

  render() {
      return (
      <main>
    <section className="choices">
      <select className="creature-horn-filter" onChange={this.handleChange}>
        <option value="" defaultValue>
          All Creatures
        </option>
        <option value='1'>1 Horned Creatures</option>
        <option value='2'>2 Horned Creatures</option>
        <option value='3'>3 Horned Creatures</option>
      </select>
    </section>

      <div>
        <ul className="creatureList">
        {
          Data
          .filter(poop => {
            if(!this.state.selected) return true;

            return poop.horn === this.state.selected;
          })
          .map(butt => {
            return <ImageItem creature={butt}/>
          })
        }

        </ul>
        
      </div>
      </main>
    )
  }
}