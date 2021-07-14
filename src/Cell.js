import { render } from 'enzyme';
import { IsConstructor } from 'es-abstract';
import React from 'react'

export default class Cell extends React.Component {

    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    
    switch = () => {
        const blank = '#333'
        this.setState({
            color: blank
        })
    }

    render() {
        return (
            <div className = 'cell' onClick = {this.switch} style= {{backgroundColor: this.state.color}} >
               
            </div>
        )
    }
}