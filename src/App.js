import React, { Component } from 'react'
import Data from './data.js';
import ImageItem from './ImageItem.js';
import './App.css';
import Header from './Header.js';



export default class App extends Component {
  
  state = { selected: null }
  handleChange = (e) => {
    this.setState({ selected: e.target.value}) 
  }
  
  render() {
    return (
      <main>
        <div>
      <Header/>
        </div>
    <section className="choices">
      <select className="creature-horn-filter" onChange={this.handleChange}>
        <option value="" defaultValue>
          All Creatures
        </option>
        <option value="narwhal">Narwhals</option>
        <option value="chameleon">Chameleons</option>
        <option value="dragon">Dragons</option>
        <option value="lizard">Lizards</option>
        <option value="mouflon">Mouflon</option>
        <option value="addax">Addax</option>
        <option value="dragon">Dragons</option>
        <option value="markhor">Markhors</option>
        <option value="rhino">Rhino</option>
        <option value="unicorn">Most Powerful Creature Ever</option>
      </select>
    </section>

      <div>
        <ul className="creatureList">
        {
          Data
          .filter(poop => {
            if(!this.state.selected) return true;

            return poop.keyword === this.state.selected;
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