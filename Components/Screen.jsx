import React,{Component} from 'react'
import ScreenUp from './ScreenUp.jsx'
import ScreenDown from './ScreenDown.jsx'

class Screen extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                {/* <p>screen</p> */}
                <ScreenUp />
                <ScreenDown />
                <style jsx>
                    {`
                    div {
                        background-color: var(--registration-black);
                        color: var(--platinum);
                        flex-grow: 1;
                        flex-shrink: 2;
                        flex-basis: 1;
                        display: flex;
                        flex-direction: column;
                        text-align: right;
                        padding-right: 5px;
                        height: 100px;
                        border-radius: 10px;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default Screen