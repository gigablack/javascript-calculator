import React,{Component} from 'react'

class ScreenUp extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <p>0</p>
                <style>
                    {`
                    div {
                        font-family: 'Orbitron', sans-serif;
                    }
                    p {
                        font-size: 1em;
                        color: var(--vermillion);
                        margin-top: 25px;
                        margin-bottom: 0px;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default ScreenUp