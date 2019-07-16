import React,{Component} from 'react'

class ScreenDown extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <p>0</p>
                <style jsx>
                    {`
                    div {
                        font-family: 'Orbitron', sans-serif;
                    }
                    p {
                        font-size: 2em;
                        color: var(--platinum);
                        margin: 0px;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default ScreenDown