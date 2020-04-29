import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div>
                <li>
                    <div>
                        <h2>{this.props.creature.title}</h2>
                        <p className="horn-amount"> = {this.props.creature.horns}</p>
                    </div>

                    <div className="image">
                        <img
                            alt={this.props.creature.url}
                            src={this.props.creature.url}>
                            </img>
                    </div>
                    <p className="description">{this.props.creature.description}</p>
                </li>
            </div>
        )
    }
}
