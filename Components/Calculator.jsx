import React,{Component} from 'react'
import Screen from './Screen.jsx'
import KeyBoard from './KeyBoard.jsx'

class Calculator extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                {/* <p>calculator</p> */}
                <Screen />
                <KeyBoard />
                <style jsx>
                    {`
                    div {
                        background-color: var(--platinum);
                        height: 400px;
                        width: 35%;
                        margin: auto;
                        border-radius: 10px;
                        box-shadow: 5px 5px 5px var(--registration-black);
                        display: flex;
                        flex-direction: column;
                        padding: 10px;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default Calculator