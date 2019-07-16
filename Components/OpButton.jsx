import React,{Component} from 'react'

class OpButton extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {operation,area} = this.props
        return (
            <div>
                <input type="button" value={operation}/>
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
                        background-color: ${operation == '=' || operation == 'del' ? 'var(--vermillion-mod)' : 'var(--vermillion)'};
                        font-size: 2em;
                        font-family: 'Orbitron', sans-serif;
                    }
                    input:hover {
                        background-color: var(--cornflower-blue);
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

export default OpButton