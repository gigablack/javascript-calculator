import React,{Component} from 'react'
import {connect} from 'react-redux'
import newOperation from '../store/actions/newOperation'

class OpButton extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {operation,area,execNewOperation} = this.props
        return (
            <div>
                <input type="button" value={operation} onClick={() => execNewOperation(operation)}/>
                <style jsx>
                    {`
                    div {
                        grid-area: ${area};
                        display: flex;
                    }
                    input {
                        width: 100%;
                        border: none;
                        border-radius: 10px;
                        outline: none;
                        background-color: ${operation == '=' || operation == 'C' ? 'hsl(8, 90%, 50%)' : '#d64933'};
                        font-size: 2em;
                        font-family: 'Orbitron', sans-serif;
                    }
                    input:hover {
                        background-color: #92dce5;
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
        execNewOperation: operation => {
            dispatch(newOperation(operation))
        }
    }
}

export default connect(null,mapDispatchToProps)(OpButton)