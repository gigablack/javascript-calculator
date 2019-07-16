import React,{Component} from 'react'
import {connect} from 'react-redux'
import newNumber from '../store/actions/newNumber'

class NumberButton extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {number,area,pushNewNumber} = this.props
        return (
            <div>
                <input type="button" value={number} onClick={() => pushNewNumber(number)}/>
                <style jsx>
                    {`
                    div {
                        grid-area: ${area};
                        display: flex;
                        justify-content: center;
                        align-items: stretch;
                    }
                    input {
                        width: 100%;
                        border: none;
                        border-radius: 10px;
                        outline: none;
                        background-color: #7c7c7c;
                        color: #eee5e9;
                        font-size: 2em;
                        font-family: 'Orbitron', sans-serif;
                    }
                    input:hover {
                        background-color: #92dce5;
                        color: #000000;
                    }
                    input:active {
                        box-shadow: 5px 5px 5px #000000 inset;
                        position: relative;
                        margin-top: 3px;
                        margin-left: 3px;
                    }
                    `}
                </style>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        pushNewNumber: (number) => {
            dispatch(newNumber(number))
        }
    }
}

export default connect(null,mapDispatchToProps)(NumberButton)