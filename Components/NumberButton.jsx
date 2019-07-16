import React,{Component} from 'react'

class NumberButton extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {number,area} = this.props
        return (
            <div>
                <input type="button" value={number}/>
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
                        background-color: var(--trolley-grey);
                        color: var(--platinum);
                        font-size: 2em;
                        font-family: 'Orbitron', sans-serif;
                    }
                    input:hover {
                        background-color: var(--cornflower-blue);
                        color: var(--registration-black);
                    }
                    input:active {
                        box-shadow: 5px 5px 5px var(--registration-black) inset;
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

export default NumberButton