import React, { Component } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showInfo: false
        }
    }

    render() {
        return (
            <article className='question'>
                <header>
                    <h4>{this.props.title}</h4>
                    <button className="btn" onClick={() => this.setState({showInfo: !this.state.showInfo})}>
                        {this.state.showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                </header>
                {
                    console.log(this.state.showInfo)}
                {
                    this.state.showInfo && <p>{this.props.info}</p>
                }
            </article>
        )
    }
}
